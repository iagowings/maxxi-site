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
<meta property="og:image" content="https://www.maxxisaude.com/assets/logo-primary.png"/>
<meta name="twitter:card" content="summary"/>
<link rel="preconnect" href="https://unpkg.com" crossorigin/>
<link rel="preconnect" href="https://connect.facebook.net"/>
<link rel="icon" type="image/png" href="/assets/logo-mark.png"/>
<link rel="stylesheet" href="/colors_and_type.css?v=@@V@@"/>
<link rel="stylesheet" href="/styles.css?v=@@V@@"/>

<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" integrity="sha384-DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" integrity="sha384-gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
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
<script type="text/babel" src="/shared/primitives.jsx?v=@@V@@"></script>
<script type="text/babel" src="/shared/data.jsx?v=@@V@@"></script>
<script type="text/babel" src="/shared/tweaks.jsx?v=@@V@@"></script>
<script type="text/babel" src="/shared/SpecialtyCard.jsx?v=@@V@@"></script>
<script type="text/babel" src="/shared/acessibilidade.jsx?v=@@V@@"></script>
<script type="text/babel" src="/shared/site.jsx?v=@@V@@"></script>
<script type="text/babel" src="@@PAGE@@?v=@@V@@"></script>
<script src="/shared/consent.js?v=@@V@@" defer></script>
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

  $html = $tpl.Replace("@@TITLE@@", $p.title).Replace("@@DESC@@", $p.desc).Replace("@@CANON@@", $canon).Replace("@@INLINE@@", $inline).Replace("@@PAGE@@", $p.page).Replace("@@V@@", $ver)

  $out = Join-Path $dir "index.html"
  [System.IO.File]::WriteAllText($out, $html, $utf8)
  Write-Output ("wrote " + $out)
  $count++
}
Write-Output ("TOTAL: " + $count + " pages")
