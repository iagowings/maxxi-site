/* global React, ReactDOM, Icon, WhatsAppMark, PageShell, PHONE_FIXED */

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
  iso: "2026-12-04",
  data: "4 de dezembro",
  dataCurta: "04/12",
  dia: "Sexta-feira",
  // ponytail: horário ainda não definido — preencha aqui e ele aparece na página.
  horario: "",
  local: "Maxxi Saúde",
  endereco: "Tv. Coronel Tancredo, 45 · Centro · Altamira/PA",
};

// Confirmações vão para um WhatsApp próprio do evento, não para a Recepção.
const WS_RSVP = "https://wa.me/5593991728939?text=" + encodeURIComponent(
  "Olá, quero confirmar minha presença no 2 Workshop cardiovascular"
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

/* Imagens de terceiros (Wikimedia Commons, licenças abertas). A página diz que
   são ilustrativas e credita autor + licença em cada uma — exigência do CC BY-SA.
   Quando houver casos anonimizados do tomógrafo da Maxxi, troque aqui. */
const GALERIA = [
  {
    src: "/assets/ws-cadrads.jpg", w: 960, h: 609, cls: "ws-g-wide",
    tag: "Angio-TC de coronárias",
    t: "Estenose na DA — CAD-RADS 4A",
    d: "Reformatações multiplanares, MPR curva e cortes transversais da DA, com reconstrução 3D.",
    autor: "MBq", lic: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:CCTA_CAD-RADS_4a.png",
  },
  {
    src: "/assets/ws-tc-3d.jpg", w: 415, h: 512, cls: "ws-g-tall",
    tag: "TC · Volume rendering",
    t: "Reconstrução 3D do coração",
    d: "Anatomia cardíaca e trajeto coronariano — caso de aneurismas coronarianos na doença de Kawasaki.",
    autor: "Hellerhoff", lic: "CC BY-SA 3.0",
    url: "https://commons.wikimedia.org/wiki/File:Coronaraneursymen_bei_Kawasaki-Syndrom_-_CT_-_Volume_rendering_gesamt_-_023.jpg",
  },
  {
    src: "/assets/ws-cacs.jpg", w: 680, h: 580,
    tag: "TC sem contraste",
    t: "Escore de cálcio",
    d: "Calcificação na DA (em amarelo). Escore de Agatston total: 213.",
    autor: "MBq", lic: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:CCTA_Agatston-Score.png",
  },
  {
    src: "/assets/ws-rm-realce.jpg", w: 458, h: 414,
    tag: "RM cardíaca",
    t: "Realce tardio",
    d: "Quatro câmaras com realce tardio de gadolínio em infarto inferior crônico.",
    autor: "Doregan", lic: "CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:4CH_IR_infarct.jpg",
  },
];

/* Faixas de Agatston usuais na prática clínica. O marcador é o caso da galeria (213). */
const CACS_FAIXAS = [
  { faixa: "0", nome: "Ausente" },
  { faixa: "1–99", nome: "Leve" },
  { faixa: "100–399", nome: "Moderada" },
  { faixa: "≥ 400", nome: "Acentuada" },
];
const CACS_EXEMPLO = 213;
// Cada faixa ocupa 25% da barra (escala didática, não linear).
const cacsPos = s => s === 0 ? 12.5 : s < 100 ? 25 + s / 100 * 25 : s < 400 ? 50 + (s - 100) / 300 * 25 : Math.min(75 + (s - 400) / 600 * 25, 97);

/* Força relativa de cada método (0–3). Didático e simplificado de propósito. */
const METODOS = [
  ["Anatomia e estenose coronariana", 3, 1],
  ["Quantificação do cálcio coronariano", 3, 0],
  ["Função ventricular", 2, 3],
  ["Caracterização tecidual e fibrose", 1, 3],
  ["Viabilidade miocárdica", 1, 3],
];

const diasAte = iso => Math.ceil((new Date(iso + "T00:00:00-03:00") - Date.now()) / 864e5);

const PALESTRANTE = {
  nome: "Dr. Anderson Armstrong",
  foto: "/assets/dr-anderson-armstrong.jpg",
  cv: [
    "Especialista em Cardiologia e Ecocardiografia pela Sociedade Brasileira de Cardiologia (SBC)",
    "Mestre em Ciências da Saúde pela Universidade de Pernambuco (UPE)",
    "Doutor em Medicina pela Escola Bahiana de Medicina e Saúde Pública",
    "Fellow em Imagem Cardiovascular pela Johns Hopkins University",
    "Professor adjunto e preceptor da Residência de Cardiologia da UNIVASF",
  ],
};

function WorkshopPage() {
  const faltam = diasAte(EVENTO.iso);
  return (
    <PageShell active="workshop" hideBubble>
      <div className="ws">

        {/* ---------- Hero ---------- */}
        <section className="ws-hero">
          <div className="container ws-hero-grid">
            <div>
              <span className="ws-pill">Convite · Direcionado a médicos</span>
              {faltam > 0 && (
                <span className="ws-count"><b>{faltam}</b> {faltam === 1 ? "dia" : "dias"} para o evento</span>
              )}
              <h1 className="ws-h1">
                <span className="ws-ed">{EVENTO.edicao} Workshop Médico</span>
                Cardiovascular
              </h1>
              <p className="ws-lead">
                Um encontro dedicado à imagem cardiovascular: como tecnologia de ponta
                e laudo especializado levam a diagnósticos cardiovasculares mais precisos.
              </p>

              <a className="ws-speaker" href="#palestrante">
                {/* Recorte no rosto via background: a foto original é de meio corpo. */}
                <span className="ws-speaker-foto" style={{ backgroundImage: "url(" + PALESTRANTE.foto + ")" }} aria-hidden="true"/>
                <span>
                  <small>Palestrante</small>
                  <strong>{PALESTRANTE.nome}</strong>
                  <span>Cardiologista e ecocardiografista (SBC) · Fellow em imagem cardiovascular pela Johns Hopkins University</span>
                </span>
              </a>

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

        {/* ---------- Palestrante ---------- */}
        <section className="ws-sec ws-sec-alt" id="palestrante">
          <div className="container ws-bio">
            <img className="ws-bio-foto" src={PALESTRANTE.foto} width="883" height="1210"
                 alt={PALESTRANTE.nome + ", cardiologista"} loading="lazy"/>
            <div>
              <p className="t-eyebrow">Palestrante</p>
              <h2>{PALESTRANTE.nome}</h2>
              <ul className="ws-cv">
                {PALESTRANTE.cv.map(c => (
                  <li key={c}><Icon name="check-circle" size={22}/><span>{c}</span></li>
                ))}
              </ul>
            </div>
          </div>
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

        {/* ---------- Galeria ---------- */}
        <section className="ws-gal">
          <div className="container">
            <div className="ws-head">
              <p className="ws-pill">Imagem cardiovascular</p>
              <h2>O que a imagem de alta definição revela.</h2>
              <p className="ws-sub">
                Da anatomia coronariana à caracterização do miocárdio: exemplos do tipo de
                informação que TC e RM cardíacas colocam nas mãos do médico assistente.
              </p>
            </div>
            <div className="ws-grid">
              {GALERIA.map(g => (
                <figure key={g.src} className={"ws-fig reveal " + (g.cls || "")}>
                  <div className="ws-fig-img">
                    <img src={g.src} width={g.w} height={g.h} alt={g.tag + ": " + g.t} loading="lazy"/>
                  </div>
                  <figcaption>
                    <small>{g.tag}</small>
                    <strong>{g.t}</strong>
                    <span>{g.d}</span>
                    <a href={g.url} target="_blank" rel="noopener">Imagem: {g.autor} · {g.lic} · Wikimedia Commons</a>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="ws-nota">
              Imagens ilustrativas de casos publicados sob licença aberta — não são exames realizados na Maxxi Saúde.
            </p>
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

        {/* ---------- Gráficos ---------- */}
        <section className="ws-sec">
          <div className="container">
            <div className="ws-head">
              <p className="t-eyebrow">Em perspectiva</p>
              <h2>Dois métodos, perguntas diferentes.</h2>
              <p className="ws-sub">Um aperitivo do que será discutido em detalhe no workshop.</p>
            </div>
            <div className="ws-charts">
              <div className="ws-chart reveal">
                <h3>Escore de cálcio coronariano (Agatston)</h3>
                <p className="ws-chart-sub">Faixas usuais de calcificação na prática clínica</p>
                <div className="ws-cacs" role="img"
                     aria-label={"Escala do escore de cálcio: " + CACS_FAIXAS.map(f => f.faixa + " " + f.nome).join(", ") + ". Caso da galeria: " + CACS_EXEMPLO + ", faixa moderada."}>
                  <div className="ws-cacs-bar">
                    {CACS_FAIXAS.map(f => <span key={f.faixa}/>)}
                  </div>
                  <div className="ws-cacs-mark" style={{ "--x": cacsPos(CACS_EXEMPLO) + "%" }}>
                    <span>Caso da galeria · {CACS_EXEMPLO}</span>
                  </div>
                  <div className="ws-cacs-legend">
                    {CACS_FAIXAS.map(f => (
                      <span key={f.faixa}><b>{f.faixa}</b>{f.nome}</span>
                    ))}
                  </div>
                </div>
                <p className="ws-chart-nota">
                  Escore zero se associa a risco muito baixo de eventos coronarianos; valores mais
                  altos reclassificam o paciente para cima — o tema do segundo bloco do workshop.
                </p>
              </div>

              <div className="ws-chart reveal">
                <h3>TC × RM cardíaca</h3>
                <p className="ws-chart-sub">Força relativa de cada método — comparação didática simplificada</p>
                <table className="ws-mat">
                  <thead>
                    <tr><th scope="col">Aplicação</th><th scope="col">TC</th><th scope="col">RM</th></tr>
                  </thead>
                  <tbody>
                    {METODOS.map(([nome, tc, rm]) => (
                      <tr key={nome}>
                        <th scope="row">{nome}</th>
                        {[tc, rm].map((v, i) => (
                          <td key={i} aria-label={v + " de 3"}>
                            <span className="ws-dots">
                              {[1, 2, 3].map(n => <i key={n} className={n <= v ? "on" : ""}/>)}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Convite final ---------- */}
        <section className="ws-final">
          <div className="container ws-final-in">
            <p className="ws-pill">{EVENTO.dia} · {EVENTO.dataCurta}</p>
            <h2>Esperamos por você.</h2>
            <p className="ws-lead">
              Confirme sua presença pelo WhatsApp — a mensagem já vai pronta,
              é só enviar. Dúvidas: {PHONE_FIXED}.
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

      .ws-speaker {
        display: flex; align-items: center; gap: 18px; max-width: 560px; margin: 0 0 28px;
        padding: 14px 22px 14px 14px; border-radius: 20px; text-decoration: none; color: inherit;
        background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
        transition: background var(--dur-base) var(--ease-out);
      }
      .ws-speaker:hover { background: rgba(255,255,255,0.09); text-decoration: none; color: inherit; }
      .ws-speaker-foto {
        flex: none; width: 76px; height: 76px; border-radius: 50%;
        background: #e9eef3 no-repeat 50% 16% / 220% auto;
        box-shadow: 0 0 0 3px var(--ms-green-500);
      }
      .ws-speaker small {
        display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.16em;
        text-transform: uppercase; color: var(--ms-green-400);
      }
      .ws-speaker strong { display: block; color: #fff; font-size: 19px; margin: 2px 0 3px; }
      .ws-speaker span span { display: block; font-size: 14px; line-height: 1.45; color: rgba(232,240,245,0.75); }

      .ws-bio { display: grid; grid-template-columns: 0.75fr 1.25fr; gap: 64px; align-items: center; }
      .ws-bio-foto {
        display: block; width: 100%; height: auto; border-radius: 24px;
        background: #e9eef3; box-shadow: var(--sh-lg);
      }
      .ws-bio h2 { margin: 10px 0 24px; }
      .ws-cv { list-style: none; margin: 0; padding: 0; }
      .ws-cv li {
        display: flex; gap: 14px; align-items: flex-start; padding: 14px 0;
        border-bottom: 1px solid var(--border-subtle); font-size: 17px; color: var(--fg-default);
      }
      .ws-cv li:last-child { border-bottom: 0; }
      .ws-cv svg { flex: none; color: var(--ms-green-600); margin-top: 1px; }

      .ws-info {
        display: grid; grid-template-columns: auto 1fr; margin-bottom: 36px;
        border-top: 1px solid rgba(255,255,255,0.12); border-bottom: 1px solid rgba(255,255,255,0.12);
      }
      .ws-info-item { display: flex; gap: 14px; align-items: flex-start; padding: 18px 24px 18px 0; color: var(--ms-green-400); }
      .ws-info-item + .ws-info-item { padding-left: 24px; border-left: 1px solid rgba(255,255,255,0.12); }
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

      .ws-count {
        display: inline-block; margin: 0 0 22px 10px; padding: 7px 16px; border-radius: 999px;
        font-size: 13px; font-weight: 700; color: #fff; background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.14);
      }
      .ws-count b { color: var(--ms-green-400); font-size: 15px; }

      /* Galeria: fundo preto nas imagens, que já são de fundo preto — o "contain" fica sem emenda. */
      .ws-gal {
        color: var(--ink); padding: 96px 0;
        background: radial-gradient(60% 50% at 100% 0%, rgba(77,133,164,0.28), transparent 70%), #081822;
      }
      .ws-gal h2 { color: #fff; }
      .ws-gal .ws-sub { color: rgba(232,240,245,0.75); }
      .ws-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: auto; gap: 20px; }
      .ws-g-wide { grid-column: 1 / 3; }
      .ws-g-tall { grid-column: 3; grid-row: 1 / 3; }
      .ws-fig {
        margin: 0; display: flex; flex-direction: column; overflow: hidden; border-radius: 20px;
        background: #000; border: 1px solid rgba(255,255,255,0.1);
      }
      .ws-fig-img { flex: 1; min-height: 240px; display: grid; place-items: center; overflow: hidden; }
      .ws-fig-img img {
        display: block; width: 100%; height: 100%; max-height: 420px; object-fit: contain;
        transition: transform 600ms var(--ease-out);
      }
      .ws-g-tall .ws-fig-img img { max-height: 640px; }
      .ws-fig:hover .ws-fig-img img { transform: scale(1.04); }
      .ws-fig figcaption {
        padding: 18px 22px 20px; border-top: 1px solid rgba(255,255,255,0.08);
        background: linear-gradient(180deg, rgba(13,34,48,0.6), rgba(13,34,48,0.95));
      }
      .ws-fig small {
        display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.16em;
        text-transform: uppercase; color: var(--ms-green-400);
      }
      .ws-fig strong { display: block; color: #fff; font-size: 18px; margin: 4px 0 6px; }
      .ws-fig figcaption > span { display: block; font-size: 14px; line-height: 1.5; color: rgba(232,240,245,0.75); }
      .ws-fig figcaption a { display: inline-block; margin-top: 10px; font-size: 12px; color: rgba(232,240,245,0.5); }
      .ws-fig figcaption a:hover { color: var(--ms-green-300); }
      .ws-nota { margin: 24px 0 0; font-size: 13px; color: rgba(232,240,245,0.55); }

      /* Gráficos */
      .ws-charts { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .ws-chart {
        background: #fff; border: 1px solid var(--border-subtle); border-radius: 20px;
        padding: 32px; box-shadow: var(--sh-sm);
      }
      .ws-chart h3 { font-size: 20px; margin: 0 0 4px; }
      .ws-chart-sub { font-size: 14px; color: var(--fg-muted); margin: 0 0 28px; }
      .ws-chart-nota { margin: 28px 0 0; padding-top: 20px; border-top: 1px solid var(--border-subtle); font-size: 15px; color: var(--fg-muted); }

      .ws-cacs { position: relative; padding-top: 52px; }
      .ws-cacs-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; height: 18px; }
      .ws-cacs-bar span:nth-child(1) { background: var(--ms-green-500); border-radius: 999px 0 0 999px; }
      .ws-cacs-bar span:nth-child(2) { background: #e3c84a; }
      .ws-cacs-bar span:nth-child(3) { background: #e8923b; }
      .ws-cacs-bar span:nth-child(4) { background: var(--ms-danger); border-radius: 0 999px 999px 0; }
      .ws-cacs-mark {
        position: absolute; top: 0; height: 70px; left: 0; width: 2px; background: var(--ms-blue-800);
        transition: left 1.2s var(--ease-out) 0.2s;
      }
      .reveal.in .ws-cacs-mark { left: var(--x); }
      .ws-cacs-mark::after {
        content: ""; position: absolute; top: 54px; left: -6px; width: 14px; height: 14px;
        border-radius: 50%; background: #fff; border: 3px solid var(--ms-blue-800);
      }
      .ws-cacs-mark span {
        position: absolute; top: 0; left: 50%; transform: translateX(-50%); white-space: nowrap;
        font-size: 12px; font-weight: 800; color: #fff; background: var(--ms-blue-800);
        padding: 5px 10px; border-radius: 8px;
      }
      .ws-cacs-legend { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-top: 14px; }
      .ws-cacs-legend span { font-size: 13px; color: var(--fg-muted); text-align: center; }
      .ws-cacs-legend b { display: block; font-size: 16px; color: var(--fg-strong); }

      .ws-mat { width: 100%; border-collapse: collapse; }
      .ws-mat th, .ws-mat td { padding: 11px 0; border-bottom: 1px solid var(--border-subtle); text-align: left; }
      .ws-mat tr:last-child th, .ws-mat tr:last-child td { border-bottom: 0; }
      .ws-mat thead th {
        font-size: 12px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--fg-faint);
      }
      .ws-mat thead th + th { color: var(--ms-blue-500); text-align: center; width: 76px; }
      .ws-mat tbody th { font-size: 15px; font-weight: 600; color: var(--fg-default); padding-right: 12px; }
      .ws-mat td { text-align: center; }
      .ws-dots { display: inline-flex; gap: 5px; }
      .ws-dots i { width: 12px; height: 12px; border-radius: 50%; background: var(--ms-neutral-200); }
      .ws-dots i.on { background: var(--ms-blue-500); transform: scale(0); transition: transform 400ms var(--ease-out); }
      .reveal.in .ws-dots i.on { transform: scale(1); }
      .reveal.in tr:nth-child(2) .ws-dots i.on { transition-delay: 80ms; }
      .reveal.in tr:nth-child(3) .ws-dots i.on { transition-delay: 160ms; }
      .reveal.in tr:nth-child(4) .ws-dots i.on { transition-delay: 240ms; }
      .reveal.in tr:nth-child(5) .ws-dots i.on { transition-delay: 320ms; }
      .ws-mat td + td .ws-dots i.on { background: var(--ms-green-600); }

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
        .ws-hero-grid, .ws-temas-grid, .ws-bio { grid-template-columns: 1fr; gap: 40px; }
        .ws-bio-foto { max-width: 360px; margin: 0 auto; }
        .ws-poster { justify-self: center; max-width: 340px; }
        .ws-pilares, .ws-charts { grid-template-columns: 1fr; }
        .ws-grid { grid-template-columns: 1fr 1fr; }
        .ws-g-wide { grid-column: 1 / -1; }
        .ws-g-tall { grid-column: auto; grid-row: auto; }
        .ws-gal { padding: 64px 0; }
        .ws-chart { padding: 24px; }
        .ws-sec, .ws-final { padding: 64px 0; }
        .ws-head { margin-bottom: 32px; }
      }
      @media (max-width: 560px) {
        .ws-info { grid-template-columns: 1fr; }
        .ws-info-item { padding-right: 0; }
        .ws-info-item + .ws-info-item { padding-left: 0; border-left: 0; border-top: 1px solid rgba(255,255,255,0.12); }
        .ws-btn { width: 100%; justify-content: center; }
        .ws-grid { grid-template-columns: 1fr; }
        .ws-count { margin-left: 0; }
        .ws-cacs-legend span { font-size: 11px; }
        .ws-cacs-legend b { font-size: 13px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .ws-btn, .ws-fig-img img, .ws-cacs-mark, .ws-dots i.on { transition: none !important; }
      }
    `}</style>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<WorkshopPage/>);
