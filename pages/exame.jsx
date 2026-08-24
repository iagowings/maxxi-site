/* global React, ReactDOM, PageShell, TweaksPanel, Eyebrow, Card, Button, Icon, IconCircle, Badge, EXAMES, GENERAL_WHATS */
/* Shared template for every /exames/<slug>/ page.
   Each page's index.html sets window.EXAME_SLUG before loading this file. */

function ExamePage() {
  const slug = window.EXAME_SLUG;
  const exam = (EXAMES || []).find(e => e.slug === slug);

  if (!exam) {
    return (
      <PageShell active="exames">
        <section className="section-pad">
          <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
            <h1 style={{ fontSize: 40, fontWeight: 800, color: "var(--fg-strong)" }}>Exame não encontrado</h1>
            <p style={{ fontSize: 18, color: "var(--fg-muted)" }}>Veja todos os exames disponíveis.</p>
            <Button variant="primary" href="/exames/" iconAfter="arrow-right">Ver todos os exames</Button>
          </div>
        </section>
      </PageShell>
    );
  }

  const related = (EXAMES || []).filter(e => e.slug !== exam.slug).slice(0, 3);

  return (
    <PageShell active="exames">
      <div data-screen-label={exam.name}>
        <section style={{ padding: "72px 0 40px", background: "linear-gradient(180deg, var(--ms-blue-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <nav aria-label="Trilha" style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 18 }}>
              <a href="/" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>Início</a>
              {" / "}
              <a href="/exames/" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>Exames</a>
              {" / "}
              <span style={{ color: "var(--fg-strong)", fontWeight: 700 }}>{exam.name}</span>
            </nav>
            {exam.badge && <div style={{ marginBottom: 16 }}><Badge variant="solid-blue" icon="sparkle">{exam.badge}</Badge></div>}
            <h1 style={{ fontSize: 52, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.06, margin: "0 0 18px" }}>
              {exam.name}
            </h1>
            <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 720, margin: 0 }}>
              {exam.summary}
            </p>
            <div style={{ marginTop: 24 }}>
              <Button variant="primary" size="lg" icon="whatsapp"
                      href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de agendar " + exam.name + " na Maxxi Saúde.")}
                      target="_blank">Agendar {exam.name}</Button>
            </div>
          </div>
        </section>

        <section className="section-pad-sm">
          <div className="container" id="exam-detail-grid" style={{ maxWidth: 880, display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32, alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.02em", margin: "0 0 14px" }}>Sobre o exame</h2>
              <p style={{ fontSize: 16, color: "var(--fg-default)", lineHeight: 1.7, margin: 0 }}>{exam.description}</p>
            </div>
            <Card accentBar style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <IconCircle name="info" color="accent" size={40} stroke={1.6}/>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--fg-strong)", margin: 0 }}>Preparo</h3>
              </div>
              <p style={{ fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.6, margin: 0 }}>{exam.prep}</p>
            </Card>
          </div>
          <style>{`@media (max-width: 860px) { #exam-detail-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        <section className="section-pad-sm" style={{ background: "var(--bg-subtle, #f7f9fb)" }}>
          <div className="container" style={{ maxWidth: 880 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.02em", margin: "0 0 24px" }}>Outros exames</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))", gap: 16 }}>
              {related.map((e) => (
                <a key={e.slug} href={"/exames/" + e.slug + "/"} style={{ textDecoration: "none" }}>
                  <Card hoverable style={{ padding: "20px 22px", display: "flex", alignItems: "center", gap: 14 }}>
                    <IconCircle name={e.icon} color="blue" size={42} stroke={1.6}/>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "var(--fg-strong)" }}>{e.name}</span>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ExamePage/>);
