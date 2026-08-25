/* global React, ReactDOM, PageShell, TweaksPanel, Icon, Button, Badge, IconCircle, SectionTitle, Eyebrow, Card,
          SPECIALTIES, GENERAL_WHATS, RECEPCAO_WHATS, IA_WHATS, PLANTAO_WHATS, PHONE_FIXED, PHONE_FIXED_TEL */

const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Maxxi Saúde, Travessa Coronel Tancredo, 45, Centro, Altamira, PA");

const formatWhats = (w) => "+55 (" + w.slice(2, 4) + ") " + w.slice(4, 9) + "-" + w.slice(9);

function ContatoPage() {
  return (
    <PageShell active="contato">
      <div data-screen-label="Contato">
        <section style={{ padding: "72px 0 24px" }}>
          <div className="container">
            <Eyebrow>Contato</Eyebrow>
            <h1 style={{ fontSize: 60, fontWeight: 900, color: "var(--fg-strong)", letterSpacing: "-0.035em", lineHeight: 1.05, margin: "8px 0 18px", maxWidth: 880 }}>
              Fale com a Maxxi Saúde,<br/>
              <span style={{ color: "var(--site-accent-600)" }}>pelo canal certo.</span>
            </h1>
            <p style={{ fontSize: 19, color: "var(--fg-default)", lineHeight: 1.55, maxWidth: 720, margin: 0 }}>
              Escolha embaixo o jeito que for melhor para você. Para marcar consulta ou
              exame e falar com uma pessoa, use o WhatsApp da Recepção — o primeiro da lista.
            </p>
          </div>
        </section>

        {/* 4 official channels */}
        <section className="section-pad-sm">
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} id="channels-grid">
              <ChannelCard
                eyebrow="Recepção"
                title="WhatsApp da Recepção"
                number="(93) 99180-1155"
                purpose="Para marcar consulta e exame, tirar dúvida sobre plano de saúde e pedir uma ligação. Aqui do outro lado tem uma pessoa da equipe. Pode mandar áudio."
                cta="Falar com a Recepção"
                href={"https://wa.me/" + RECEPCAO_WHATS + "?text=" + encodeURIComponent("Olá! Vim pelo site da Maxxi Saúde.")}
                icon="whatsapp"
                color="accent-solid"
                tag={{ label: "Canal principal", variant: "solid-accent" }}
              />
              <ChannelCard
                eyebrow="Voz"
                title="Telefone Fixo"
                number={PHONE_FIXED}
                purpose="Se você prefere falar por voz, ligue neste número. Atendemos no horário da clínica."
                cta="Ligar agora"
                href={"tel:" + PHONE_FIXED_TEL}
                icon="phone"
                color="blue-solid"
                tag={{ label: "Para ligar", variant: "soft-blue" }}
              />
              <ChannelCard
                eyebrow="Dúvidas gerais"
                title="Atendimento por IA"
                number="(93) 93300-3181"
                purpose="Para dúvidas simples a qualquer hora do dia ou da noite. Quem responde é um atendente automático, na hora. Só aceita mensagem, não recebe ligação."
                cta="Conversar com a IA"
                href={"https://wa.me/" + IA_WHATS + "?text=" + encodeURIComponent("Olá! Tenho uma dúvida sobre a Maxxi Saúde.")}
                icon="sparkle"
                color="accent"
                tag={{ label: "Só mensagem · 24 horas", variant: "soft-accent" }}
              />
              <ChannelCard
                eyebrow="Emergência"
                title="WhatsApp do Plantão 24h"
                number="(93) 99107-1980"
                purpose="Só para urgência de tomografia e raio-x, a qualquer hora, todo dia. Se não for urgência, use o WhatsApp da Recepção."
                cta="Chamar o plantão"
                href={"https://wa.me/" + PLANTAO_WHATS + "?text=" + encodeURIComponent("Olá! Preciso do plantão da Maxxi Saúde.")}
                icon="heart-pulse"
                color="blue"
                tag={{ label: "Só urgência", variant: "warning" }}
              />
            </div>

            {/* Guidance banner */}
            <div style={{
              marginTop: 24, padding: "20px 24px", borderRadius: 16,
              background: "var(--ms-blue-50)", border: "1px solid var(--ms-blue-100)",
              display: "flex", alignItems: "flex-start", gap: 14,
            }}>
              <IconCircle name="info" color="blue" size={40} stroke={1.6}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: "var(--fg-strong)", marginBottom: 4 }}>
                  Quer falar por voz? Ligue no telefone fixo, ou peça no WhatsApp da Recepção que a gente liga para você.
                </div>
                <div style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.5 }}>
                  Os números do atendimento automático e do plantão só recebem mensagem. Ligação nesses dois não toca.
                </div>
              </div>
            </div>

            <style>{`@media (max-width: 720px) { #channels-grid { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        </section>

        {/* Specialty WhatsApp numbers */}
        <section className="section-pad-sm">
          <div className="container">
            <SectionTitle
              eyebrow="Especialidades"
              title="Procurando o contato de uma especialidade?"
              kicker="Algumas equipes têm WhatsApp próprio: você fala direto com quem vai te atender. As outras especialidades a Recepção marca para você."
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }} id="spec-grid">
              {SPECIALTIES.filter(s => s.directWhats).map(s => (
                <a key={s.slug}
                   href={"https://wa.me/" + s.whatsapp + "?text=" + encodeURIComponent("Olá! Vim pelo site da Maxxi Saúde — gostaria de agendar " + s.name + ".")}
                   target="_blank" rel="noopener"
                   className="lift no-link"
                   style={{
                     display: "flex", alignItems: "center", gap: 16,
                     background: "#fff", border: "1px solid var(--border-subtle)",
                     borderRadius: 14, padding: 18,
                     textDecoration: "none", color: "inherit",
                     boxShadow: "var(--sh-xs)",
                   }}>
                  <IconCircle name={s.icon} color="accent" size={44}/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "var(--fg-strong)" }}>{s.name}</div>
                    {s.doctor && <div style={{ fontSize: 13, color: "var(--fg-muted)", marginTop: 1 }}>{s.doctor.name}</div>}
                    <div style={{ fontSize: 13, color: "var(--ms-blue-700)", fontWeight: 700, marginTop: 4 }}>{formatWhats(s.whatsapp)}</div>
                  </div>
                  <Icon name="whatsapp" size={20} style={{ color: "var(--site-accent-600)" }}/>
                </a>
              ))}
            </div>

            <div style={{
              marginTop: 20, padding: "16px 20px", borderRadius: 14,
              background: "#fff", border: "1px dashed var(--border-strong)",
              display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
            }}>
              <IconCircle name="stethoscope" color="blue" size={40} stroke={1.6}/>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ fontSize: 14.5, fontWeight: 800, color: "var(--fg-strong)" }}>Não está na lista?</div>
                <div style={{ fontSize: 13.5, color: "var(--fg-muted)", lineHeight: 1.5 }}>
                  Demais especialidades (Clínico Geral, Neurologia, Reumatologia, Pneumologia, Psicologia) são agendadas pela Recepção.
                </div>
              </div>
              <Button variant="primary" size="sm" icon="whatsapp"
                      href={"https://wa.me/" + RECEPCAO_WHATS + "?text=" + encodeURIComponent("Olá! Quero marcar uma consulta.")}
                      target="_blank">Falar com a Recepção</Button>
            </div>
            <style>{`@media (max-width: 720px) { #spec-grid { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        </section>

        {/* Address + hours + map */}
        <section className="section-pad-sm">
          <div className="container">
            <SectionTitle eyebrow="Onde estamos" title="No centro de Altamira, esperando por você." kicker="Acesso fácil, estacionamento próximo e estrutura acessível."/>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 24, alignItems: "stretch" }} id="map-grid">
              <MapPlaceholder/>

              <Card padding={28} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", fontWeight: 700, marginBottom: 6 }}>Endereço</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "var(--fg-strong)", lineHeight: 1.4 }}>Tv. Coronel Tancredo, 45<br/>Centro · Altamira / PA</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", fontWeight: 700, marginBottom: 6 }}>Horários</div>
                  <div style={{ fontSize: 15, color: "var(--fg-default)", lineHeight: 1.6 }}>
                    Seg–Sex · 7h às 19h<br/>
                    Sábado · 7h às 13h<br/>
                    <strong style={{ color: "var(--site-accent-700)" }}>Plantão 24h</strong> · tomografia &amp; raio-x
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", fontWeight: 700, marginBottom: 6 }}>Convênios</div>
                  <a href="/convenios/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: "var(--ms-blue-700)", textDecoration: "none" }}>
                    Ver lista de convênios aceitos <Icon name="arrow-right" size={14}/>
                  </a>
                </div>
                <Button variant="primary" icon="whatsapp" size="md" fullWidth
                        href={"https://wa.me/" + RECEPCAO_WHATS + "?text=" + encodeURIComponent("Olá! Vim pelo site da Maxxi Saúde.")}
                        target="_blank">Falar com a Recepção</Button>
              </Card>
            </div>
            <style>{`@media (max-width: 920px) { #map-grid { grid-template-columns: 1fr !important; } }`}</style>
          </div>
        </section>
      </div>
      <TweaksPanel/>
    </PageShell>
  );
}

