/* global React, ReactDOM, Icon, WhatsAppMark, PageShell, TweaksPanel, PHONE_FIXED, GENERAL_WHATS, SPECIALTIES, EXAMES */

/* =============================================================
   Página de agendamento — mesmo estilo da página da Tomografia
   (pages/tecnologia.jsx): paciente 50+ vindo do WhatsApp/Ads,
   um único caminho (falar no WhatsApp), texto simples, alvos de
   toque grandes. Aqui a "ação" de cada especialidade/exame é o
   próprio cartão da lista, sem botões pequenos escondidos.
   ============================================================= */

const WA_LINK = "https://wa.me/" + GENERAL_WHATS + "?text=" +
  encodeURIComponent("Olá! Quero marcar uma consulta ou exame.");

const TEL_LINK = "tel:+55" + PHONE_FIXED.replace(/\D/g, "");

const ENDERECO = "Tv. Coronel Tancredo, 45 — Centro — Altamira/PA";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Maxxi Saúde, Travessa Coronel Tancredo, 45, Centro, Altamira, PA");

window.ROTEIRO_FALA = [
  "Você está na página de agendamento da Maxxi Saúde, em Altamira.",
  "Aqui você escolhe a consulta ou o exame que precisa.",
  "Cada item da lista abre o WhatsApp já com a mensagem certa.",
  "Você pode mandar mensagem de voz. É só falar. A gente escuta e responde.",
  "Se preferir, também pode ligar para a clínica.",
  "A clínica fica na Travessa Coronel Tancredo, número quarenta e cinco, no centro de Altamira.",
  "Atendemos de segunda a sábado, das sete da manhã às sete da noite.",
];

