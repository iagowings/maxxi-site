/* global React, ReactDOM, Icon, WhatsAppMark, PageShell, RECEPCAO_WHATS, PHONE_FIXED */

/* =============================================================
   /workshop/ — convite do 2º Workshop Médico Cardiovascular.
   Público: médicos. Tom de convite, não de anúncio: menos botões,
   mais respiro, texto técnico sem exagero de marketing.

   Confirmação de presença cai no WhatsApp da Recepção com a mensagem
   já escrita (nome + CRM) — sem formulário nem backend para manter.
   Passado o evento, troque os textos ou remova a página do sitemap.
   ============================================================= */

const EVENTO = {
  edicao: "2º",
  data: "4 de dezembro",
  dataCurta: "04/12",
  dia: "Sexta-feira",
  // ponytail: horário ainda não definido — preencha aqui e ele aparece na página.
  horario: "",
  local: "Maxxi Saúde",
  endereco: "Tv. Coronel Tancredo, 45 · Centro · Altamira/PA",
};

const WS_RSVP = "https://wa.me/" + RECEPCAO_WHATS + "?text=" + encodeURIComponent(
  "Olá! Confirmo minha presença no " + EVENTO.edicao + " Workshop Médico Cardiovascular (" + EVENTO.dataCurta + ").\n" +
  "Nome: \nCRM/Especialidade: "
);

const WS_MAPS = "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Maxxi Saúde, Travessa Coronel Tancredo, 45, Centro, Altamira, PA");

const PILARES = [
  {
    icon: "scan-line",
    t: "Angiotomografia de 128 canais",
    d: "Aquisição rápida e reconstruções 3D de alta resolução para o estudo do coração e dos vasos — a única tomografia de 128 canais em clínica privada da região do Xingu.",
  },
  {
    icon: "heart-pulse",
    t: "Ressonância magnética de alto campo",
    d: "Caracterização tecidual e avaliação funcional do miocárdio, sem radiação — complemento natural da tomografia na investigação cardiovascular.",
  },
  {
    icon: "file-text",
    t: "Laudo que responde à pergunta clínica",
    d: "Laudos assinados por especialistas, com diálogo direto entre quem solicita e quem interpreta o exame.",
  },
];

const TEMAS = [
  ["Visão geral da TC e RM cardiovascular", "Indicações, protocolos e o que cada método entrega na prática clínica."],
  ["Escore de cálcio (CACS) na estratificação de risco", "Como o CACS refina o risco cardiovascular e orienta a conduta preventiva."],
  ["TC e RM na doença arterial coronariana", "Angiotomografia de coronárias e ressonância na investigação e no seguimento da DAC."],
  ["RM nas cardiomiopatias", "Caracterização tecidual e realce tardio no diagnóstico diferencial das cardiomiopatias."],
];

