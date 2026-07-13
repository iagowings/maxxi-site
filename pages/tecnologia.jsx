/* global React, Icon, Button, Badge, IconCircle, SectionTitle, Eyebrow, Card, EQUIPMENT, GENERAL_WHATS */

function TecnologiaPage() {
  return (
    <PageShell active="tecnologia">
      <div data-screen-label="Tecnologia">

        {/* Hero — Tomografia 128 in detail */}
        <section style={{ position: "relative", padding: "80px 0 120px", background: "var(--ms-blue-800)", color: "#fff", overflow: "hidden" }}>
          <div aria-hidden="true" className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.5 }}/>
          <div aria-hidden="true" style={{
            position: "absolute", right: -200, top: -120,
            width: 720, height: 720, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(126,195,101,0.22) 0%, transparent 60%)",
          }}/>
          <div className="container" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }} id="t-hero">
            <div>
              <Badge variant="solid-accent" icon="sparkle">Tecnologia inédita na região</Badge>
              <h1 style={{ fontSize: 72, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.98, color: "#fff", margin: "20px 0 22px" }}>
                Tomografia<br/>
                <span style={{ color: "var(--site-accent-300)" }}>de 128 canais.</span>
              </h1>
              <p style={{ fontSize: 20, color: "rgba(255,255,255,0.86)", lineHeight: 1.5, maxWidth: 540, margin: "0 0 32px" }}>
                A primeira tomografia de 128 canais em uma clínica privada da região
                Norte. Velocidade, definição e menor dose de radiação — o padrão de
                grandes centros, agora no centro de Altamira.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
                <Button variant="primary" size="lg" icon="whatsapp"
                        href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de agendar uma tomografia.")}
                        target="_blank">Agendar tomografia</Button>
                <Button variant="onbrand" size="lg" iconAfter="arrow-right" href="#equipamentos">Ver outros equipamentos</Button>
              </div>
              <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
                <BigStat n="128" label="canais"/>
                <BigStat n="0,33s" label="por rotação"/>
                <BigStat n="−40%" label="dose de radiação"/>
                <BigStat n="24h" label="plantão"/>
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "1/1" }}>
              <ScannerArt/>
            </div>
          </div>
          <style>{`
            @media (max-width: 980px) {
              #t-hero { grid-template-columns: 1fr !important; }
              #t-hero > div:last-child { max-width: 420px; margin: 0 auto; width: 100%; }
            }
          `}</style>
        </section>

        {/* Why it matters */}
        <section className="section-pad" id="tomografia-128">
          <div className="container">
            <SectionTitle
              eyebrow="Por que importa"
              title="O que muda com 128 canais?"
              kicker="Mais canais significam mais imagens por segundo. Diagnósticos que antes exigiam viagem agora ficam por aqui."
              align="center"
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} id="why-grid">
              {[
                {
                  icon: "scan-line",
                  title: "Imagens em segundos",
                  body: "A aquisição completa de um tórax ou abdome leva pouco mais de 10 segundos. Conforto pra você, agilidade para o seu médico."
                },
                {
                  icon: "shield-check",
                  title: "Menor dose de radiação",
                  body: "Algoritmos iterativos reduzem em até 40% a dose entregue ao paciente — especialmente importante em crianças e exames de acompanhamento."
                },
                {
                  icon: "activity",
                  title: "Reconstrução 3D",
                  body: "Cortes finos e reconstruções tridimensionais para estudos cardíacos, vasculares, ortopédicos e neurológicos com altíssima precisão."
                },
                {
                  icon: "heart-pulse",
                  title: "Angiotomografia",
                  body: "Avaliação detalhada de artérias coronárias e grandes vasos sem necessidade de cateterismo diagnóstico em muitos casos."
                },
                {
                  icon: "users",
                  title: "Todos os perfis",
                  body: "Mesa com suporte para até 220 kg e gantry mais amplo — atendendo pessoas com claustrofobia e mobilidade reduzida com mais conforto."
                },
                {
                  icon: "clock",
                  title: "Plantão 24h",
                  body: "Estamos abertos para urgências dia e noite. Em casos de trauma ou suspeita de AVC, cada minuto conta."
                },
              ].map(item => (
                <Card key={item.title} hoverable padding={28} style={{ minHeight: 260, display: "flex", flexDirection: "column" }}>
                  <IconCircle name={item.icon} color="accent" size={52} stroke={1.6}/>
                  <h3 style={{ fontSize: 19, fontWeight: 800, color: "var(--fg-strong)", margin: "18px 0 8px", letterSpacing: "-0.01em" }}>{item.title}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0 }}>{item.body}</p>
                </Card>
              ))}
            </div>
            <style>{`@media (max-width: 920px) { #why-grid { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        </section>

        {/* Other equipment */}
        <section className="section-pad" id="equipamentos" style={{ background: "var(--ms-off-white)", borderTop: "1px solid var(--border-subtle)" }}>
          <div className="container">
            <SectionTitle
              eyebrow="Mais equipamentos"
              title="Tecnologia que acompanha cada especialidade."
              kicker="Da imagem ao diagnóstico, investimos em equipamentos modernos e laudos por especialistas certificados."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {EQUIPMENT.filter(e => e.slug !== "tomografia-128").map((eq, i) => (
                <EquipmentRow key={eq.slug} eq={eq} flip={i % 2 === 1}/>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad" style={{ paddingBottom: 24 }}>
          <div className="container">
            <Card padding={48} style={{ textAlign: "center", background: "linear-gradient(135deg, var(--site-accent-50), var(--ms-blue-50))" }}>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.02em", margin: "0 0 12px" }}>
                Tem um pedido médico em mãos?
              </h2>
              <p style={{ fontSize: 17, color: "var(--fg-default)", margin: "0 auto 28px", maxWidth: 560, lineHeight: 1.55 }}>
                Mande uma foto pelo WhatsApp. A equipe da Maxxi confirma cobertura
                de convênio, valor particular e horários disponíveis.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Button variant="primary" size="lg" icon="whatsapp"
                        href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Vou enviar um pedido de exame.")}
                        target="_blank">Mandar pedido</Button>
                <Button variant="outline" size="lg" href="/contato/">Ver localização e horários</Button>
              </div>
            </Card>
          </div>
        </section>

      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

function BigStat({ n, label }) {
  return (
    <div>
      <div style={{ fontSize: 28, fontWeight: 900, color: "var(--site-accent-300)", letterSpacing: "-0.02em" }}>{n}</div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

function ScannerArt() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        background: "conic-gradient(from 0deg, rgba(126,195,101,0.0), rgba(126,195,101,0.5), rgba(126,195,101,0.0))",
        filter: "blur(10px)",
      }}/>
      <div style={{
        position: "absolute", inset: 18, borderRadius: "50%",
        background: "radial-gradient(circle at 50% 50%, #1a445f 0%, #0d2230 70%)",
        border: "2px solid rgba(255,255,255,0.10)",
        boxShadow: "inset 0 0 100px rgba(0,0,0,0.5)",
      }}/>
      <div style={{ position: "absolute", inset: 60, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.18)" }}/>
      <div style={{ position: "absolute", inset: 92, borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.20)" }}/>
      {Array.from({ length: 32 }).map((_, i) => (
        <div key={i} style={{
          position: "absolute", left: "50%", top: "50%",
          width: 2, height: "46%",
          background: i % 4 === 0 ? "rgba(126,195,101,0.6)" : "rgba(255,255,255,0.18)",
          transform: `translate(-50%, -100%) rotate(${i * (360/32)}deg)`,
          transformOrigin: "50% 100%",
        }}/>
      ))}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
        color: "#fff",
      }}>
        <div style={{ fontSize: 11, letterSpacing: "0.22em", fontWeight: 700, color: "var(--site-accent-300)", textTransform: "uppercase" }}>Canais</div>
        <div style={{ fontSize: 120, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.05em", color: "#fff" }}>128</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>tomografia computadorizada</div>
      </div>
    </div>
  );
}

function EquipmentRow({ eq, flip }) {
  return (
    <div id={eq.slug} className="lift" style={{
      display: "grid",
      gridTemplateColumns: flip ? "1fr 1.2fr" : "1.2fr 1fr",
      gap: 32, alignItems: "center",
      background: "#fff",
      border: "1px solid var(--border-subtle)",
      borderRadius: 24,
      padding: 32,
      boxShadow: "var(--sh-sm)",
    }}>
      <div style={{ order: flip ? 2 : 1 }}>
        <Badge variant="soft-blue" icon={eq.icon}>{eq.short}</Badge>
        <h3 style={{ fontSize: 30, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.02em", margin: "14px 0 12px" }}>{eq.name}</h3>
        <p style={{ fontSize: 16, color: "var(--fg-default)", lineHeight: 1.55, margin: "0 0 18px" }}>{eq.summary}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 8 }}>
          {eq.bullets.map(b => (
            <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: "var(--fg-default)" }}>
              <Icon name="check" size={18} className="" style={{ color: "var(--site-accent-600)", flex: "0 0 auto", marginTop: 2 }}/>
              {b}
            </li>
          ))}
        </ul>
        <Button variant="primary" icon="whatsapp"
                href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de agendar " + eq.short + ".")}
                target="_blank">Agendar {eq.short.toLowerCase()}</Button>
      </div>
      <div style={{ order: flip ? 1 : 2,
                    aspectRatio: "4/3",
                    borderRadius: 18,
                    background: `linear-gradient(135deg, var(--ms-blue-100) 0%, var(--ms-blue-300) 100%)`,
                    position: "relative",
                    overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name={eq.icon} size={120} stroke={1.2}/>
        </div>
        <div style={{ position: "absolute", left: 16, bottom: 16, background: "rgba(255,255,255,0.95)", padding: "8px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, color: "var(--ms-blue-700)" }}>
          <Icon name="image" size={12} style={{ verticalAlign: "-2px", marginRight: 6 }}/>
          Foto do equipamento
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TecnologiaPage/>);
