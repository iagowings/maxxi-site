/* global React, ReactDOM, PageShell, TweaksPanel, Eyebrow, Card, Button, Icon, IconCircle, SPECIALTIES, EXAMES, GENERAL_WHATS */

function AgendarPage() {
  return (
    <PageShell active="agendar">
      <div data-screen-label="Agendar exame">
        <section style={{ padding: "80px 0 40px", background: "linear-gradient(180deg, var(--site-accent-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <Eyebrow>Agendamento</Eyebrow>
            <h1 style={{ fontSize: 56, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.06, margin: "8px 0 18px" }}>
              Agende seu exame ou consulta
            </h1>
            <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 720, margin: 0 }}>
              Escolha a especialidade e fale direto com a equipe certa pelo WhatsApp.
              Para exames de imagem e laboratoriais, tenha em mãos o pedido médico.
            </p>
            <div style={{ marginTop: 24 }}>
              <Button variant="primary" size="lg" icon="whatsapp"
                      href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de agendar um exame ou consulta na Maxxi Saúde.")}
                      target="_blank">Agendar pelo WhatsApp geral</Button>
            </div>
          </div>
        </section>

        <section className="section-pad-sm">
          <div className="container">
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.02em", margin: "0 0 24px" }}>Agendar por especialidade</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: 16 }}>
              {SPECIALTIES.map((s) => (
                <Card key={s.slug} className="reveal" hoverable style={{ padding: "20px 22px", display: "flex", alignItems: "center", gap: 14 }}>
                  <IconCircle name={s.icon} color="accent" size={44} stroke={1.6}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "var(--fg-strong)" }}>{s.name}</div>
                    {s.doctor && <div style={{ fontSize: 13, color: "var(--fg-muted)" }}>{s.doctor.name}</div>}
                  </div>
                  <a href={"https://wa.me/" + s.whatsapp + "?text=" + encodeURIComponent("Olá! Gostaria de agendar " + s.name + " na Maxxi Saúde.")}
                     target="_blank" rel="noopener"
                     aria-label={"Agendar " + s.name}
                     style={{ color: "var(--ms-green-700)", display: "inline-flex" }}>
                    <Icon name="whatsapp" size={22}/>
                  </a>
                </Card>
              ))}
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.02em", margin: "48px 0 24px" }}>Agendar exames de imagem e laboratório</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: 16 }}>
              {EXAMES.map((e) => (
                <Card key={e.slug} className="reveal" hoverable style={{ padding: "20px 22px", display: "flex", alignItems: "center", gap: 14 }}>
                  <IconCircle name={e.icon} color="blue" size={44} stroke={1.6}/>
                  <div style={{ flex: 1 }}>
                    <a href={"/exames/" + e.slug + "/"} style={{ fontSize: 16, fontWeight: 800, color: "var(--fg-strong)", textDecoration: "none" }}>{e.name}</a>
                  </div>
                  <a href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de agendar " + e.name + " na Maxxi Saúde.")}
                     target="_blank" rel="noopener"
                     aria-label={"Agendar " + e.name}
                     style={{ color: "var(--ms-green-700)", display: "inline-flex" }}>
                    <Icon name="whatsapp" size={22}/>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AgendarPage/>);
