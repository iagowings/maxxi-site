/* global React, ReactDOM, Icon, WhatsAppMark, PageShell, TweaksPanel, RECEPCAO_WHATS, PHONE_FIXED */

/* =============================================================
   Página da Tomografia — escrita para quem chega do Facebook Ads:
   paciente 50+, muitas vezes com pouca leitura, que reconhece o
   botão do WhatsApp e responde por áudio.

   Decisões que sustentam isso (não são enfeite):
   - Um único caminho: falar no WhatsApp. Tudo mais é secundário.
   - Texto em nível de leitura básico, frases curtas, sem jargão.
   - "Ouvir esta página": voz do próprio navegador lê em português.
   - "Letra maior": escala toda a tipografia da página.
   - Alvos de toque grandes (>= 60px) e contraste AA em tudo.
   ============================================================= */

const { useState: useStateT, useEffect: useEffectT, useRef: useRefT } = React;

const WA_LINK = "https://wa.me/" + RECEPCAO_WHATS + "?text=" +
  encodeURIComponent("Olá! Quero fazer uma tomografia.");

/* Discagem derivada do numero exibido, para os dois nunca divergirem.
   (PHONE_FIXED_TEL em data.jsx tem um 9 a mais para um fixo de 8 digitos.) */
const TEL_LINK = "tel:+55" + PHONE_FIXED.replace(/\D/g, "");

const ENDERECO = "Tv. Coronel Tancredo, 45 — Centro — Altamira/PA";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Maxxi Saúde, Travessa Coronel Tancredo, 45, Centro, Altamira, PA");

/* O que a voz do navegador lê. Frases curtas: cada uma vira uma fala,
   o que também evita o corte do Chrome em textos longos. */
const FALA = [
  "Você está na página da Maxxi Saúde, em Altamira.",
  "Aqui a gente faz tomografia.",
  "É um exame de imagem que mostra o que tem por dentro do corpo.",
  "O exame não dói. Você fica deitado e o aparelho passa em volta de você.",
  "Costuma levar menos de quinze minutos.",
  "Para marcar, toque no botão verde do WhatsApp, aqui na tela.",
  "Você pode mandar mensagem de voz. É só falar. A gente escuta e responde.",
  "Se preferir, também pode ligar para a clínica.",
  "No dia do exame, traga o pedido do seu médico e um documento com foto.",
  "Se tiver plano de saúde, traga a carteirinha também.",
  "A clínica fica na Travessa Coronel Tancredo, número quarenta e cinco, no centro de Altamira.",
  "Atendemos de segunda a sábado, das sete da manhã às sete da noite.",
  "E temos plantão de tomografia vinte e quatro horas, para urgência.",
  "Qualquer dúvida, é só chamar no WhatsApp. A gente responde.",
];

