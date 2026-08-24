/* global React, Icon */
/* =============================================================
   Barra de acessibilidade — aparece no topo de todas as páginas.

   "Ouvir esta página": usa a voz do próprio navegador (SpeechSynthesis).
   Se a página definir window.ROTEIRO_FALA (um array de frases curtas),
   é isso que será lido. Senão, o texto visível da própria página é
   extraído e lido — assim toda página nova já nasce com leitura.

   "Letra maior": marca <html data-letra="grande">; o resto é CSS
   (html[data-letra="grande"] main { zoom }) em styles.css.
   ============================================================= */

const { useState: useStateAC, useEffect: useEffectAC } = React;

const LS_LETRA = "maxxi-letra-grande";

function aplicarLetra(grande) {
  document.documentElement.setAttribute("data-letra", grande ? "grande" : "normal");
}

function lerPreferenciaLetra() {
  try { return localStorage.getItem(LS_LETRA) === "1"; } catch (e) { return false; }
}

/* Texto visível da página, em frases curtas.
   Percorre os nós de texto e agrupa por bloco: assim pega também o que
   está em botões, chips e divs — não só em <p> e títulos. */
function frasesDaPagina() {
  const main = document.querySelector("main");
  if (!main) return [];

  const blocoDe = (el) => {
    let n = el;
    while (n && n !== main) {
      const d = getComputedStyle(n).display;
      if (d !== "inline" && d !== "inline-block" && d !== "contents") return n;
      n = n.parentElement;
    }
    return main;
  };

  const porBloco = new Map();
  const ordem = [];
  const w = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) {
    const no = w.currentNode;
    const t = (no.textContent || "").replace(/\s+/g, " ").trim();
    if (!t) continue;
    const el = no.parentElement;
    if (!el || el.closest(".acess-bar")) continue;
    if (el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.tagName === "NOSCRIPT") continue;
    if (el.getClientRects().length === 0) continue;
    if (el.getAttribute && el.getAttribute("aria-hidden") === "true") continue;
    const b = blocoDe(el);
    if (!porBloco.has(b)) { porBloco.set(b, []); ordem.push(b); }
    porBloco.get(b).push(t);
  }

  const frases = [];
  for (const b of ordem) {
    const texto = porBloco.get(b).join(" ").replace(/\s+/g, " ").trim();
    if (texto.length < 3) continue;
    const comPonto = /[.!?…:]$/.test(texto) ? texto : texto + ".";
    for (const f of (comPonto.match(/[^.!?…]+[.!?…]*/g) || [])) {
      const t = f.trim();
      if (t.length > 1 && !frases.includes(t)) frases.push(t);
    }
  }
  return frases.slice(0, 90);
}

function AcessibilidadeBar() {
  const [grande, setGrande] = useStateAC(lerPreferenciaLetra);
  const [falando, setFalando] = useStateAC(false);
  const [temVoz, setTemVoz] = useStateAC(false);

  useEffectAC(() => {
    if (!("speechSynthesis" in window)) return;
    const checar = () => setTemVoz(window.speechSynthesis.getVoices().length > 0);
    checar();
    window.speechSynthesis.addEventListener("voiceschanged", checar);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", checar);
      window.speechSynthesis.cancel();
    };
  }, []);

  const alternarLetra = () => {
    setGrande(v => {
      const novo = !v;
      try { localStorage.setItem(LS_LETRA, novo ? "1" : "0"); } catch (e) {}
      aplicarLetra(novo);
      return novo;
    });
  };

  const falar = () => {
    const ss = window.speechSynthesis;
    if (falando) { ss.cancel(); setFalando(false); return; }
    const frases = (window.ROTEIRO_FALA && window.ROTEIRO_FALA.length)
      ? window.ROTEIRO_FALA
      : frasesDaPagina();
    if (!frases.length) return;
    ss.cancel();
    const vozes = ss.getVoices();
    const pt = vozes.find(v => /^pt[-_]BR/i.test(v.lang)) || vozes.find(v => /^pt/i.test(v.lang));
    frases.forEach((frase, i) => {
      const u = new SpeechSynthesisUtterance(frase);
      u.lang = "pt-BR";
      if (pt) u.voice = pt;
      u.rate = 0.92;
      if (i === frases.length - 1) u.onend = () => setFalando(false);
      u.onerror = () => setFalando(false);
      ss.speak(u);
    });
    setFalando(true);
  };

  return (
    <div className="acess-bar">
      <div className="container acess-row">
        {temVoz && (
          <button type="button" onClick={falar} className="acess-btn" aria-pressed={falando}>
            <Icon name={falando ? "stop" : "volume"} size={24} stroke={2.2}/>
            <span>{falando ? "Parar a leitura" : "Ouvir esta página"}</span>
          </button>
        )}
        <button type="button" onClick={alternarLetra} className="acess-btn" aria-pressed={grande}>
          <span className="acess-aa" aria-hidden="true">A</span>
          <span>{grande ? "Letra normal" : "Letra maior"}</span>
        </button>
      </div>
    </div>
  );
}

/* Aplica a preferência antes do React montar: evita a página "pular"
   de tamanho depois de carregada. */
aplicarLetra(lerPreferenciaLetra());

Object.assign(window, { AcessibilidadeBar });
