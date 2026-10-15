# Generates clean-URL index.html shells from pages.json.
# Pure ASCII script; all accented content lives in pages.json (read as UTF-8).
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$utf8 = New-Object System.Text.UTF8Encoding($false)
# Query de versao: obriga o navegador a buscar CSS/JSX novos apos cada build,
# em vez de servir a copia antiga do cache ate ela expirar.
$ver = Get-Date -Format "yyyyMMddHHmm"

$json = [System.IO.File]::ReadAllText((Join-Path $PSScriptRoot "pages.json"), [System.Text.Encoding]::UTF8)
$pages = $json | ConvertFrom-Json

$tpl = @'
<!doctype html>
<html lang="pt-BR">
<head>
<!-- Google tag (gtag.js): a fila dataLayer nasce aqui; o gtag.js e baixado junto com o resto do JS, depois da 1a pintura (ver loader no fim do head) -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BCMCHPJ1W4');
</script>
<meta charset="utf-8"/>
<title>@@TITLE@@</title>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="description" content="@@DESC@@"/>
<link rel="canonical" href="@@CANON@@"/>
<meta name="robots" content="index, follow"/>
<meta property="og:type" content="website"/>
<meta property="og:locale" content="pt_BR"/>
<meta property="og:site_name" content="Maxxi Saude"/>
<meta property="og:title" content="@@TITLE@@"/>
<meta property="og:description" content="@@DESC@@"/>
<meta property="og:url" content="@@CANON@@"/>
<meta property="og:image" content="@@IMG@@"/>
<meta name="twitter:card" content="summary_large_image"/>
<link rel="preload" href="/assets/fonts/mulish-latin.woff2" as="font" type="font/woff2" crossorigin/>
<link rel="preconnect" href="https://connect.facebook.net"/>
<link rel="icon" type="image/png" href="/assets/logo-mark.png"/>
<link rel="stylesheet" href="/colors_and_type.css?v=@@V@@"/>
<link rel="stylesheet" href="/styles.css?v=@@V@@"/>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://www.maxxisaude.com/#clinic",
  "name": "Maxxi Saude",
  "url": "https://www.maxxisaude.com/",
  "image": "https://www.maxxisaude.com/assets/logo-primary.png",
  "logo": "https://www.maxxisaude.com/assets/logo-primary.png",
  "telephone": "+55 93 3515-1122",
  "priceRange": "$$",
  "medicalSpecialty": ["Radiology", "Diagnostic imaging"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tv. Coronel Tancredo, 45, Centro",
    "addressLocality": "Altamira",
    "addressRegion": "PA",
    "addressCountry": "BR"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "07:00",
    "closes": "19:00"
  }
}
</script>
@@LD@@
<script>
// O HTML ja vem pre-renderizado; o JS so liga menu, bolha do WhatsApp etc.
// Carrega depois da pagina pintada (LCP) e carregada: tira a CPU do React do
// caminho da foto do topo. Sem suporte a LCP (Safari), so espera o load.
(function () {
  var painted = !(window.PerformanceObserver && PerformanceObserver.supportedEntryTypes &&
                  PerformanceObserver.supportedEntryTypes.indexOf("largest-contentful-paint") >= 0);
  var loaded = false, started = false;
  function go() {
    if (started || !painted || !loaded) return;
    started = true;
    ["/dist/vendor/react.production.min.js", "/dist/vendor/react-dom.production.min.js",
     "/dist/shared.js?v=@@V@@", "/dist@@PAGEJS@@?v=@@V@@", "/shared/consent.js?v=@@V@@",
     "https://www.googletagmanager.com/gtag/js?id=G-BCMCHPJ1W4"].forEach(function (src) {
      var s = document.createElement("script"); s.src = src; s.async = false; document.body.appendChild(s);
    });
  }
  if (!painted) new PerformanceObserver(function () { painted = true; go(); }).observe({ type: "largest-contentful-paint", buffered: true });
  addEventListener("load", function () { loaded = true; go(); });
})();
</script>
</head>
<body>
<div id="root"></div>
<noscript>
<div style="max-width:640px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif;line-height:1.6">
<h1>Maxxi Sa&uacute;de &middot; Altamira/PA</h1>
<p>Diagn&oacute;stico por imagem e an&aacute;lises cl&iacute;nicas. Tomografia de 128 canais, resson&aacute;ncia magn&eacute;tica, mamografia digital, ultrassonografia, raio-X com plant&atilde;o 24h e laborat&oacute;rio.</p>
<p>Tv. Coronel Tancredo, 45 &middot; Centro &middot; Altamira/PA &middot; Seg&ndash;S&aacute;b, 7h &agrave;s 19h</p>
<p>WhatsApp: <a href="https://wa.me/5593991801155">(93) 99180-1155</a> &middot; Telefone: (93) 3515-1122</p>
<p>Este site precisa de JavaScript. Ative-o no navegador para ver todo o conte&uacute;do.</p>
<p>CNPJ 11.503.226/0001-21 &middot; Respons&aacute;vel t&eacute;cnico: Dr. An&iacute;sio Fernando Chaves &middot; CRM 9422 &middot; R.Q.E. 6391</p>
</div>
</noscript>
@@INLINE@@
</body>
</html>
'@

