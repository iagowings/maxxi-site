# Maxxi Saúde — Site Institucional

Site institucional da **Maxxi Saúde**, clínica de diagnóstico por imagem e análises clínicas em Altamira/PA.  
Construído com **React 18** (via CDN + Babel standalone) — sem build steps, sem bundler, sem Node.js.

---

## 📁 Estrutura de Pastas

As URLs **espelham o site publicado** (`maxxisaude.com`): cada página é uma pasta com
`index.html`, servida em URL limpa com barra final (ex.: `/especialidades/`). Veja o
mapa completo e o guia de migração em [`SEO-MIGRACAO.md`](SEO-MIGRACAO.md).

```
novo-site/
├── index.html                       ← Home  ·  /
├── especialidades/index.html        ← /especialidades/
├── exames/index.html                ← /exames/  (hub)
│   └── <slug>/index.html            ← /exames/tomografia-computadorizada/ … (9 exames)
├── tomografia-128-canais/index.html ← /tomografia-128-canais/  (tecnologia)
├── convenios/index.html             ← /convenios/
├── agendar-exame/index.html         ← /agendar-exame/
├── resultados/index.html            ← /resultados/
├── sobre/index.html                 ← /sobre/
├── faq/index.html                   ← /faq/
├── contato/index.html               ← /contato/
├── termos-e-condicoes/index.html    ← /termos-e-condicoes/
├── politica-de-cookies-br/index.html← /politica-de-cookies-br/
├── politica-de-privacidade/index.html ← /politica-de-privacidade/  (LGPD)
│
├── sitemap.xml · robots.txt         ← SEO
├── _redirects · .htaccess           ← redirects 301 (Netlify/Cloudflare · Apache)
│
├── colors_and_type.css              ← Design tokens
├── styles.css                       ← Estilos globais
│
├── assets/                          ← Imagens e logos
│
├── shared/                          ← Componentes React compartilhados
│   ├── primitives.jsx               ← Icon, Button, Badge, Card, Field, etc.
│   ├── data.jsx                     ← SPECIALTIES, EQUIPMENT, EXAMES, CONVENIOS, FAQ, SOCIAL
│   ├── consent.js                   ← aviso de cookies (LGPD) + Meta Pixel (cole o ID no topo)
│   ├── tweaks.jsx                   ← Painel de customização
│   ├── SpecialtyCard.jsx            ← Cards de especialidade
│   └── site.jsx                     ← Header, Footer, WhatsApp Bubble, PageShell
│
├── pages/                           ← Componentes de página (renderizam no #root)
│   ├── home.jsx · especialidades.jsx · tecnologia.jsx · sobre.jsx
│   ├── resultados.jsx · faq.jsx · contato.jsx
│   ├── convenios.jsx · agendar.jsx
│   ├── exames.jsx                   ← hub de exames
│   ├── exame.jsx                    ← template de exame (lê window.EXAME_SLUG)
│   └── legal.jsx                    ← termos + política (lê window.LEGAL_KEY)
│
├── _build/                          ← gerador dos index.html (pages.json + gen.ps1)
└── README.md
```

> **Importante:** todos os caminhos internos são **absolutos** (`/assets/…`, `/shared/…`,
> `/exames/…`). O site precisa ser servido a partir da **raiz do domínio**.

---

## 🚀 Como Rodar

### Opção 1 — Servidor HTTP simples (recomendado)

O site usa `<script type="text/babel" src="...">` que requer um servidor HTTP real (não funciona abrindo direto pelo `file://`).

#### Com Python (já vem no macOS/Linux):

```bash
cd "novo site"
python -m http.server 8000
```

