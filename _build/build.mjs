// Chamado pelo gen.ps1 depois de gerar os index.html.
// 1. Compila o JSX (antes era o Babel no navegador do visitante: ~3s de CPU no celular).
// 2. Pre-renderiza cada pagina no #root, para o conteudo aparecer antes do JS.
//    No navegador, o createRoot().render() de cada pagina substitui esse HTML
//    pelo mesmo conteudo, ja interativo.
import { transformSync } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import vm from "node:vm";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const require = createRequire(import.meta.url);
const React = require("react");
const { renderToString } = require("react-dom/server");

// Mesma ordem em que o site sempre carregou os modulos compartilhados.
const SHARED = ["primitives", "data", "blog-data", "tweaks", "SpecialtyCard", "acessibilidade", "site"];

const compile = (src) => transformSync(src, { loader: "jsx", minify: true, target: "es2018" }).code;
const out = (p, s) => { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, s); };

const sharedJs = compile(SHARED.map(n => readFileSync(join(root, "shared", n + ".jsx"), "utf8")).join("\n;\n"));
out(join(root, "dist", "shared.js"), sharedJs);

const pageJs = {};
for (const f of readdirSync(join(root, "pages")).filter(f => f.endsWith(".jsx"))) {
  pageJs["/pages/" + f] = compile(readFileSync(join(root, "pages", f), "utf8"));
  out(join(root, "dist", "pages", f.replace(/\.jsx$/, ".js")), pageJs["/pages/" + f]);
}

mkdirSync(join(root, "dist", "vendor"), { recursive: true });
copyFileSync(join(here, "node_modules/react/umd/react.production.min.js"), join(root, "dist", "vendor", "react.production.min.js"));
copyFileSync(join(here, "node_modules/react-dom/umd/react-dom.production.min.js"), join(root, "dist", "vendor", "react-dom.production.min.js"));

// ponytail: DOM falso minimo, so o que o codigo toca durante o render.
// Se uma pagina nova usar outra API do navegador no render, acrescente aqui.
const noop = () => {};
const fakeEl = () => ({
  setAttribute: noop, addEventListener: noop, removeEventListener: noop,
  querySelector: () => null, querySelectorAll: () => [], classList: { add: noop, remove: noop }, style: {},
});

const pages = JSON.parse(readFileSync(join(here, "pages.json"), "utf8").replace(/^﻿/, ""));
for (const p of pages) {
  let app = null;
  const ctx = {
    React, console,
    ReactDOM: { hydrateRoot: (_, el) => { app = el; }, createRoot: () => ({ render: (el) => { app = el; } }) },
    document: { ...fakeEl(), documentElement: fakeEl(), body: fakeEl(), getElementById: fakeEl, createElement: fakeEl },
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop },
    location: { pathname: "/" + (p.folder ? p.folder + "/" : ""), search: "", hash: "", href: "" },
    navigator: { userAgent: "" },
    matchMedia: () => ({ matches: false, addEventListener: noop, removeEventListener: noop }),
    IntersectionObserver: class { observe() {} unobserve() {} disconnect() {} },
    setTimeout: noop, clearTimeout: noop, setInterval: noop, clearInterval: noop,
    CustomEvent: class {}, addEventListener: noop, removeEventListener: noop, dispatchEvent: noop,
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  const inline = (p.inline || "").replace(/<\/?script>/g, "");
  for (const code of [inline, sharedJs, pageJs[p.page]]) vm.runInContext(code, ctx);
  if (!app) throw new Error(p.page + " nao chamou renderPage()");

  const file = join(root, p.folder || "", "index.html");
  const html = readFileSync(file, "utf8");
  const shell = '<div id="root"></div>';
  if (!html.includes(shell)) throw new Error(file + ": #root ja preenchido - rode o gen.ps1, nao so o build.mjs");
  // React escapa o texto dentro de <style> (">" vira "&gt;"), o que quebra
  // seletores como "#hero-grid > div" e faz a hidratacao divergir.
  const ent = { "&gt;": ">", "&lt;": "<", "&amp;": "&", "&quot;": '"', "&#x27;": "'" };
  const body = renderToString(app).replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g,
    (_, a, css, b) => a + css.replace(/&gt;|&lt;|&amp;|&quot;|&#x27;/g, m => ent[m]) + b);
  writeFileSync(file, html.replace(shell, '<div id="root">' + body + "</div>"));
  console.log("prerender " + (p.folder || "/"));
}