function WorkshopPage() {
  return (
    <PageShell active="workshop" hideBubble>
      <div className="ws">

        {/* ---------- Hero ---------- */}
        <section className="ws-hero">
          <div className="container ws-hero-grid">
            <div>
              <span className="ws-pill">Convite · Direcionado a médicos</span>
              <h1 className="ws-h1">
                <span className="ws-ed">{EVENTO.edicao} Workshop Médico</span>
                Cardiovascular
              </h1>
              <p className="ws-lead">
                Um encontro dedicado à imagem cardiovascular: como tecnologia de ponta
                e laudo especializado levam a diagnósticos cardiovasculares mais precisos.
              </p>

              <div className="ws-info">
                <div className="ws-info-item">
                  <Icon name="calendar-days" size={26}/>
                  <span>
                    <strong>{EVENTO.data}</strong>
                    <small>{EVENTO.dia}{EVENTO.horario && " · " + EVENTO.horario}</small>
                  </span>
                </div>
                <div className="ws-info-item">
                  <Icon name="map-pin" size={26}/>
                  <span>
                    <strong>{EVENTO.local}</strong>
                    <small>{EVENTO.endereco}</small>
                  </span>
                </div>
              </div>

              <div className="ws-ctas">
                <a className="ws-btn" href={WS_RSVP} target="_blank" rel="noopener">
                  <WhatsAppMark size={22}/> Confirmar presença
                </a>
                <a className="ws-link" href="#temas">Ver os temas <Icon name="arrow-right" size={18}/></a>
              </div>
            </div>

            <figure className="ws-poster">
              {/* Muted é obrigatório para o autoplay funcionar; os controles deixam ligar o som.
                  Com "reduzir movimento" ativo no sistema, não toca sozinho. */}
              <video src="/assets/ultimoevento.mp4" poster="/assets/workshop-cardiovascular.jpg"
                     width="720" height="1280" muted loop playsInline controls preload="metadata"
                     ref={v => { if (v && !matchMedia("(prefers-reduced-motion: reduce)").matches) v.play().catch(() => {}); }}
                     aria-label="Vídeo da 1ª edição do Workshop Médico da Maxxi Saúde"/>
              <figcaption>Como foi a 1ª edição</figcaption>
            </figure>
          </div>
          <Ecg/>
        </section>

        {/* ---------- Proposta ---------- */}
        <section className="ws-sec">
          <div className="container">
            <div className="ws-head">
              <p className="t-eyebrow">O tema</p>
              <h2>Precisão diagnóstica começa na qualidade da imagem.</h2>
              <p className="ws-sub">
                Reunimos médicos da região para mostrar, na prática, como a estrutura de imagem
                da Maxxi Saúde apoia decisões clínicas mais seguras — do rastreio à conduta.
              </p>
            </div>
            <div className="ws-pilares">
              {PILARES.map(p => (
                <article key={p.t} className="ws-card reveal">
                  <span className="ws-card-ico"><Icon name={p.icon} size={26}/></span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Temas ---------- */}
        <section className="ws-sec ws-sec-alt" id="temas">
          <div className="container ws-temas-grid">
            <div className="ws-head">
              <p className="t-eyebrow">O que você vai ver</p>
              <h2>Programação científica</h2>
              <p className="ws-sub">Tomografia e ressonância cardiovascular aplicadas à rotina do consultório.</p>
            </div>
            <ol className="ws-temas">
              {TEMAS.map(([t, d], i) => (
                <li key={t} className="reveal">
                  <span className="ws-num">{String(i + 1).padStart(2, "0")}</span>
                  <span><strong>{t}</strong><span>{d}</span></span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Convite final ---------- */}
        <section className="ws-final">
          <div className="container ws-final-in">
            <p className="ws-pill">{EVENTO.dia} · {EVENTO.dataCurta}</p>
            <h2>Esperamos por você.</h2>
            <p className="ws-lead">
              Confirme sua presença pelo WhatsApp — a mensagem já vai pronta, é só
              completar com seu nome e CRM. Dúvidas: {PHONE_FIXED}.
            </p>
            <div className="ws-ctas ws-ctas-c">
              <a className="ws-btn" href={WS_RSVP} target="_blank" rel="noopener">
                <WhatsAppMark size={22}/> Confirmar presença
              </a>
              <a className="ws-link" href={WS_MAPS} target="_blank" rel="noopener">
                Como chegar <Icon name="arrow-up-right" size={18}/>
              </a>
            </div>
          </div>
        </section>
      </div>
      <WorkshopStyles/>
    </PageShell>
  );
}

function Ecg() {
  return (
    <svg className="ws-ecg" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 30H520l14-18 16 40 18-56 16 52 12-18H1200" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function WorkshopStyles() {
  return (
    <style>{`
      .ws { --navy: var(--ms-blue-900); --ink: #e8f0f5; }
      .ws h2 { font-size: clamp(28px, 3.4vw, 40px); letter-spacing: -0.02em; }

      .ws-hero {
        position: relative; overflow: hidden; color: var(--ink);
        background:
          radial-gradient(60% 70% at 85% 30%, rgba(77,133,164,0.35), transparent 70%),
          radial-gradient(50% 60% at 0% 100%, rgba(126,195,101,0.14), transparent 70%),
          var(--navy);
        padding: 72px 0 96px;
      }
      .ws-hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 64px; align-items: center; }
      .ws-pill {
        display: inline-block; margin: 0 0 22px; padding: 7px 16px; border-radius: 999px;
        font-size: 12px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase;
        color: var(--ms-green-300); border: 1px solid rgba(126,195,101,0.45); background: rgba(126,195,101,0.08);
      }
      .ws-h1 {
        color: #fff; font-weight: 900; line-height: 1.02; letter-spacing: -0.03em;
        font-size: clamp(44px, 6.4vw, 84px); margin: 0 0 24px;
      }
      .ws-ed {
        display: block; font-size: 0.36em; font-weight: 700; letter-spacing: 0.02em;
        color: var(--ms-green-400); margin-bottom: 10px;
      }
      .ws-lead { font-size: 19px; line-height: 1.65; color: rgba(232,240,245,0.86); max-width: 560px; margin: 0 0 32px; }

      .ws-info {
        display: flex; flex-wrap: wrap; gap: 0; margin-bottom: 36px;
        border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12);
      }
      .ws-info-item { display: flex; gap: 14px; align-items: flex-start; padding: 18px 28px 18px 0; color: var(--ms-green-400); }
      .ws-info-item + .ws-info-item { padding-left: 28px; border-left: 1px solid rgba(255,255,255,0.12); }
      .ws-info-item strong { display: block; color: #fff; font-size: 18px; }
      .ws-info-item small { color: rgba(232,240,245,0.7); font-size: 14px; }

      .ws-ctas { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 28px; }
      .ws-ctas-c { justify-content: center; }
      .ws-btn {
        display: inline-flex; align-items: center; gap: 10px; min-height: 56px; padding: 0 30px;
        border-radius: 999px; background: var(--ms-green-500); color: var(--on-green);
        font-weight: 800; font-size: 17px; text-decoration: none;
        box-shadow: 0 12px 32px rgba(126,195,101,0.3);
        transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
      }
      .ws-btn:hover { color: var(--on-green); text-decoration: none; transform: translateY(-2px); box-shadow: 0 16px 40px rgba(126,195,101,0.4); }
      .ws-link { display: inline-flex; align-items: center; gap: 6px; font-weight: 700; color: #fff; min-height: 48px; }
      .ws-link:hover { color: var(--ms-green-300); }

      .ws-poster { margin: 0; justify-self: end; max-width: 400px; }
      .ws-poster figcaption {
        margin-top: 14px; text-align: center; font-size: 12px; font-weight: 800;
        letter-spacing: 0.16em; text-transform: uppercase; color: rgba(232,240,245,0.7);
      }
      .ws-poster video {
        display: block; width: 100%; height: auto; border-radius: 20px; background: #000;
        border: 1px solid rgba(255,255,255,0.14);
        box-shadow: 0 40px 80px rgba(0,0,0,0.45), 0 0 0 10px rgba(255,255,255,0.03);
      }
      .ws-ecg { position: absolute; left: 0; right: 0; bottom: 18px; width: 100%; height: 48px; color: rgba(126,195,101,0.35); }

      .ws-sec { padding: 96px 0; background: var(--bg-page); }
      .ws-sec-alt { background: #fff; }
      .ws-head { max-width: 680px; margin-bottom: 48px; }
      .ws-head h2 { margin: 10px 0 16px; }
      .ws-sub { font-size: 18px; color: var(--fg-muted); }

      .ws-pilares { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
      .ws-card {
        background: #fff; border: 1px solid var(--border-subtle); border-radius: 20px; padding: 32px;
        box-shadow: var(--sh-sm);
      }
      .ws-card h3 { font-size: 20px; margin: 20px 0 10px; }
      .ws-card p { color: var(--fg-muted); margin: 0; }
      .ws-card-ico {
        display: inline-grid; place-items: center; width: 52px; height: 52px; border-radius: 14px;
        background: var(--ms-blue-50); color: var(--ms-blue-500);
      }

      .ws-temas-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 64px; align-items: start; }
      .ws-temas { list-style: none; margin: 0; padding: 0; }
      .ws-temas li { display: flex; gap: 24px; padding: 26px 0; border-bottom: 1px solid var(--border-subtle); }
      .ws-temas li:first-child { padding-top: 0; }
      .ws-temas strong { display: block; color: var(--fg-strong); font-size: 19px; margin-bottom: 4px; }
      .ws-temas li span span { color: var(--fg-muted); }
      .ws-num { font-size: 15px; font-weight: 900; color: var(--ms-green-700); letter-spacing: 0.08em; padding-top: 3px; }

      .ws-final {
        color: var(--ink); text-align: center; padding: 104px 0;
        background: radial-gradient(70% 90% at 50% 0%, rgba(77,133,164,0.35), transparent 70%), var(--navy);
      }
      .ws-final h2 { color: #fff; margin-bottom: 16px; }
      .ws-final-in { max-width: 680px; }
      .ws-final .ws-lead { margin: 0 auto 32px; }

      @media (max-width: 900px) {
        .ws-hero { padding: 48px 0 80px; }
        .ws-hero-grid, .ws-temas-grid { grid-template-columns: 1fr; gap: 40px; }
        .ws-poster { justify-self: center; max-width: 340px; }
        .ws-pilares { grid-template-columns: 1fr; }
        .ws-sec, .ws-final { padding: 64px 0; }
        .ws-head { margin-bottom: 32px; }
      }
      @media (max-width: 560px) {
        .ws-info-item { padding-right: 0; width: 100%; }
        .ws-info-item + .ws-info-item { padding-left: 0; border-left: 0; border-top: 1px solid rgba(255,255,255,0.12); }
        .ws-btn { width: 100%; justify-content: center; }
      }
      @media (prefers-reduced-motion: reduce) { .ws-btn { transition: none; } }
    `}</style>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<WorkshopPage/>);
