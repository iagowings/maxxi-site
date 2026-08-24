/* =============================================================
   Meta Pixel + aviso de cookies (LGPD)
   Sem ID preenchido: nada carrega e nenhum aviso aparece.
   Cole o ID do pixel (Gerenciador de Eventos > Fontes de dados).
   ============================================================= */
var META_PIXEL_ID = "3024665221116418";

(function () {
  if (!META_PIXEL_ID) return;

  var KEY = "maxxi-consent-v1";
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}

  function loadPixel() {
    /* snippet oficial da Meta */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', META_PIXEL_ID);
    fbq('track', 'PageView');

    // Sinal dedicado da página anunciada (retargeting + otimização).
    if (location.pathname.indexOf("/tomografia-128-canais") === 0) {
      fbq('track', 'ViewContent', { content_name: 'tomografia-128-canais' });
    }

    // Clique em qualquer CTA de WhatsApp = Lead. Nenhum dado de saúde é enviado.
    document.addEventListener("click", function (ev) {
      var a = ev.target.closest && ev.target.closest('a[href*="wa.me"]');
      if (a && window.fbq) fbq('track', 'Lead');
    }, true);
  }

  function decide(ok) {
    try { localStorage.setItem(KEY, ok ? "granted" : "denied"); } catch (e) {}
    var el = document.getElementById("consent-bar");
    if (el) el.remove();
    if (!ok && window.fbq) fbq("consent", "revoke"); // para de enviar já nesta visita
  }

  // Modelo opt-out: o pixel sobe em toda visita, exceto para quem recusou.
  if (saved !== "denied") loadPixel();
  if (saved) return; // já escolheu — não mostra o aviso de novo

  function banner() {
    var bar = document.createElement("div");
    bar.id = "consent-bar";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Aviso de cookies");
    bar.innerHTML =
      '<p>Usamos cookies para medir a audiência do site e o resultado dos nossos anúncios. Você pode recusar. ' +
      'Nenhum dado de saúde é coletado aqui. ' +
      '<a href="/politica-de-cookies-br/">Política de Cookies</a> · ' +
      '<a href="/politica-de-privacidade/">Privacidade</a></p>' +
      '<div><button type="button" data-no>Recusar</button>' +
      '<button type="button" data-yes>Aceitar</button></div>';
    bar.querySelector("[data-yes]").onclick = function () { decide(true); };
    bar.querySelector("[data-no]").onclick = function () { decide(false); };
    document.body.appendChild(bar);
  }

  var css = document.createElement("style");
  css.textContent =
    '#consent-bar{position:fixed;left:24px;bottom:calc(24px + var(--cta-bar, 0px));z-index:80;max-width:420px;' +
    'background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:16px;padding:16px 18px;' +
    'box-shadow:0 18px 44px rgba(20,52,71,.18);font-family:var(--font-sans,system-ui,sans-serif);' +
    'display:flex;flex-direction:column;gap:12px}' +
    '#consent-bar p{margin:0;font-size:13px;line-height:1.5;color:#3f4c55}' +
    '#consent-bar a{color:#1a6ea8;text-decoration:underline}' +
    '#consent-bar div{display:flex;gap:8px;justify-content:flex-end}' +
    '#consent-bar button{cursor:pointer;border-radius:999px;padding:9px 18px;font-size:13px;' +
    'font-weight:700;font-family:inherit;border:1px solid rgba(0,0,0,.12);background:#fff;color:#3f4c55}' +
    '#consent-bar [data-yes]{background:var(--ms-green-500,#7ec365);border-color:transparent;color:#08301a}' +
    '@media(max-width:560px){#consent-bar{left:12px;right:12px;bottom:calc(12px + var(--cta-bar, 0px));max-width:none}}';
  document.head.appendChild(css);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", banner);
  else banner();
})();
