# Generates clean-URL index.html shells from pages.json.
# Pure ASCII script; all accented content lives in pages.json (read as UTF-8).
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$utf8 = New-Object System.Text.UTF8Encoding($false)

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
<link rel="icon" type="image/png" href="/assets/logo-mark.png"/>
<link rel="stylesheet" href="/colors_and_type.css"/>
<link rel="stylesheet" href="/styles.css"/>

<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
</head>
<body>
<div id="root"></div>
@@INLINE@@
<script type="text/babel" src="/shared/primitives.jsx"></script>
<script type="text/babel" src="/shared/data.jsx"></script>
<script type="text/babel" src="/shared/tweaks.jsx"></script>
<script type="text/babel" src="/shared/SpecialtyCard.jsx"></script>
<script type="text/babel" src="/shared/site.jsx"></script>
<script type="text/babel" src="@@PAGE@@"></script>
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

  $html = $tpl.Replace("@@TITLE@@", $p.title).Replace("@@DESC@@", $p.desc).Replace("@@CANON@@", $canon).Replace("@@INLINE@@", $inline).Replace("@@PAGE@@", $p.page)

  $out = Join-Path $dir "index.html"
  [System.IO.File]::WriteAllText($out, $html, $utf8)
  Write-Output ("wrote " + $out)
  $count++
}
Write-Output ("TOTAL: " + $count + " pages")
