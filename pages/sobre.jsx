/* global React, Icon, Button, Badge, IconCircle, SectionTitle, Eyebrow, Card, GENERAL_WHATS */

function SobrePage() {
  return (
    <PageShell active="sobre">
      <div data-screen-label="Sobre">
        <section style={{ padding: "80px 0 96px", background: "linear-gradient(180deg, var(--ms-blue-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 56, alignItems: "center" }} id="s-hero">
            <div>
              <Eyebrow color="blue">A clínica</Eyebrow>
              <h1 style={{ fontSize: 64, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.04, margin: "8px 0 22px" }}>
                Há <span style={{ color: "var(--site-accent-600)" }}>mais de 10 anos</span><br/>
                cuidando do Xingu.
              </h1>
              <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.6, maxWidth: 560, margin: "0 0 18px" }}>
                A Maxxi Saúde abriu as portas em 2014, em Altamira. A ideia do Dr. Anísio
                Fernando Chaves era simples: quem mora aqui no Xingu não deveria precisar
                pegar estrada até Belém para fazer um exame.
              </p>
              <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.6, maxWidth: 560, margin: 0 }}>
                Hoje a gente faz tomografia, ressonância, exame de sangue e atende em mais
                de dez especialidades. E continua com a mesma regra:
                <strong style={{ color: "var(--ms-blue-700)" }}> tratar cada pessoa com calma e atenção</strong>.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{
                aspectRatio: "1/1",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--site-accent-300), var(--ms-blue-500))",
                position: "relative",
                overflow: "hidden",
                boxShadow: "var(--sh-xl)",
              }}>
                <svg viewBox="0 0 400 400" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }}>
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="200" cy="200" r="170" fill="none" stroke="#fff" strokeWidth="1"/>
                </svg>
                <img src="/assets/logo-10-anos.png" alt="10 anos Maxxi Saúde"
                     style={{ position: "absolute", inset: 0, margin: "auto", width: "70%", filter: "brightness(0) invert(1)" }}/>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 920px) { #s-hero { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Pillars */}
        <section className="section-pad">
          <div className="container">
            <SectionTitle eyebrow="O que nos guia" title="Três promessas nossas com você." align="center"/>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} id="pillar-grid">
              {[
                {
                  icon: "heart",
                  title: "A gente escuta você",
                  body: "Tempo para ouvir, explicar e cuidar. Aqui você é uma pessoa, não uma senha na fila."
                },
                {
                  icon: "scan-line",
                  title: "Aparelhos modernos",
                  body: "Como a tomografia de 128 canais, que antes só existia em cidade grande. Agora está aqui."
                },
                {
                  icon: "shield-check",
                  title: "Médico especialista sempre",
                  body: "Quem lê o seu exame é um médico especialista. E tem plantão 24 horas para urgência."
                },
              ].map(p => (
                <Card key={p.title} padding={28} hoverable style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                    <IconCircle name={p.icon} color="accent" size={64} stroke={1.5}/>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--fg-strong)", margin: "0 0 10px", letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0 }}>{p.body}</p>
                </Card>
              ))}
            </div>
            <style>{`@media (max-width: 920px) { #pillar-grid { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-pad" style={{ background: "var(--ms-off-white)", borderTop: "1px solid var(--border-subtle)" }}>
          <div className="container">
            <SectionTitle eyebrow="Linha do tempo" title="A nossa história, ano a ano." />
            <div style={{ position: "relative", paddingLeft: 32 }}>
              <div style={{ position: "absolute", left: 11, top: 8, bottom: 8, width: 2, background: "var(--site-accent-200)" }}/>
              {[
                ["2014", "Fundação", "O radiologista Dr. Anísio Fernando Chaves abre as portas da Maxxi Saúde em Altamira."],
                ["2017", "Plantão 24h", "Inauguração do plantão 24 horas de tomografia e raio-x para atender urgências."],
                ["2020", "Análises clínicas", "O laboratório cresceu: exame de imagem e exame de sangue passaram a ser no mesmo lugar."],
                ["2024", "10 anos & nova era", "Dez anos de clínica e a chegada da tomografia de 128 canais, a única em clínica particular da região."],
                ["Hoje", "12 especialidades", "A equipe cresceu: chegaram mastologia, psiquiatria, neurologia e outras especialidades."],
              ].map(([year, title, body], i) => (
                <div key={year} style={{ position: "relative", paddingBottom: i < 4 ? 36 : 0 }}>
                  <div style={{
                    position: "absolute", left: -32, top: 6,
                    width: 24, height: 24, borderRadius: "50%",
                    background: "#fff", border: "3px solid var(--site-accent-500)",
                    boxShadow: "var(--sh-xs)",
                  }}/>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "var(--site-accent-700)", letterSpacing: "0.1em" }}>{year}</div>
                  <div style={{ fontSize: 21, fontWeight: 800, color: "var(--fg-strong)", margin: "4px 0 6px", letterSpacing: "-0.01em" }}>{title}</div>
                  <p style={{ fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0, maxWidth: 720 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder card */}
        <section className="section-pad">
          <div className="container">
            <Card padding={40} style={{
              display: "grid", gridTemplateColumns: "auto 1fr", gap: 32,
              background: "linear-gradient(135deg, var(--ms-blue-50) 0%, var(--site-accent-50) 100%)",
              border: "1px solid var(--ms-blue-100)",
              alignItems: "center",
            }} id="founder">
              <div style={{
                width: 160, height: 160, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--ms-blue-300), var(--ms-blue-700))",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 800, fontSize: 56, letterSpacing: "-0.02em",
                boxShadow: "var(--sh-md)",
                flex: "0 0 auto",
                fontFamily: "var(--font-display)",
              }}>AC</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ms-blue-600)" }}>Responsável técnico</div>
                <h3 style={{ fontSize: 30, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.02em", margin: "6px 0 10px" }}>Dr. Anísio Fernando Chaves</h3>
                <p style={{ fontSize: 16, color: "var(--fg-default)", lineHeight: 1.55, margin: 0 }}>
                  Médico radiologista, fundador e responsável técnico da Maxxi Saúde.
                  Apaixonado pelo Xingu, passou a carreira trazendo para perto daqui os
                  exames que antes só tinha em cidade grande.
                </p>
              </div>
              <style>{`@media (max-width: 720px) { #founder { grid-template-columns: 1fr !important; justify-items: start; } }`}</style>
            </Card>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SobrePage/>);
