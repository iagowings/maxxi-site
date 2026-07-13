/* global React, Icon, Button, Badge, IconCircle, DoctorAvatar, SectionTitle, Eyebrow, Card, SPECIALTIES, EQUIPMENT, CONVENIOS, GENERAL_WHATS, SpecialtiesGrid */
const { useState: useStateH, useEffect: useEffectH } = React;

/* ============================================================
   1. Hero
   ============================================================ */
function HomeHero() {
  return (
    <section id="top" style={{ position: "relative", padding: "72px 0 96px", overflow: "hidden" }}>
      {/* Soft brand wash background */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: -1,
        background: "radial-gradient(60% 80% at 85% 0%, var(--site-accent-50) 0%, transparent 70%), radial-gradient(50% 60% at 0% 20%, var(--ms-blue-50) 0%, transparent 70%)",
      }} />

      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }} id="hero-grid">
        <div>
          <Badge variant="soft-blue" icon="map-pin">Altamira / PA &middot; 10 anos cuidando do Xingu</Badge>
          <h1 style={{
            fontSize: 68, lineHeight: 1.02, letterSpacing: "-0.035em", fontWeight: 900,
            color: "var(--fg-strong)", margin: "22px 0 22px",
          }}>
            Cuidado humano,<br />
            <span style={{ color: "var(--site-accent-500)" }}>tecnologia</span> de capital.
          </h1>
          <p style={{ fontSize: 20, color: "var(--fg-default)", lineHeight: 1.5, maxWidth: 540, marginBottom: 32 }}>
            Você não precisa mais sair de Altamira para ter atendimento de qualidade.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" icon="calendar"
              href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de agendar.")}
              target="_blank">Quero agendar</Button>
            <Button variant="outline" size="lg" iconAfter="arrow-right" href="/tomografia-128-canais/">Ver nova tecnologia</Button>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          {/* Hero photo */}
          <div style={{
            aspectRatio: "4/5",
            borderRadius: 28,
            boxShadow: "var(--sh-xl)",
            position: "relative",
            overflow: "hidden",
            background: "var(--ms-blue-700)",
          }}>
            <img src="/assets/hero-home.jpg" alt="Interior da clínica Maxxi Saúde em Altamira"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center",
                display: "block",
              }} />
            {/* Bottom gradient so overlay text stays legible over any photo */}
            <div aria-hidden="true" style={{
              position: "absolute", left: 0, right: 0, bottom: 0, height: "55%",
              background: "linear-gradient(180deg, rgba(20,52,71,0) 0%, rgba(20,52,71,0.72) 100%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: 28, color: "#fff" }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.15, textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}>
                  Atendimento humanizado<br />com tecnologia de ponta.
                </div>
              </div>
            </div>
            {/* Top-left badge */}
            <img src="/assets/logo-mark.png" alt=""
              style={{
                position: "absolute", left: 20, top: 20, width: 56, height: 56, borderRadius: 14,
                background: "#fff", padding: 6, boxShadow: "var(--sh-md)"
              }} />
          </div>

          {/* Floating "Tomografia 128" card */}
          <div style={{
            position: "absolute", left: -28, bottom: -32,
            background: "#fff",
            border: "1px solid var(--border-subtle)",
            borderRadius: 18, padding: "16px 18px",
            boxShadow: "var(--sh-lg)",
            display: "flex", alignItems: "center", gap: 14,
            minWidth: 280, maxWidth: 320,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: "linear-gradient(135deg, var(--site-accent-400), var(--site-accent-600))",
              color: "#fff",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              flex: "0 0 auto",
            }}>
              <Icon name="scan-line" size={24} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: "var(--site-accent-700)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Novidade · única na região</div>
              <div style={{ fontSize: 14.5, fontWeight: 800, color: "var(--fg-strong)", marginTop: 2 }}>Tomografia de 128 canais</div>
            </div>
          </div>

          {/* Floating "10 anos" seal — top right */}
          <div style={{
            position: "absolute", right: -16, top: 28,
            background: "#fff",
            borderRadius: "50%",
            width: 96, height: 96,
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--sh-md)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column",
            color: "var(--ms-blue-700)",
          }}>
            <div style={{ fontSize: 9, letterSpacing: "0.15em", fontWeight: 700, color: "var(--fg-muted)" }}>DESDE 2014</div>
            <div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, color: "var(--site-accent-700)" }}>10+</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--ms-blue-700)" }}>anos</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          #hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #hero-grid > div:last-child { max-width: 460px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div style={{ fontSize: 32, fontWeight: 900, color: "var(--ms-blue-700)", letterSpacing: "-0.02em" }}>{n}</div>
      <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 4, maxWidth: 160 }} dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
}

