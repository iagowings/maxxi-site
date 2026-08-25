/* global React, Icon, Button, Badge, IconCircle, SectionTitle, Eyebrow, Card, Field, GENERAL_WHATS */
const { useState: useStateR } = React;

const MEDCLOUD_URL = "https://www.medcloud.co/?page=maxxi";

function ResultadosPage() {
  const [cpf, setCpf] = useStateR("");
  const [senha, setSenha] = useStateR("");
  const [submitting, setSubmitting] = useStateR(false);
  const [error, setError] = useStateR("");

  const onSubmit = (e) => {
    e?.preventDefault?.();
    setError("");
    // The official portal is hosted by MedCloud — send the patient there to log in.
    window.open(MEDCLOUD_URL, "_blank", "noopener");
  };

  return (
    <PageShell active="resultados">
      <div data-screen-label="Resultados online">
        <section style={{ padding: "72px 0 80px", background: "linear-gradient(180deg, var(--ms-blue-50) 0%, transparent 100%)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }} id="r-grid">
            <div>
              <Badge variant="soft-blue" icon="lock">Seguro · 24 horas</Badge>
              <h1 style={{ fontSize: 60, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.05, margin: "16px 0 18px" }}>
                Seu resultado,<br/>
                <span style={{ color: "var(--site-accent-600)" }}>na hora que precisar.</span>
              </h1>
              <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 540, margin: "0 0 32px" }}>
                O resultado dos seus exames fica guardado aqui, e você vê pelo celular a
                hora que quiser. É só entrar com o CPF e a senha que a equipe te entrega
                no dia do exame.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                {[
                  ["check-circle", "Aberto 24 horas, todo dia"],
                  ["check-circle", "Dá para salvar no celular e mandar para o seu médico"],
                  ["check-circle", "Traz também as imagens do exame"],
                  ["check-circle", "Guarda os exames que você já fez aqui"],
                ].map(([ic, t]) => (
                  <li key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--fg-default)" }}>
                    <Icon name={ic} size={20} className="" style={{ color: "var(--site-accent-600)" }}/> {t}
                  </li>
                ))}
              </ul>
            </div>

            <Card padding={32} style={{ boxShadow: "var(--sh-lg)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <IconCircle name="lock" color="blue-solid" size={44}/>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--fg-strong)" }}>Acessar resultados</div>
                  <div style={{ fontSize: 13, color: "var(--fg-muted)" }}>Use o CPF do paciente</div>
                </div>
              </div>
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Field label="CPF do paciente" placeholder="000.000.000-00" icon="user" value={cpf} onChange={setCpf}/>
                <Field label="Senha de acesso" type="password" placeholder="••••••••" icon="lock" value={senha} onChange={setSenha} hint="Senha entregue no momento do exame. Esqueceu? Fale conosco."/>
                {error && (
                  <div style={{ fontSize: 13, color: "var(--ms-danger)", background: "#FDE4E4", padding: "10px 14px", borderRadius: 10 }}>
                    {error}
                  </div>
                )}
                <Button variant="secondary" type="submit" size="lg" fullWidth iconAfter="arrow-right" onClick={onSubmit}>
                  {submitting ? "Verificando…" : "Entrar no portal"}
                </Button>
                <a href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Preciso de ajuda para ver o resultado do meu exame.")} target="_blank" rel="noopener"
                   style={{ fontSize: 13, color: "var(--ms-blue-600)", textAlign: "center", marginTop: 4, fontWeight: 600 }}>
                  Esqueci a senha — quero falar com a clínica
                </a>
              </form>
            </Card>
          </div>
          <style>{`@media (max-width: 920px) { #r-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        <section className="section-pad" style={{ background: "var(--ms-off-white)", borderTop: "1px solid var(--border-subtle)" }}>
          <div className="container">
            <SectionTitle eyebrow="Como funciona" title="Três passos para ver o seu resultado." align="center"/>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} id="step-grid">
              {[
                ["1", "Pegue a sua senha", "No dia do exame, a equipe entrega um cartãozinho com o seu CPF e uma senha."],
                ["2", "Entre pelo celular", "Abra esta página no celular ou no computador, a hora que você quiser, de dia ou de noite."],
                ["3", "Mande para o médico", "Salve o resultado no celular e mande para o seu médico, até pelo WhatsApp."],
              ].map(([n, t, d]) => (
                <Card key={n} padding={28} style={{ minHeight: 200 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "var(--site-accent-500)", color: "#fff",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: 18,
                  }}>{n}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 800, color: "var(--fg-strong)", margin: "16px 0 8px", letterSpacing: "-0.01em" }}>{t}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0 }}>{d}</p>
                </Card>
              ))}
            </div>
            <style>{`@media (max-width: 920px) { #step-grid { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ResultadosPage/>);