function ChannelCard({ eyebrow, title, number, purpose, cta, href, icon, color, tag }) {
  const isWhats = !href.startsWith("tel:");
  return (
    <Card hoverable style={{ padding: 26, display: "flex", flexDirection: "column", gap: 16, minHeight: 260 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        {icon === "whatsapp"
          ? <WhatsAppMark size={56} alt="WhatsApp"/>
          : <IconCircle name={icon} color={color} size={56} stroke={1.6}/>}
        {tag && <Badge variant={tag.variant}>{tag.label}</Badge>}
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", fontWeight: 800, marginBottom: 4 }}>{eyebrow}</div>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.01em", margin: "0 0 6px" }}>{title}</h3>
        <a href={href} target={isWhats ? "_blank" : undefined} rel={isWhats ? "noopener" : undefined}
           style={{ fontSize: 18, fontWeight: 800, color: "var(--ms-blue-700)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
          {isWhats
            ? <WhatsAppMark size={20}/>
            : <Icon name="phone" size={18} style={{ color: "var(--site-accent-600)" }}/>}
          {number}
        </a>
      </div>
      <p style={{ fontSize: 14.5, color: "var(--fg-muted)", lineHeight: 1.55, margin: 0, flex: 1 }}>{purpose}</p>
      <Button
        variant={isWhats ? "primary" : "secondary"}
        icon={isWhats ? "whatsapp" : "phone"}
        size="md"
        fullWidth
        href={href}
        target={isWhats ? "_blank" : undefined}>
        {cta}
      </Button>
    </Card>
  );
}

function MapPlaceholder() {
  return (
    <div style={{
      position: "relative",
      borderRadius: 20,
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--sh-sm)",
      minHeight: 380,
      background: "linear-gradient(135deg, #eaf3ee 0%, #d6e4ed 100%)",
    }}>
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="#c4d3dc" strokeWidth="2" fill="none">
          <path d="M0 80 L600 110"/>
          <path d="M0 180 L600 220"/>
          <path d="M0 290 L600 320"/>
          <path d="M120 0 L150 400"/>
          <path d="M280 0 L310 400"/>
          <path d="M450 0 L480 400"/>
        </g>
        <path d="M-20 250 Q 150 220 280 280 T 620 240 L 620 320 L -20 340 Z" fill="#aac6d7" opacity="0.55"/>
        {[[60,30,80,40],[200,30,60,60],[340,30,80,55],[510,40,80,40],
          [60,130,80,40],[210,140,70,30],[340,140,80,30],[510,130,80,40],
          [60,240,80,30],[510,240,80,30]].map(([x,y,w,h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#d6e0d6" rx="3"/>
          ))}
      </svg>
      <div style={{
        position: "absolute", left: "52%", top: "44%", transform: "translate(-50%, -100%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <div style={{
          background: "#fff", borderRadius: 12, padding: "10px 14px",
          boxShadow: "var(--sh-md)", display: "flex", alignItems: "center", gap: 10,
          border: "1px solid var(--border-subtle)",
        }}>
          <img src="/assets/logo-mark.png" alt="" style={{ width: 28, height: 28 }}/>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, color: "var(--fg-strong)", lineHeight: 1.1 }}>Maxxi Saúde</div>
            <div style={{ fontSize: 11, color: "var(--fg-muted)" }}>Centro · Altamira</div>
          </div>
        </div>
        <div style={{
          width: 0, height: 0,
          borderLeft: "10px solid transparent", borderRight: "10px solid transparent",
          borderTop: "12px solid #fff",
          filter: "drop-shadow(0 4px 6px rgba(20,52,71,0.18))",
        }}/>
        <div style={{
          width: 16, height: 16, borderRadius: "50%",
          background: "var(--site-accent-500)", border: "3px solid #fff",
          boxShadow: "0 4px 12px rgba(126,195,101,0.5)",
        }}/>
      </div>
      <a href={MAPS_LINK} target="_blank" rel="noopener"
         style={{ position: "absolute", left: 16, bottom: 16, background: "#fff",
                  padding: "14px 20px", borderRadius: 999, fontSize: 15, fontWeight: 800,
                  color: "var(--ms-blue-700)", textDecoration: "none", minHeight: 48,
                  display: "inline-flex", alignItems: "center", gap: 8,
                  boxShadow: "var(--sh-md)" }}>
        <Icon name="map-pin" size={18} style={{ color: "var(--site-accent-600)" }}/>
        Ver no mapa como chegar
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContatoPage/>);
