/* global React, Icon, Button, Badge, IconCircle, SectionTitle, Eyebrow, Field, Card, SPECIALTIES, CATEGORIES, GENERAL_WHATS, SpecialtiesGrid */
const { useState: useStateE } = React;

function EspecialidadesPage() {
  const [filter, setFilter] = useStateE("todas");
  const [search, setSearch] = useStateE("");

  return (
    <PageShell active="especialidades">
      <div data-screen-label="Especialidades">

        {/* Hero header */}
        <section style={{ padding: "72px 0 56px", background: "linear-gradient(180deg, var(--site-accent-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ maxWidth: 920 }}>
            <Eyebrow>Especialidades</Eyebrow>
            <h1 style={{ fontSize: 60, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.05, margin: "8px 0 18px" }}>
              12 especialidades. Cada uma com<br/>
              <span style={{ color: "var(--site-accent-600)" }}>um canal direto pra você.</span>
            </h1>
            <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 720, margin: 0 }}>
              Aqui você encontra ginecologista, pediatra, cardiologista, dentista e mais.
              Escolha embaixo o que você precisa e fale direto no WhatsApp — pode mandar áudio.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <section id="filter-bar" style={{
          position: "sticky", top: 76, zIndex: 30,
          background: "rgba(247, 250, 246, 0.92)",
          backdropFilter: "saturate(180%) blur(8px)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "16px 0",
        }}>
          <div className="container filter-bar-row" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div id="filter-chips" style={{ display: "flex", gap: 6, flexWrap: "wrap", flex: 1, minWidth: 0 }}>
              {CATEGORIES.map(c => {
                const sel = filter === c.id;
                return (
                  <button key={c.id} onClick={() => setFilter(c.id)}
                    style={{
                      padding: "9px 16px", borderRadius: 999,
                      background: sel ? "var(--ms-blue-700)" : "#fff",
                      color: sel ? "#fff" : "var(--fg-default)",
                      border: "1px solid " + (sel ? "var(--ms-blue-700)" : "var(--border-subtle)"),
                      fontSize: 13, fontWeight: 700, cursor: "pointer",
                      fontFamily: "inherit", whiteSpace: "nowrap",
                      transition: "background 140ms, color 140ms, border-color 140ms",
                    }}>{c.label}</button>
                );
              })}
            </div>
            <div id="filter-search" style={{ width: 280, maxWidth: "100%" }}>
              <Field icon="search" placeholder="Procure por médico, exame ou o que você está sentindo…" value={search} onChange={setSearch}/>
            </div>
          </div>
          <style>{`
            @media (max-width: 720px) {
              #filter-bar { padding: 10px 0 !important; }
              #filter-bar .filter-bar-row { flex-direction: column !important; align-items: stretch !important; gap: 10px !important; }
              #filter-chips {
                flex-wrap: nowrap !important;
                overflow-x: auto;
                padding: 2px 20px 6px;
                margin: 0 -20px;
                /* Sem largura explicita o align-items:stretch da coluna estica a
                   faixa ate o conteudo (656px) e o overflow-x nunca entra em acao.
                   100% + 40px = largura do container mais as margens negativas. */
                width: calc(100% + 40px);
                scrollbar-width: none;
                -ms-overflow-style: none;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                mask-image: linear-gradient(to right, transparent 0, #000 12px, #000 calc(100% - 12px), transparent 100%);
              }
              #filter-chips::-webkit-scrollbar { display: none; }
              #filter-chips > button { flex: 0 0 auto; scroll-snap-align: start; }
              #filter-search { width: 100% !important; }
              #filter-search input { height: 42px !important; font-size: 14px !important; }
            }
          `}</style>
        </section>

        {/* Grid */}
        <section className="section-pad-sm">
          <div className="container">
            <SpecialtiesGrid filter={filter} search={search}/>

            <div style={{
              marginTop: 48, padding: 28, borderRadius: 18,
              background: "var(--ms-blue-50)", border: "1px solid var(--ms-blue-100)",
              display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
            }}>
              <IconCircle name="stethoscope" color="blue-solid" size={56}/>
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--fg-strong)", margin: 0, letterSpacing: "-0.01em" }}>Não achou o que procura?</h3>
                <p style={{ fontSize: 14.5, color: "var(--fg-muted)", margin: "6px 0 0", lineHeight: 1.5 }}>
                  A gente está sempre trazendo médicos novos. Manda uma mensagem contando
                  o que você precisa — se a gente não tiver, indica quem tem.
                </p>
              </div>
              <Button variant="secondary" icon="whatsapp"
                      href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Procuro um atendimento que não vi no site.")}
                      target="_blank">Falar com a clínica</Button>
            </div>
          </div>
        </section>

      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<EspecialidadesPage/>);
