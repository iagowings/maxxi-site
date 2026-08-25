/* global React, Icon, Button, Badge, IconCircle, SectionTitle, Eyebrow, Card, FAQ, GENERAL_WHATS */
const { useState: useStateFAQ } = React;

/* As respostas ficam fechadas no acordeão, então a leitura em voz alta
   não as alcançaria. Aqui o roteiro é montado com pergunta e resposta. */
window.ROTEIRO_FALA = ["Dúvidas frequentes da Maxxi Saúde."].concat(
  FAQ.flatMap(item => [item.q].concat(item.a.match(/[^.!?]+[.!?]*/g) || []))
     .map(t => t.trim()).filter(Boolean)
);

function FaqPage() {
  return (
    <PageShell active="faq">
      <div data-screen-label="FAQ">
        <section style={{ padding: "80px 0 56px", background: "linear-gradient(180deg, var(--site-accent-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <Eyebrow>Dúvidas frequentes</Eyebrow>
            <h1 style={{ fontSize: 60, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.05, margin: "8px 0 18px" }}>
              Pode perguntar.<br/>
              <span style={{ color: "var(--site-accent-600)" }}>A gente responde com calma.</span>
            </h1>
            <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 720, margin: 0 }}>
              Estas são as perguntas que a gente mais ouve. Se a sua não estiver aqui,
              é só mandar mensagem no WhatsApp — pode ser áudio. A gente responde no mesmo dia.
            </p>
          </div>
        </section>

        <section className="section-pad-sm">
          <div className="container" style={{ maxWidth: 880 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQ.map((item, i) => <FaqItem key={i} item={item} defaultOpen={i === 0}/>)}
            </div>

            <div style={{
              marginTop: 48, padding: 32, borderRadius: 20,
              background: "var(--ms-blue-50)", border: "1px solid var(--ms-blue-100)",
              display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
            }}>
              <IconCircle name="whatsapp" color="accent-solid" size={56}/>
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--fg-strong)", margin: 0, letterSpacing: "-0.01em" }}>Não encontrou sua resposta?</h3>
                <p style={{ fontSize: 14.5, color: "var(--fg-muted)", margin: "6px 0 0", lineHeight: 1.5 }}>
                  Manda mensagem que a gente responde. Pode mandar áudio, se for mais fácil.
                </p>
              </div>
              <Button variant="primary" icon="whatsapp"
                      href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Tenho uma dúvida.")}
                      target="_blank">Falar conosco</Button>
            </div>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

function FaqItem({ item, defaultOpen }) {
  const [open, setOpen] = useStateFAQ(!!defaultOpen);
  return (
    <div style={{
      background: "#fff",
      border: "1px solid " + (open ? "var(--site-accent-200)" : "var(--border-subtle)"),
      borderRadius: 16,
      boxShadow: open ? "var(--sh-sm)" : "var(--sh-xs)",
      overflow: "hidden",
      transition: "border-color 220ms, box-shadow 220ms",
    }}>
      <button onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", textAlign: "left",
          padding: "20px 24px", background: "transparent", border: 0,
          fontFamily: "inherit", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 16,
        }}>
        <span style={{
          width: 32, height: 32, borderRadius: "50%",
          background: open ? "var(--site-accent-500)" : "var(--site-accent-100)",
          color: open ? "#fff" : "var(--site-accent-700)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          flex: "0 0 auto",
          transition: "background 140ms, color 140ms, transform 220ms",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          <Icon name="plus" size={16}/>
        </span>
        <span style={{ flex: 1, fontSize: 17, fontWeight: 700, color: "var(--fg-strong)", lineHeight: 1.35, letterSpacing: "-0.01em" }}>
          {item.q}
        </span>
      </button>
      <div style={{
        maxHeight: open ? 600 : 0,
        opacity: open ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 360ms var(--ease-inout), opacity 220ms",
      }}>
        <div style={{ padding: "0 24px 24px 72px", fontSize: 15.5, color: "var(--fg-default)", lineHeight: 1.65 }}>
          {item.a}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<FaqPage/>);