$count = 0
foreach ($p in $pages) {
  $folder = $p.folder
  if ([string]::IsNullOrEmpty($folder)) {
    $canon = "https://www.maxxisaude.com/"
    $dir = $root
  } else {
    $canon = "https://www.maxxisaude.com/$folder/"
    $dir = Join-Path $root ($folder -replace "/", "\")
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  }

  $inline = ""
  if (-not [string]::IsNullOrEmpty($p.inline)) { $inline = $p.inline }

  # MedicalTest structured data para as paginas de exame (template /pages/exame.jsx)
  # e para o hub da tomografia - reaproveita title/desc ja revisados, sem duplicar
  # conteudo em outro lugar.
  $ld = ""
  if ($p.page -eq "/pages/exame.jsx" -or $folder -eq "tomografia-128-canais") {
    $titleEsc = $p.title -replace '"', '\"'
    $descEsc  = $p.desc  -replace '"', '\"'
    $ld = @"
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalTest",
  "name": "$titleEsc",
  "description": "$descEsc",
  "url": "$canon",
  "provider": { "@id": "https://www.maxxisaude.com/#clinic" }
}
</script>
"@
  } elseif ($p.page -eq "/pages/blog-post.jsx") {
    $titleEsc = $p.title -replace '"', '\"'
    $descEsc  = $p.desc  -replace '"', '\"'
    $date = $p.date
    $ld = @"
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "$titleEsc",
  "description": "$descEsc",
  "datePublished": "$date",
  "dateModified": "$date",
  "url": "$canon",
  "inLanguage": "pt-BR",
  "author": { "@id": "https://www.maxxisaude.com/#clinic" },
  "publisher": { "@id": "https://www.maxxisaude.com/#clinic" }
}
</script>
"@
  }

  # og:image por pagina (ex.: arte do evento no preview do WhatsApp); padrao = logo.
  $img = "https://www.maxxisaude.com/assets/logo-primary.png"
  if (-not [string]::IsNullOrEmpty($p.image)) { $img = $p.image }

  $html = $tpl.Replace("@@IMG@@", $img).Replace("@@TITLE@@", $p.title).Replace("@@DESC@@", $p.desc).Replace("@@CANON@@", $canon).Replace("@@INLINE@@", $inline).Replace("@@LD@@", $ld).Replace("@@PAGEJS@@", ($p.page -replace "\.jsx$", ".js")).Replace("@@V@@", $ver)

  $out = Join-Path $dir "index.html"
  [System.IO.File]::WriteAllText($out, $html, $utf8)
  Write-Output ("wrote " + $out)
  $count++
}
Write-Output ("TOTAL: " + $count + " pages")

# Compila o JSX e pre-renderiza o HTML de cada pagina (ver build.mjs).
node (Join-Path $PSScriptRoot "build.mjs")
if ($LASTEXITCODE -ne 0) { throw "build.mjs falhou" }
