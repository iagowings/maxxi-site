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
              <Badge variant="soft-blue" icon="lock">Portal seguro · 24h</Badge>
              <h1 style={{ fontSize: 60, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.05, margin: "16px 0 18px" }}>
                Seu resultado,<br/>
                <span style={{ color: "var(--site-accent-600)" }}>na hora que precisar.</span>
              </h1>
              <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 540, margin: "0 0 32px" }}>
                Laudos de exames de imagem e análises clínicas disponíveis a qualquer
                hora, em qualquer dispositivo. Acesso seguro com CPF e senha entregues
                no momento do exame.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                {[
                  ["check-circle", "Disponível 24 horas, todos os dias"],
                  ["check-circle", "Download em PDF para enviar ao seu médico"],
                  ["check-circle", "Imagens em alta resolução (tomografia, ressonância, raio-X)"],
                  ["check-circle", "Histórico de exames anteriores no mesmo login"],
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
                <a href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Preciso de ajuda com o portal de resultados.")} target="_blank" rel="noopener"
                   style={{ fontSize: 13, color: "var(--ms-blue-600)", textAlign: "center", marginTop: 4, fontWeight: 600 }}>
                  Esqueci minha senha — falar com a clínica
                </a>
              </form>
            </Card>
          </div>
          <style>{`@media (max-width: 920px) { #r-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        <section className="section-pad" style={{ background: "var(--ms-off-white)", borderTop: "1px solid var(--border-subtle)" }}>
          <div className="container">
            <SectionTitle eyebrow="Como funciona" title="Três passos para o seu laudo." align="center"/>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} id="step-grid">
              {[
                ["1", "Receba seu login", "No dia do exame, você recebe um cartão com CPF e senha temporária."],
                ["2", "Acesse o portal", "Entre na página de Resultados online a qualquer momento, do celular ou computador."],
                ["3", "Baixe o laudo", "Faça o download do PDF e das imagens. Envie ao seu médico ou compartilhe direto pelo WhatsApp."],
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