function TecnologiaPage() {
  const [grande, setGrande] = useStateT(false);

  useEffectT(() => {
    try { setGrande(localStorage.getItem("maxxi-letra-grande") === "1"); } catch (e) {}
  }, []);
  const alternarLetra = () => {
    setGrande(v => {
      try { localStorage.setItem("maxxi-letra-grande", v ? "0" : "1"); } catch (e) {}
      return !v;
    });
  };

  return (
    <PageShell active="tecnologia" hideBubble>
      <div data-screen-label="Tomografia" className="t-page" style={{ "--ts": grande ? 1.3 : 1 }}>

        {/* ---------- 1. Topo: o que é e o botão ---------- */}
        <section style={{ background: "var(--ms-blue-800)", color: "#fff", padding: "44px 0 52px" }}>
          <div className="container">
            <BarraAcessibilidade grande={grande} onLetra={alternarLetra}/>
            <p className="t-eyebrow">Maxxi Saúde · Altamira</p>
            <h1 className="t-h1">Tomografia<br/>em Altamira</h1>
            <p className="t-lead">
              Exame rápido e sem dor.<br/>
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

        {/* ---------- 2. Como marcar: 3 passos ---------- */}
        <section className="t-sec">
          <div className="container">
            <h2 className="t-h2">Como marcar</h2>
            <ol className="t-passos">
              {[
                { n: "1", icon: "whatsapp", t: "Toque no botão verde",
                  d: "Ele abre o WhatsApp da nossa recepção." },
                { n: "2", icon: "mic", t: "Fale o que você precisa",
                  d: "Pode mandar áudio. É só apertar o microfone e falar. Se tiver o pedido do médico, tire uma foto e mande." },
                { n: "3", icon: "calendar", t: "A gente marca o dia",
                  d: "Uma pessoa da equipe responde, diz o preço ou confirma seu plano, e combina o horário com você." },
              ].map(p => (
                <li key={p.n} className="t-passo">
                  <span className="t-passo-n" aria-hidden="true">{p.n}</span>
                  <span className="t-passo-ico" aria-hidden="true">
                    {p.icon === "whatsapp"
                      ? <WhatsAppMark size={42}/>
                      : <Icon name={p.icon} size={38} stroke={1.8}/>}
                  </span>
                  <span className="t-passo-txt">
                    <strong className="t-passo-t">{p.t}</strong>
                    <span className="t-body">{p.d}</span>
                  </span>
                </li>
              ))}
            </ol>
            <BotaoWhats compacto/>
          </div>
        </section>

        {/* ---------- 3. O que levar ---------- */}
        <section className="t-sec t-sec-alt">
          <div className="container">
            <h2 className="t-h2">O que levar no dia</h2>
            <div className="t-levar">
              {[
                { icon: "file-text", t: "O pedido do médico", d: "O papel que o médico escreveu pedindo o exame." },
                { icon: "user", t: "Documento com foto", d: "RG, CNH ou carteira de trabalho." },
                { icon: "shield-check", t: "Carteirinha do plano", d: "Só se você tiver plano de saúde." },
              ].map(c => (
                <div key={c.t} className="t-levar-item">
                  <span className="t-levar-ico" aria-hidden="true"><Icon name={c.icon} size={40} stroke={1.7}/></span>
                  <strong className="t-passo-t">{c.t}</strong>
                  <span className="t-body">{c.d}</span>
                </div>
              ))}
            </div>
            <p className="t-body t-nota">
              Não tem alguma coisa? Não tem problema. Pergunte no WhatsApp que a gente explica.
            </p>
          </div>
        </section>

        {/* ---------- 4. Perguntas ---------- */}
        <section className="t-sec">
          <div className="container">
            <h2 className="t-h2">Perguntas que todo mundo faz</h2>
            <div className="t-perguntas">
              {[
                ["O exame dói?", "Não dói. Você fica deitado numa cama que desliza devagar e o aparelho passa em volta de você. É só ficar parado um pouquinho."],
                ["Demora muito?", "Não. Na maior parte dos casos, leva menos de quinze minutos."],
                ["Preciso ficar sem comer?", "Depende do exame. Quando precisa, a gente avisa na hora de marcar."],
                ["Atende plano de saúde?", "Sim, vários planos. Mande o nome do seu plano no WhatsApp que a gente confere na hora."],
                ["E se for de noite ou fim de semana?", "Temos plantão de tomografia 24 horas para urgência, todos os dias."],
                ["Sou nervoso com exame. E aí?", "Fale com a gente. Nossa equipe fica do seu lado e explica cada passo antes de começar."],
              ].map(([q, a]) => (
                <div key={q} className="t-pergunta">
                  <h3 className="t-pergunta-q">{q}</h3>
                  <p className="t-body t-pergunta-a">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 5. Onde fica ---------- */}
        <section className="t-sec t-sec-alt">
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

        {/* ---------- 6. O aparelho (curto, sem jargão) ---------- */}
        <section className="t-sec">
          <div className="container">
            <div className="t-aparelho">
              <span className="t-aparelho-ico" aria-hidden="true"><Icon name="scan-line" size={48} stroke={1.6}/></span>
              <div>
                <h2 className="t-h2" style={{ marginTop: 0 }}>Nosso aparelho é novo</h2>
                <p className="t-body">
                  É um tomógrafo de 128 canais — o único em clínica particular da nossa
                  região. Na prática, isso quer dizer três coisas para você:
                  o exame termina mais rápido, a imagem sai mais nítida para o seu médico
                  e a quantidade de radiação é menor do que em aparelhos antigos.
                </p>
                <p className="t-body">
                  Também fazemos <a href="/exames/ressonancia-magnetica/">ressonância magnética</a>,{" "}
                  <a href="/exames/mamografia-digital/">mamografia</a>,{" "}
                  <a href="/exames/ultrassonografia/">ultrassom</a>,{" "}
                  <a href="/exames/radiografia-em-geral/">raio-x</a> e{" "}
                  <a href="/exames/laboratorio-de-analises-clinicas/">exames de sangue</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 7. Fechamento ---------- */}
        <section className="t-sec t-fim">
          <div className="container">
            <h2 className="t-h2">Vamos marcar o seu exame?</h2>
            <p className="t-lead t-lead-dark">
              Toque no botão verde e fale com a gente.<br/>
              Pode ser por áudio.
            </p>
            <BotaoWhats/>
            <p className="t-aviso">
              Esta página é informativa e não substitui a consulta com um médico.
              A tomografia é feita com pedido médico, usa radiação e pode precisar de
              preparo ou contraste. Quem indica e interpreta o exame é o seu médico.
              Cada pessoa é diferente, e os resultados também.
              <br/><br/>
              Maxxi Saúde · CNPJ 11.503.226/0001-21 · Responsável técnico:
              Dr. Anísio Fernando Chaves · Médico Radiologista · CRM 9422 · R.Q.E. 6391
            </p>
          </div>
        </section>

        {/* Barra fixa no rodapé do celular — o botão nunca some da tela */}
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

/* ---------------- Botão principal ----------------
   Grande, verde WhatsApp, texto escuro (o branco sobre esse verde
   reprova em contraste — e este é justamente o público que enxerga menos). */
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

/* ---------------- Ouvir a página + Letra maior ----------------
   A leitura usa a voz do próprio navegador (SpeechSynthesis): sem
   biblioteca, sem arquivo de áudio, sem custo. Se o aparelho não
   tiver suporte, o botão simplesmente não aparece. */
function BarraAcessibilidade({ grande, onLetra }) {
  const [falando, setFalando] = useStateT(false);
  const [temVoz, setTemVoz] = useStateT(false);
  const parouSozinho = useRefT(false);

  useEffectT(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const checar = () => setTemVoz(window.speechSynthesis.getVoices().length > 0);
    checar();
    window.speechSynthesis.addEventListener("voiceschanged", checar);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", checar);
      window.speechSynthesis.cancel();
    };
  }, []);

  const falar = () => {
    const ss = window.speechSynthesis;
    if (falando) { parouSozinho.current = true; ss.cancel(); setFalando(false); return; }
    ss.cancel();
    parouSozinho.current = false;
    const vozes = ss.getVoices();
    const pt = vozes.find(v => /^pt[-_]BR/i.test(v.lang)) || vozes.find(v => /^pt/i.test(v.lang));
    FALA.forEach((frase, i) => {
      const u = new SpeechSynthesisUtterance(frase);
      u.lang = "pt-BR";
      if (pt) u.voice = pt;
      u.rate = 0.92;          // um pouco mais devagar que o padrão
      if (i === FALA.length - 1) u.onend = () => setFalando(false);
      u.onerror = () => setFalando(false);
      ss.speak(u);
    });
    setFalando(true);
  };

  return (
    <div className="t-acess">
      {temVoz && (
        <button type="button" onClick={falar} className="t-acess-btn" aria-pressed={falando}>
          <Icon name={falando ? "stop" : "volume"} size={28} stroke={2.2}/>
          <span>{falando ? "Parar a leitura" : "Ouvir esta página"}</span>
        </button>
      )}
      <button type="button" onClick={onLetra} className="t-acess-btn" aria-pressed={grande}>
        <span className="t-acess-aa" aria-hidden="true">A</span>
        <span>{grande ? "Letra normal" : "Letra maior"}</span>
      </button>
    </div>
  );
}

/* ---------------- Estilos da página ----------------
   Tudo em calc(px * var(--ts)) para o botão "Letra maior" escalar a
   página inteira. Os !important existem porque styles.css força
   h1/h2 no celular com !important — e aí a escala não funcionaria. */
function EstiloDaPagina() {
  return (
    <style>{`
      .t-page { --verde: #25d366; --verde-esc: #0b6b30; --tinta: #08301a; }

      /* Texto branco sobre o verde claro da marca da 1.9:1 — reprova em
         acessibilidade. Nesta pagina o rotulo vai em tinta escura (7.4:1).
         Vale para o botao "Agendar" do topo, que fica fora da .t-page. */
      .btn.btn-primary { color: #08301a !important; }

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
      .t-body a { color: var(--ms-blue-600); font-weight: 700; }

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
      .t-btn-wa-c { margin-top: 32px; }

      /* ----- Botão telefone ----- */
      .t-btn-tel {
        display: flex; align-items: center; gap: 14px;
        background: transparent; color: #fff;
        border: 3px solid rgba(255,255,255,0.55); border-radius: 20px;
        padding: 16px 22px; text-decoration: none; max-width: 520px;
      }
      .t-btn-tel-l1 { display: block; font-size: calc(20px * var(--ts)); font-weight: 800; line-height: 1.2; }
      .t-btn-tel-l2 { display: block; font-size: calc(17px * var(--ts)); font-weight: 700; color: var(--ms-green-300); margin-top: 2px; }

      /* ----- Acessibilidade ----- */
      /* Uma linha so: os dois recursos ficam visiveis de cara, sem empurrar
         o botao do WhatsApp para fora da primeira tela. */
      .t-acess { display: flex; flex-wrap: nowrap; gap: 10px; margin: 0 0 26px; max-width: 520px; }
      .t-acess-btn {
        flex: 1 1 0; min-width: 0; justify-content: center;
        display: inline-flex; align-items: center; gap: 9px; cursor: pointer;
        background: rgba(255,255,255,0.12); color: #fff;
        border: 2px solid rgba(255,255,255,0.45); border-radius: 999px;
        padding: 12px 14px; min-height: 56px;
        font-family: inherit; font-size: calc(16px * var(--ts)); font-weight: 800;
        line-height: 1.15; text-align: center;
      }
      .t-acess-btn[aria-pressed="true"] { background: #fff; color: var(--ms-blue-800); border-color: #fff; }
      .t-acess-aa { font-size: calc(22px * var(--ts)); font-weight: 900; line-height: 1; }

      /* ----- Passos ----- */
      .t-passos { list-style: none; padding: 0; margin: 0; display: grid; gap: 18px; }
      .t-passo {
        display: grid; grid-template-columns: auto auto 1fr; align-items: start; gap: 16px;
        background: #fff; border: 2px solid var(--border-subtle); border-radius: 20px;
        padding: 22px; box-shadow: var(--sh-sm);
      }
      .t-passo-n {
        font-size: calc(34px * var(--ts)); font-weight: 900; line-height: 1;
        color: #fff; background: var(--ms-blue-700); border-radius: 14px;
        width: calc(56px * var(--ts)); min-width: 44px; height: calc(56px * var(--ts)); min-height: 44px;
        display: inline-flex; align-items: center; justify-content: center;
      }
      .t-passo-ico {
        color: var(--ms-blue-600); display: inline-flex; align-items: center; justify-content: center;
        width: calc(56px * var(--ts)); min-width: 44px; height: calc(56px * var(--ts)); min-height: 44px;
        background: var(--ms-blue-50); border-radius: 14px;
      }
      .t-passo-t { display: block; font-size: calc(21px * var(--ts)); font-weight: 900; color: var(--fg-strong); margin-bottom: 6px; line-height: 1.25; }

      /* ----- O que levar ----- */
      .t-levar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
      .t-levar-item { background: #fff; border: 2px solid var(--border-subtle); border-radius: 20px; padding: 24px; }
      .t-levar-ico {
        display: inline-flex; align-items: center; justify-content: center;
        width: 72px; height: 72px; border-radius: 20px;
        background: var(--ms-green-100); color: var(--ms-green-800); margin-bottom: 14px;
      }
      .t-nota {
        margin-top: 22px; background: var(--ms-blue-50); border-left: 6px solid var(--ms-blue-500);
        border-radius: 12px; padding: 18px 20px; color: var(--fg-strong); font-weight: 600;
      }

      /* ----- Perguntas ----- */
      .t-perguntas { display: grid; gap: 14px; }
      .t-pergunta { background: #fff; border: 2px solid var(--border-subtle); border-radius: 18px; padding: 22px; }
      .t-pergunta-q { font-size: calc(22px * var(--ts)) !important; font-weight: 900; color: var(--fg-strong); margin: 0 0 8px; line-height: 1.25; }
      .t-pergunta-a { margin: 0; }

      /* ----- Endereço ----- */
      .t-endereco { font-size: calc(24px * var(--ts)); font-weight: 800; color: var(--fg-strong); line-height: 1.35; margin: 0 0 14px; }
      .t-btn-mapa {
        display: inline-flex; align-items: center; gap: 12px; margin-top: 22px;
        background: var(--ms-blue-700); color: #fff; text-decoration: none;
        border-radius: 18px; padding: 18px 24px; min-height: 60px;
        font-size: calc(20px * var(--ts)); font-weight: 800;
      }

      /* ----- Aparelho ----- */
      .t-aparelho { display: grid; grid-template-columns: auto 1fr; gap: 20px; align-items: start; }
      .t-aparelho-ico {
        display: inline-flex; align-items: center; justify-content: center;
        width: 84px; height: 84px; border-radius: 22px;
        background: var(--ms-blue-50); color: var(--ms-blue-600);
      }

      /* ----- Fechamento ----- */
      .t-fim { background: linear-gradient(180deg, var(--ms-green-50) 0%, #fff 100%); }
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
        :root { --cta-bar: 84px; }   /* o aviso de cookies sobe e nao cobre o botao */
        .t-levar { grid-template-columns: 1fr; }
        .t-aparelho { grid-template-columns: 1fr; }
        /* O icone carrega significado para quem le pouco: fica, empilhado
           abaixo do numero, em vez de sumir. */
        .t-passo { grid-template-columns: auto 1fr; row-gap: 10px; }
        .t-passo-n { grid-area: 1 / 1 / 2 / 2; }
        .t-passo-ico { grid-area: 2 / 1 / 3 / 2; justify-content: center; padding-top: 0; }
        .t-passo-txt { grid-area: 1 / 2 / 3 / 3; }
        .t-btn-wa, .t-btn-tel { max-width: none; }
      }
      @media (min-width: 900px) {
        .t-h1 { font-size: calc(64px * var(--ts)) !important; }
        .t-sec { padding: 72px 0; }
      }
    `}</style>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TecnologiaPage/>);
