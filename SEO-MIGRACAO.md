# Migração de SEO — espelhando a estrutura de links de maxxisaude.com

Este site foi reorganizado para usar **exatamente as mesmas URLs** já indexadas pelo
Google no site atual (`https://www.maxxisaude.com/`, WordPress). Assim, ao publicar
este projeto no lugar do atual, as páginas ranqueadas continuam resolvendo no mesmo
endereço — sem perda de autoridade, sem 404.

## Como as URLs limpas funcionam

Cada página vive em uma **pasta com `index.html`**. Servidores estáticos servem
`/especialidades/index.html` no endereço `/especialidades/`, sem `.html` na barra de
endereços. Todos os caminhos de CSS, scripts, imagens e links internos são **absolutos**
(começam com `/`), então qualquer página — inclusive as de dois níveis como
`/exames/ressonancia-magnetica/` — carrega corretamente.

## Mapa de URLs (canônicas)

Estas URLs **batem 1:1** com o sitemap do site atual e não precisam de redirect:

| URL | Página | Fonte JSX |
|-----|--------|-----------|
| `/` | Home | `pages/home.jsx` |
| `/especialidades/` | Especialidades | `pages/especialidades.jsx` |
| `/exames/` | Hub de exames | `pages/exames.jsx` |
| `/exames/tomografia-computadorizada/` | Exame | `pages/exame.jsx` |
| `/exames/angiotomografia-128-canais/` | Exame | `pages/exame.jsx` |
| `/exames/ressonancia-magnetica/` | Exame | `pages/exame.jsx` |
| `/exames/mamografia-digital/` | Exame | `pages/exame.jsx` |
| `/exames/ultrassonografia/` | Exame | `pages/exame.jsx` |
| `/exames/radiografia-em-geral/` | Exame | `pages/exame.jsx` |
| `/exames/ecocardiograma/` | Exame | `pages/exame.jsx` |
| `/exames/densitometria-ossea/` | Exame | `pages/exame.jsx` |
| `/exames/laboratorio-de-analises-clinicas/` | Exame | `pages/exame.jsx` |
| `/convenios/` | Convênios | `pages/convenios.jsx` |
| `/agendar-exame/` | Agendamento | `pages/agendar.jsx` |
| `/contato/` | Contato | `pages/contato.jsx` |
| `/tomografia-128-canais/` | Tecnologia/Tomografia | `pages/tecnologia.jsx` |
| `/termos-e-condicoes/` | Legal | `pages/legal.jsx` |
| `/politica-de-cookies-br/` | Legal | `pages/legal.jsx` |

Páginas **novas** (não existiam no site atual, não conflitam com SEO):
`/resultados/`, `/sobre/`, `/faq/`.

## Redirects 301 (configurados)

Em [`_redirects`](_redirects) (Netlify/Cloudflare Pages) e [`.htaccess`](.htaccess) (Apache/Hostinger):

| De | Para |
|----|------|
| `/especialidades.html` e demais `.html` antigos | pasta limpa equivalente |
| `/fale-conosco/` | `/contato/` |
| `/altamira/` | `/` |
| `/cestrelas/`, `/obrigado-mulher/`, `/obrigado-voucher/` | `/` |

> **Resultados de exames:** continua sendo o portal externo MedCloud
> (`https://www.medcloud.co/?page=maxxi`), igual ao site atual. A página `/resultados/`
> deste projeto leva o paciente até lá.

## Onde mexer

- **Adicionar/editar exame:** array `EXAMES` em [`shared/data.jsx`](shared/data.jsx).
  Depois crie a pasta `/exames/<slug>/` rodando o gerador (abaixo) e adicione a URL ao
  `sitemap.xml`.
- **Links do menu/rodapé:** função `Header` e arrays de `FooterLinks` em
  [`shared/site.jsx`](shared/site.jsx) — sempre use caminhos absolutos (`/exames/`).
- **Título / description / canonical de cada página:** [`_build/pages.json`](_build/pages.json).

## Regenerar os `index.html`

Os shells HTML são gerados a partir de [`_build/pages.json`](_build/pages.json):

```powershell
powershell -File _build/gen.ps1
```

O gerador escreve cada `<pasta>/index.html` com título, description, canonical, Open Graph
e os scripts corretos. Não há outro passo de build — o JSX continua sendo transpilado no
navegador via Babel. A pasta `_build/` é só de manutenção e pode ficar fora do deploy.

## Checklist de publicação

1. Subir todos os arquivos mantendo a estrutura de pastas (servir a partir da **raiz** do domínio).
2. Confirmar que `/sitemap.xml` e `/robots.txt` respondem.
3. Aplicar o arquivo de redirect compatível com a hospedagem (`.htaccess` **ou** `_redirects`).
4. No Google Search Console: reenviar `sitemap.xml` e usar "Inspeção de URL" em 2–3 páginas-chave.
5. Conferir que as URLs antigas com `.html` e as páginas WP legadas retornam **301** para o destino certo.