function AgendarPage() {
  return (
    <PageShell active="agendar" hideBubble>
      <div data-screen-label="Agendar exame" className="t-page">

        {/* ---------- 1. Topo ---------- */}
        <section style={{ background: "var(--ms-blue-800)", color: "#fff", padding: "44px 0 52px" }}>
          <div className="container">
            <p className="t-eyebrow">Maxxi Saúde · Altamira</p>
            <h1 className="t-h1">Marcar consulta<br/>ou exame</h1>
            <p className="t-lead">
              Escolha embaixo o que você precisa.<br/>
              A gente marca pelo WhatsApp.
            </p>

            <BotaoWhats/>

            <a href={TEL_LINK} className="t-btn-tel">
              <Icon name="phone" size={30} stroke={2}/>
              <span>
                <span className="t-btn-tel-l1">Ligar para a clínica</span>
                <span className="t-btn-tel-l2">{PHONE_FIXED}</span>
              </span>
            </a>
          </div>
        </section>

        {/* ---------- 2. Consultas ---------- */}
        <section className="t-sec">
          <div className="container">
            <h2 className="t-h2">Marcar uma consulta</h2>
            <div className="t-lista">
              {SPECIALTIES.map(s => (
                <ListaItem key={s.slug} icon={s.icon}
                  href={"https://wa.me/" + s.whatsapp + "?text=" + encodeURIComponent("Olá! Quero marcar uma consulta de " + s.name + ".")}
                  title={s.name} subtitle={s.doctor && s.doctor.name}/>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 3. Exames ---------- */}
        <section className="t-sec t-sec-alt">
          <div className="container">
            <h2 className="t-h2">Marcar um exame</h2>
            <div className="t-lista">
              {EXAMES.map(e => (
                <ListaItem key={e.slug} icon={e.icon}
                  href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Quero marcar " + e.name + ".")}
                  title={e.name} subtitle={e.badge} moreHref={"/exames/" + e.slug + "/"}/>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 4. Onde fica ---------- */}
        <section className="t-sec">
          <div className="container">
            <h2 className="t-h2">Onde fica</h2>
            <p className="t-endereco">{ENDERECO}</p>
            <p className="t-body">
              De segunda a sábado, das 7h às 19h.<br/>
              Plantão de tomografia e raio-x: 24 horas, todo dia.
            </p>
            <a href={MAPS_LINK} target="_blank" rel="noopener" className="t-btn-mapa">
              <Icon name="map-pin" size={28} stroke={2}/>
              <span>Ver no mapa como chegar</span>
            </a>
          </div>
        </section>

        {/* ---------- 5. Fechamento ---------- */}
        <section className="t-sec t-sec-alt t-fim">
          <div className="container">
            <h2 className="t-h2">Não achou o que precisa?</h2>
            <p className="t-lead t-lead-dark">
              Toque no botão verde e fale com a gente.<br/>
              Pode ser por áudio.
            </p>
            <BotaoWhats/>
            <p className="t-aviso">
              Esta página é informativa e não substitui a consulta com um médico.
              <br/><br/>
              Maxxi Saúde · CNPJ 11.503.226/0001-21 · Responsável técnico:
              Dr. Anísio Fernando Chaves · Médico Radiologista · CRM 9422 · R.Q.E. 6391
            </p>
          </div>
        </section>

        {/* Barra fixa no rodapé do celular */}
        <a href={WA_LINK} target="_blank" rel="noopener" className="t-fixa"
           aria-label="Falar no WhatsApp da Maxxi Saúde">
          <WhatsAppMark size={38}/>
          <span>Falar no WhatsApp</span>
        </a>

        <EstiloDaPagina/>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

/* ---------------- Botão principal ---------------- */
function BotaoWhats({ compacto }) {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener"
       className={"t-btn-wa" + (compacto ? " t-btn-wa-c" : "")}
       aria-label="Falar no WhatsApp da Maxxi Saúde. Você pode mandar áudio.">
      <span className="t-btn-wa-logo" aria-hidden="true"><WhatsAppMark size={46}/></span>
      <span className="t-btn-wa-txt">
        <span className="t-btn-wa-l1">Falar no WhatsApp</span>
        <span className="t-btn-wa-l2">Pode mandar áudio — a gente escuta</span>
      </span>
    </a>
  );
}

/* ---------------- Item de lista (consulta ou exame) ----------------
   O cartão inteiro é o link do WhatsApp — um único alvo de toque
   grande, sem botão pequeno escondido dentro do cartão. */
function ListaItem({ href, icon, title, subtitle, moreHref }) {
  return (
    <div className="t-lista-item">
      <a href={href} target="_blank" rel="noopener" className="t-lista-link"
         aria-label={"Falar sobre " + title + " no WhatsApp"}>
        <span className="t-lista-ico" aria-hidden="true"><Icon name={icon} size={30} stroke={1.7}/></span>
        <span className="t-lista-txt">
          <strong className="t-lista-t">{title}</strong>
          {subtitle && <span className="t-body t-lista-sub">{subtitle}</span>}
        </span>
        <span className="t-lista-wa" aria-hidden="true"><WhatsAppMark size={30}/></span>
      </a>
      {moreHref && <a href={moreHref} className="t-lista-mais">Saiba mais sobre este exame</a>}
    </div>
  );
}

/* ---------------- Estilos da página ----------------
   Mesmo sistema visual da página da Tomografia (t-*), com as
   classes t-lista* adicionadas para a lista de consultas/exames. */
function EstiloDaPagina() {
  return (
    <style>{`
      .t-page { --ts: 1; --verde: #25d366; --verde-esc: #0b6b30; --tinta: #08301a; }

      .t-eyebrow {
        font-size: calc(14px * var(--ts)); font-weight: 800; letter-spacing: 0.14em;
        text-transform: uppercase; color: var(--ms-green-300); margin: 0 0 14px;
      }
      .t-h1 {
        font-size: calc(46px * var(--ts)) !important;
        line-height: 1.04 !important; font-weight: 900; letter-spacing: -0.02em;
        color: #fff; margin: 0 0 18px;
      }
      .t-lead {
        font-size: calc(23px * var(--ts)); line-height: 1.45; font-weight: 600;
        color: rgba(255,255,255,0.94); margin: 0 0 30px;
      }
      .t-lead-dark { color: var(--fg-strong); }
      .t-h2 {
        font-size: calc(31px * var(--ts)) !important;
        line-height: 1.2 !important; font-weight: 900; letter-spacing: -0.02em;
        color: var(--fg-strong); margin: 0 0 26px;
      }
      .t-body { font-size: calc(19px * var(--ts)); line-height: 1.62; color: var(--fg-default); display: block; }

      .t-sec { padding: 52px 0; }
      .t-sec-alt { background: var(--ms-off-white); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); }

      /* ----- Botão WhatsApp ----- */
      .t-btn-wa {
        display: flex; align-items: center; gap: 16px;
        background: var(--verde); color: var(--tinta);
        border: 3px solid var(--verde-esc); border-radius: 20px;
        padding: 18px 22px; text-decoration: none;
        box-shadow: 0 14px 30px rgba(11,107,48,0.34);
        margin: 0 0 18px; max-width: 520px;
      }
      .t-btn-wa:active { transform: translateY(2px); }
      .t-btn-wa-logo { flex: 0 0 auto; display: inline-flex; background: #fff; border-radius: 14px; padding: 6px; }
      .t-btn-wa-txt { display: block; min-width: 0; }
      .t-btn-wa-l1 { display: block; font-size: calc(24px * var(--ts)); font-weight: 900; line-height: 1.15; }
      .t-btn-wa-l2 { display: block; font-size: calc(15px * var(--ts)); font-weight: 700; line-height: 1.3; margin-top: 4px; color: #0a4423; }

      /* ----- Botão telefone ----- */
      .t-btn-tel {
        display: flex; align-items: center; gap: 14px;
        background: transparent; color: #fff;
        border: 3px solid rgba(255,255,255,0.55); border-radius: 20px;
        padding: 16px 22px; text-decoration: none; max-width: 520px;
      }
      .t-btn-tel-l1 { display: block; font-size: calc(20px * var(--ts)); font-weight: 800; line-height: 1.2; }
      .t-btn-tel-l2 { display: block; font-size: calc(17px * var(--ts)); font-weight: 700; color: var(--ms-green-300); margin-top: 2px; }

      /* ----- Lista de consultas/exames ----- */
      .t-lista { display: grid; gap: 14px; }
      .t-lista-item { display: block; }
      .t-lista-link {
        display: flex; align-items: center; gap: 16px; text-decoration: none;
        background: #fff; border: 2px solid var(--border-subtle); border-radius: 20px;
        padding: 18px 20px; box-shadow: var(--sh-sm); min-height: 44px;
      }
      .t-lista-link:active { transform: translateY(2px); }
      .t-lista-ico {
        flex: 0 0 auto; color: var(--ms-blue-600); background: var(--ms-blue-50);
        border-radius: 14px; display: inline-flex; align-items: center; justify-content: center;
        width: calc(56px * var(--ts)); min-width: 44px; height: calc(56px * var(--ts)); min-height: 44px;
      }
      .t-lista-txt { flex: 1; min-width: 0; }
      .t-lista-t { display: block; font-size: calc(20px * var(--ts)); font-weight: 900; color: var(--fg-strong); line-height: 1.25; }
      .t-lista-sub { font-size: calc(15px * var(--ts)); color: var(--fg-muted); margin-top: 2px; }
      .t-lista-wa { flex: 0 0 auto; color: var(--verde-esc); }
      .t-lista-mais {
        display: inline-block; margin: 8px 4px 0; font-size: calc(15px * var(--ts));
        font-weight: 700; color: var(--ms-blue-600); text-decoration: none;
      }

      /* ----- Endereço ----- */
      .t-endereco { font-size: calc(24px * var(--ts)); font-weight: 800; color: var(--fg-strong); line-height: 1.35; margin: 0 0 14px; }
      .t-btn-mapa {
        display: inline-flex; align-items: center; gap: 12px; margin-top: 22px;
        background: var(--ms-blue-700); color: #fff; text-decoration: none;
        border-radius: 18px; padding: 18px 24px; min-height: 60px;
        font-size: calc(20px * var(--ts)); font-weight: 800;
      }

      /* ----- Fechamento ----- */
      .t-fim { background: linear-gradient(180deg, var(--ms-green-50) 0%, var(--ms-off-white) 100%); }
      .t-aviso { font-size: calc(14px * var(--ts)); line-height: 1.6; color: var(--fg-muted); margin: 30px 0 0; max-width: 720px; }

      /* ----- Barra fixa (só no celular) ----- */
      .t-fixa { display: none; }
      @media (max-width: 860px) {
        .t-fixa {
          position: fixed; left: 0; right: 0; bottom: 0; z-index: 70;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          background: var(--verde); color: var(--tinta); text-decoration: none;
          font-size: calc(21px * var(--ts)); font-weight: 900;
          padding: 16px 20px calc(16px + env(safe-area-inset-bottom, 0px));
          border-top: 3px solid var(--verde-esc);
          box-shadow: 0 -8px 24px rgba(8,48,71,0.18);
        }
        .t-page { padding-bottom: 96px; }
        .t-btn-wa, .t-btn-tel { max-width: none; }
      }
      @media (min-width: 900px) {
        .t-h1 { font-size: calc(64px * var(--ts)) !important; }
        .t-sec { padding: 72px 0; }
      }
    `}</style>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AgendarPage/>);