/* ============================================================
   2. Tomografia 128 — feature strip
   ============================================================ */
function Tom128Strip() {
  return (
    <section className="section-pad" style={{ background: "var(--ms-blue-800)", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" className="bg-grid" style={{
        position: "absolute", inset: 0, opacity: 0.6,
        background: "radial-gradient(60% 80% at 100% 50%, rgba(126,195,101,0.18) 0%, transparent 70%)",
      }} />
      <div className="container" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }} id="tom-grid">
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 14px", borderRadius: 999,
            background: "var(--site-accent-500)", color: "#fff",
            fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: 22,
          }}>
            <Icon name="sparkle" size={14} /> única na região
          </div>
          <h2 style={{ fontSize: 56, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.02, color: "#fff", margin: "0 0 22px" }}>
            Tomografia de<br />
            <span style={{ color: "var(--site-accent-300)" }}>128 canais.</span>
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.82)", lineHeight: 1.55, maxWidth: 520, margin: "0 0 28px" }}>
            Imagens de altíssima definição, exames em segundos, menor dose de radiação.
            Diagnósticos que antes exigiam viagem a Belém — agora ficam no centro de Altamira.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
            {[
              ["0,33 s", "por rotação"],
              ["3D", "reconstruções em alta resolução"],
              ["−40 %", "dose de radiação com algoritmos iterativos"],
              ["24 h", "plantão para urgências"],
            ].map(([k, v]) => (
              <div key={k} style={{
                padding: "16px 18px", borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>{k}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" iconAfter="arrow-right" href="/tomografia-128-canais/">Conhecer a tecnologia</Button>
            <Button variant="onbrand" size="lg" icon="whatsapp"
              href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de agendar uma tomografia.")}
              target="_blank">Agendar tomografia</Button>
          </div>
        </div>

        <div style={{ position: "relative", aspectRatio: "1/1" }}>
          {/* Scanner ring placeholder */}
          <div style={{
            position: "absolute", inset: 0,
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, rgba(126,195,101,0.0), rgba(126,195,101,0.4), rgba(126,195,101,0.0))",
            filter: "blur(8px)",
          }} />
          <div style={{
            position: "absolute", inset: 18,
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 50%, #1a445f 0%, #0d2230 70%)",
            border: "2px solid rgba(255,255,255,0.10)",
            boxShadow: "inset 0 0 80px rgba(0,0,0,0.5)",
          }} />
          <div style={{
            position: "absolute", inset: 56,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)",
          }} />
          <div style={{
            position: "absolute", inset: 84,
            borderRadius: "50%",
            border: "1px dashed rgba(255,255,255,0.20)",
          }} />
          {/* Ticks around the ring */}
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute", left: "50%", top: "50%",
              width: 2, height: "44%",
              background: "rgba(255,255,255,0.20)",
              transform: `translate(-50%, -100%) rotate(${i * 15}deg)`,
              transformOrigin: "50% 100%",
            }} />
          ))}
          {/* Center label */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", color: "#fff",
          }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", fontWeight: 700, color: "var(--site-accent-300)", textTransform: "uppercase" }}>Canais</div>
            <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", color: "#fff" }}>128</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>tomografia computadorizada</div>
          </div>
          {/* Floating chip — replacement image */}
          <div style={{
            position: "absolute", left: -18, bottom: 18,
            background: "#fff", color: "var(--fg-strong)",
            borderRadius: 14, padding: "12px 16px",
            boxShadow: "var(--sh-lg)",
            display: "flex", alignItems: "center", gap: 10,
            fontSize: 13, fontWeight: 700,
          }}>
            <IconCircle name="scan-line" color="accent" size={36} stroke={2} />
            Imagens em segundos
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px) {
          #tom-grid { grid-template-columns: 1fr !important; }
          #tom-grid > div:last-child { max-width: 420px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   3. Especialidades preview
   ============================================================ */
function SpecialtiesPreview() {
  return (
    <section className="section-pad" id="especialidades-preview">
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 40, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>Especialidades</Eyebrow>
            <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.025em", color: "var(--fg-strong)", lineHeight: 1.08, margin: 0 }}>
              12 especialidades, <span style={{ color: "var(--site-accent-600)" }}>um WhatsApp direto</span> para cada uma.
            </h2>
            <p style={{ fontSize: 18, color: "var(--fg-muted)", marginTop: 18, lineHeight: 1.55 }}>
              Cada especialista tem um canal direto. Fale com a equipe certa desde a primeira mensagem.
            </p>
          </div>
          <Button variant="outline" iconAfter="arrow-right" href="/especialidades/">Ver todas</Button>
        </div>

        <SpecialtiesGrid limit={6} />
      </div>
    </section>
  );
}

/* ============================================================
   4. Equipamentos resumo (3 cards)
   ============================================================ */
function EquipmentRow() {
  return (
    <section className="section-pad bg-wash-blue" id="equipamentos">
      <div className="container">
        <SectionTitle
          eyebrow="Tecnologia"
          title="Equipamentos novos e laudos por especialistas."
          kicker="Investimos para que o diagnóstico que você precisa esteja perto, com a qualidade que você merece."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} id="equip-grid">
          {EQUIPMENT.map((eq, i) => (
            <Card key={eq.slug} hoverable style={{ padding: 28, minHeight: 280, display: "flex", flexDirection: "column" }}>
              {eq.badge && (
                <div style={{ marginBottom: 14 }}>
                  <Badge variant="solid-accent" icon="sparkle">{eq.badge}</Badge>
                </div>
              )}
              <IconCircle name={eq.icon} color={i === 0 ? "accent-solid" : "blue"} size={56} stroke={1.5} />
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--fg-strong)", margin: "18px 0 8px", letterSpacing: "-0.01em" }}>{eq.short}</h3>
              <p style={{ fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 20px", flex: 1 }}>{eq.summary}</p>
              <a href={"/tomografia-128-canais/#" + eq.slug} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 14, fontWeight: 700, color: "var(--ms-blue-700)", textDecoration: "none",
              }}>
                Saiba mais <Icon name="arrow-right" size={14} />
              </a>
            </Card>
          ))}
        </div>
        <style>{`@media (max-width: 920px) { #equip-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

/* ============================================================
   5. Doctors strip — humanização
   ============================================================ */
function DoctorsStrip() {
  const doctors = SPECIALTIES.filter(s => s.doctor).slice(0, 5);
  return (
    <section className="section-pad" id="equipe">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "center" }} id="doc-grid">
          <div>
            <Eyebrow color="blue">Nossa equipe</Eyebrow>
            <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.025em", color: "var(--fg-strong)", lineHeight: 1.08, margin: 0 }}>
              Especialistas que conhecem<br />
              <span style={{ color: "var(--ms-blue-500)" }}>a sua história.</span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--fg-muted)", marginTop: 18, lineHeight: 1.55, maxWidth: 460 }}>
              Médicas e médicos com agendas próprias e canais diretos. Você fala
              com quem vai te atender — sem central de telemarketing.
            </p>
            <div style={{ marginTop: 24 }}>
              <Button variant="secondary" iconAfter="arrow-right" href="/especialidades/">Ver todos os profissionais</Button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }} id="doc-cards">
            {doctors.map(s => (
              <a key={s.slug} href={"https://wa.me/" + s.whatsapp} target="_blank" rel="noopener" className="lift no-link"
                style={{
                  background: "#fff", border: "1px solid var(--border-subtle)",
                  borderRadius: 16, padding: 16,
                  display: "flex", alignItems: "center", gap: 14,
                  boxShadow: "var(--sh-xs)", textDecoration: "none", color: "inherit",
                }}>
                <DoctorAvatar name={s.doctor.name} color={s.color} size={52} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 800, color: "var(--fg-strong)" }}>{s.doctor.name}</div>
                  <div style={{ fontSize: 12.5, color: "var(--fg-muted)", marginTop: 2 }}>{s.name}</div>
                </div>
                <div style={{ color: "var(--site-accent-600)" }}><Icon name="whatsapp" size={20} /></div>
              </a>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 920px) {
            #doc-grid { grid-template-columns: 1fr !important; }
            #doc-cards { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ============================================================
   6. Convênios + Plantão banner
   ============================================================ */
function ConveniosBand() {
  return (
    <section style={{ padding: "56px 0", background: "var(--ms-off-white)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, alignItems: "center" }} id="conv-grid">
          <div>
            <Eyebrow color="blue">Convênios</Eyebrow>
            <h3 style={{ fontSize: 26, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.02em", margin: 0 }}>
              Atendemos os principais convênios da região.
            </h3>
            <a href="/convenios/" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, fontSize: 14, fontWeight: 700, color: "var(--ms-blue-700)", textDecoration: "none" }}>
              Ver lista completa <Icon name="arrow-right" size={14} />
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {CONVENIOS.map(c => (
              <div key={c} style={{
                padding: "10px 16px", borderRadius: 999,
                background: "#fff", border: "1px solid var(--border-subtle)",
                fontSize: 13, fontWeight: 700, color: "var(--ms-blue-700)",
              }}>{c}</div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 920px) { #conv-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

/* ============================================================
   7. Final CTA — agendar + plantão
   ============================================================ */
function FinalCta() {
  return (
    <section className="section-pad" id="contato-cta">
      <div className="container">
        <div style={{
          position: "relative",
          background: "linear-gradient(135deg, var(--ms-blue-500) 0%, var(--ms-blue-800) 100%)",
          borderRadius: 32,
          padding: "64px 56px",
          color: "#fff",
          overflow: "hidden",
          boxShadow: "var(--sh-xl)",
        }} id="cta-box">
          {/* Decorative mark */}
          <div aria-hidden="true" style={{
            position: "absolute", right: -60, top: -60,
            width: 320, height: 320, borderRadius: "50%",
            background: "var(--site-accent-500)",
            opacity: 0.18, filter: "blur(2px)",
          }} />
          <div aria-hidden="true" style={{
            position: "absolute", right: 30, bottom: -80,
            width: 240, height: 240, borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.10)",
          }} />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }} id="cta-grid">
            <div>
              <Badge variant="solid-accent" icon="clock">Plantão 24h tomografia &amp; raio-x</Badge>
              <h2 style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.02, margin: "16px 0 16px", color: "#fff" }}>
                Vamos cuidar de você?
              </h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.82)", lineHeight: 1.5, maxWidth: 520, margin: "0 0 28px" }}>
                Agende uma consulta ou exame em poucos minutos. A equipe da Maxxi
                Saúde te responde direto no WhatsApp da especialidade.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button variant="primary" size="lg" icon="calendar"
                  href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de agendar.")}
                  target="_blank">Quero agendar</Button>
                <Button variant="onbrand" size="lg" icon="map-pin" href="/contato/">Como chegar</Button>
              </div>
            </div>
            <div>
              <div style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 20,
                padding: 24,
              }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 14 }}>Atendimento</div>
                <InfoRow icon="map-pin" label="Tv. Coronel Tancredo, 45 · Centro · Altamira / PA" />
                <InfoRow icon="clock" label="Seg–Sáb · 7h às 19h" />
                <InfoRow icon="whatsapp" label="(93) 99180-5990" />
                <InfoRow icon="check-circle" label="Plantão 24h · todos os dias" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 920px) {
          #cta-box { padding: 40px 28px !important; }
          #cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function InfoRow({ icon, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,255,255,0.10)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
        <Icon name={icon} size={16} />
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>{label}</div>
    </div>
  );
}

Object.assign(window, { HomeHero, Tom128Strip, SpecialtiesPreview, EquipmentRow, DoctorsStrip, ConveniosBand, FinalCta });

function HomePage() {
  return (
    <PageShell active="home">
      <div data-screen-label="Home">
        <HomeHero />
        <Tom128Strip />
        <SpecialtiesPreview />
        <EquipmentRow />
        <DoctorsStrip />
        <ConveniosBand />
        <FinalCta />
      </div>
      <TweaksPanel />
    </PageShell>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<HomePage />);
