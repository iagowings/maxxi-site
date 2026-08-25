/* global React, ReactDOM, PageShell, TweaksPanel, Eyebrow, Card, Button, Icon, IconCircle, Badge, EXAMES, GENERAL_WHATS */

function ExamesPage() {
  return (
    <PageShell active="exames">
      <div data-screen-label="Exames">
        <section style={{ padding: "80px 0 40px", background: "linear-gradient(180deg, var(--ms-blue-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <Eyebrow color="blue">Exames</Eyebrow>
            <h1 style={{ fontSize: 56, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.06, margin: "8px 0 18px" }}>
              Exames que a gente faz aqui
            </h1>
            <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 720, margin: 0 }}>
              Tomografia, ressonância, mamografia, ultrassom, raio-x 24 horas e exame
              de sangue. Tudo no mesmo lugar, no centro de Altamira. Toque no exame para
              ver como ele é feito e o que você precisa levar.
            </p>
          </div>
        </section>

        <section className="section-pad-sm">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: 20 }}>
              {EXAMES.map((e) => (
                <Card key={e.slug} className="reveal" hoverable style={{ padding: 28, display: "flex", flexDirection: "column", minHeight: 240 }}>
                  {e.badge && <div style={{ marginBottom: 14 }}><Badge variant="solid-blue" icon="sparkle">{e.badge}</Badge></div>}
                  <IconCircle name={e.icon} color="blue" size={52} stroke={1.5}/>
                  <h2 style={{ fontSize: 21, fontWeight: 800, color: "var(--fg-strong)", margin: "16px 0 8px", letterSpacing: "-0.01em" }}>{e.name}</h2>
                  <p style={{ fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 18px", flex: 1 }}>{e.summary}</p>
                  <a href={"/exames/" + e.slug + "/"} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: "var(--ms-blue-700)", textDecoration: "none" }}>
                    Ver como é <Icon name="arrow-right" size={14}/>
                  </a>
                </Card>
              ))}
            </div>

            <div style={{ marginTop: 48, textAlign: "center" }}>
              <Button variant="primary" size="lg" icon="whatsapp"
                      href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Quero marcar um exame.")}
                      target="_blank">Marcar um exame no WhatsApp</Button>
            </div>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ExamesPage/>);
