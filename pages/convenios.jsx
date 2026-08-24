/* global React, ReactDOM, PageShell, TweaksPanel, Eyebrow, Card, Badge, Button, IconCircle, CONVENIOS, GENERAL_WHATS */

function ConveniosPage() {
  return (
    <PageShell active="convenios">
      <div data-screen-label="Convênios">
        <section style={{ padding: "80px 0 40px", background: "linear-gradient(180deg, var(--ms-blue-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <Eyebrow color="blue">Atendimento</Eyebrow>
            <h1 style={{ fontSize: 56, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.06, margin: "8px 0 18px" }}>
              Convênios aceitos
            </h1>
            <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 720, margin: 0 }}>
              Atendemos diversos planos de saúde e também consultas e exames particulares
              em Altamira/PA. Confirme a cobertura do seu plano pelo WhatsApp antes de agendar.
            </p>
          </div>
        </section>

        <section className="section-pad-sm">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))", gap: 16 }}>
              {CONVENIOS.map((c) => (
                <Card key={c} className="reveal" style={{ padding: "22px 24px", display: "flex", alignItems: "center", gap: 14 }}>
                  <IconCircle name="shield-check" color="blue" size={42} stroke={1.5}/>
                  <span style={{ fontSize: 15.5, fontWeight: 700, color: "var(--fg-strong)" }}>{c}</span>
                </Card>
              ))}
            </div>

            <div style={{
              marginTop: 48, padding: 32, borderRadius: 20,
              background: "var(--ms-blue-50)", border: "1px solid var(--ms-blue-100)",
              display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
            }}>
              <IconCircle name="whatsapp" color="accent-solid" size={56}/>
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--fg-strong)", margin: 0, letterSpacing: "-0.01em" }}>Seu plano está na lista?</h3>
                <p style={{ fontSize: 14.5, color: "var(--fg-muted)", margin: "6px 0 0", lineHeight: 1.5 }}>
                  A lista pode mudar — nossa equipe confirma a cobertura do seu convênio na hora.
                </p>
              </div>
              <Button variant="primary" icon="whatsapp"
                      href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de saber se meu convênio é aceito na Maxxi Saúde.")}
                      target="_blank">Confirmar meu convênio</Button>
            </div>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ConveniosPage/>);