Acesse: [http://localhost:8000](http://localhost:8000)

#### Com Node.js (se tiver instalado):

```bash
npx -y serve .
```

Acesse o endereço mostrado no terminal (normalmente `http://localhost:3000`).

#### Com PHP (se tiver instalado):

```bash
php -S localhost:8000
```

#### Com a extensão Live Server (VS Code):

1. Instale a extensão **Live Server** no VS Code.
2. Clique com o botão direito em `index.html` → **Open with Live Server**.
3. O navegador abre automaticamente.

### Opção 2 — Extensão no navegador

Instale a extensão **Web Server for Chrome** ou **Live Server** e aponte para a pasta do projeto.

---

## 🧱 Arquitetura

| Camada | Tecnologia | Detalhes |
|--------|-----------|---------|
| **UI** | React 18 (CDN) | Componentes JSX transpilados no browser via Babel Standalone |
| **Estilo** | CSS puro + Custom Properties | Design tokens em `colors_and_type.css`, sem frameworks CSS |
| **Roteamento** | Multi-page (MPA), URLs limpas | Cada pasta tem um `index.html` que carrega os mesmos shared modules. URLs espelham `maxxisaude.com` |
| **Estado** | `localStorage` + Custom Events | O painel "Tweaks" salva preferências e sincroniza entre páginas/abas |

### Fluxo de carregamento de cada página (caminhos absolutos):

```
<pasta>/index.html
  ├── /colors_and_type.css    (design tokens)
  ├── /styles.css             (estilos globais)
  ├── React + ReactDOM + Babel (CDN)
  ├── /shared/primitives.jsx  (componentes base)
  ├── /shared/data.jsx        (dados)
  ├── /shared/tweaks.jsx      (customização)
  ├── /shared/SpecialtyCard.jsx
  ├── /shared/site.jsx        (Header, Footer, PageShell)
  ├── (opcional) <script>window.EXAME_SLUG / LEGAL_KEY = "…"</script>
  └── /pages/<página>.jsx     (componentes da página + ReactDOM.render)
```

---

## ✏️ Como Editar

### Alterar dados da clínica

Edite o arquivo [`shared/data.jsx`](shared/data.jsx):
- **Especialidades**: array `SPECIALTIES` — adicione/remova/edite entradas.
- **Equipamentos**: array `EQUIPMENT`.
- **Exames** (páginas `/exames/<slug>/`): array `EXAMES`.
- **Convênios**: array `CONVENIOS`.
- **FAQ**: array `FAQ`.
- **WhatsApp geral**: constante `GENERAL_WHATS`.

### Alterar cores e tipografia

Edite [`colors_and_type.css`](colors_and_type.css) — todas as cores, fontes, espaçamentos e sombras são CSS Custom Properties no `:root`.

### Adicionar nova página

1. Crie `pages/nova-pagina.jsx` com um componente que use `<PageShell>` e `ReactDOM.createRoot(...)`.
2. Adicione uma entrada em [`_build/pages.json`](_build/pages.json) com `folder` (= slug da URL),
   `title`, `desc` e `page` (`/pages/nova-pagina.jsx`).
3. Rode o gerador: `powershell -File _build/gen.ps1` — ele cria `nova-pagina/index.html`
   com canonical, Open Graph e os scripts corretos.
4. Adicione o link no menu/rodapé em [`shared/site.jsx`](shared/site.jsx) (use caminho absoluto, ex.: `/nova-pagina/`).
5. Inclua a URL em [`sitemap.xml`](sitemap.xml).

> **URLs e SEO:** as URLs imitam o site publicado para preservar ranqueamento.
> Antes de renomear/remover qualquer URL existente, leia [`SEO-MIGRACAO.md`](SEO-MIGRACAO.md).

### Substituir imagens placeholder

- Coloque as imagens reais na pasta `assets/`.
- No hero da home (`pages/home.jsx`), o bloco azul com gradiente é um placeholder para a foto da clínica.
- No contato (`pages/contato.jsx`), o mapa SVG é demonstrativo — substitua por um `<iframe>` do Google Maps.

---

## ⚠️ Observações

- **Sem build**: não há `npm install`, `webpack`, `vite` ou qualquer passo de compilação. Tudo roda direto no navegador.
- **Babel no browser**: ideal para prototipagem e sites de pequeno/médio porte. Para produção com milhares de acessos, considere pré-compilar o JSX.
- **Fonts**: usa [Mulish](https://fonts.google.com/specimen/Mulish) e [Nunito](https://fonts.google.com/specimen/Nunito) via Google Fonts (carregadas no CSS).
- **Ícones**: SVGs inline estilo Lucide, definidos em `shared/primitives.jsx`. Para adicionar novos ícones, adicione paths no objeto `paths` da função `Icon`.

---

## 📱 Funcionalidades

- ✅ 21 URLs completas: institucionais + hub de exames + 9 páginas `/exames/<slug>/`
- ✅ URLs limpas espelhando `maxxisaude.com` (preservação de SEO) — ver [`SEO-MIGRACAO.md`](SEO-MIGRACAO.md)
- ✅ Menu responsivo (desktop + mobile hamburger)
- ✅ Bolha flutuante de WhatsApp com seletor de especialidade
- ✅ Cards de especialidade com 3 layouts (clássico, retrato, mínimo)
- ✅ Painel de customização (Tweaks): cor protagonista, densidade, layout de card
- ✅ Animações de reveal on scroll
- ✅ Filtro e busca por especialidade/médico/exame
- ✅ Acessibilidade: `focus-visible`, `prefers-reduced-motion`, `aria-label`
- ✅ SEO: `<title>`, `meta description`, **canonical**, **Open Graph**, `sitemap.xml`, `robots.txt`, redirects 301
