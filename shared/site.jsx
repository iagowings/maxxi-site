/* global React, Icon, Button, Badge, IconCircle */
const { useState: useStateSC, useEffect: useEffectSC, useRef: useRefSC } = React;

/* =============================================================
   Header — fixed top bar shared by every page
   ============================================================= */
function Header({ active = "home" }) {
  const [scrolled, setScrolled] = useStateSC(false);
  const [open, setOpen] = useStateSC(false);
  useEffectSC(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Clean, absolute URLs that mirror the live maxxisaude.com link structure.
  const items = [
    { id: "especialidades", href: "/especialidades/", label: "Especialidades" },
    { id: "exames",         href: "/exames/",         label: "Exames" },
    { id: "tecnologia",     href: "/tomografia-128-canais/", label: "Tecnologia" },
    { id: "convenios",      href: "/convenios/",      label: "Convênios" },
    { id: "resultados",     href: "/resultados/",     label: "Resultados online" },
    { id: "contato",        href: "/contato/",        label: "Contato" },
  ];

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.96)" : "#fff",
        backdropFilter: scrolled ? "saturate(180%) blur(8px)" : "none",
        borderBottom: "1px solid " + (scrolled ? "var(--border-subtle)" : "transparent"),
        boxShadow: scrolled ? "var(--sh-xs)" : "none",
        transition: "border-color 220ms, box-shadow 220ms, background 220ms",
      }}>
      <div className="container" style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/assets/logo-primary.png" alt="Maxxi Saúde" style={{ height: 40 }}/>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desktop">
          {items.map(l => (
            <a key={l.id} href={l.href}
               style={{
                 fontSize: 14, fontWeight: 600,
                 color: active === l.id ? "var(--ms-blue-700)" : "var(--fg-default)",
                 textDecoration: "none",
                 position: "relative",
                 paddingBottom: 4,
                 borderBottom: active === l.id ? "2px solid var(--site-accent-500)" : "2px solid transparent",
               }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="header-actions">
          <a href={"https://wa.me/" + RECEPCAO_WHATS} target="_blank" rel="noopener"
             className="header-phone"
             style={{ fontSize: 13, fontWeight: 700, color: "var(--ms-blue-700)",
                      display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
            <WhatsAppMark size={18}/> (93) 99180-1155
          </a>
          <Button variant="primary" size="sm" icon="calendar"
                  href={"https://wa.me/" + GENERAL_WHATS + "?text=" + encodeURIComponent("Olá! Gostaria de agendar.")}
                  target="_blank">Agendar</Button>
          <button onClick={() => setOpen(o => !o)} className="nav-mobile-toggle"
                  style={{ display: "none", background: "transparent", border: 0, color: "var(--ms-blue-700)", cursor: "pointer", padding: 8 }}
                  aria-label="Menu">
            <Icon name={open ? "x" : "menu"} size={22}/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-drawer" style={{
          display: "none",
          background: "#fff", borderTop: "1px solid var(--border-subtle)",
          padding: "16px 20px 24px", boxShadow: "var(--sh-md)",
        }}>
          {items.map(l => (
            <a key={l.id} href={l.href} onClick={() => setOpen(false)}
               style={{ display: "block", padding: "12px 0", borderBottom: "1px solid var(--border-subtle)",
                        fontSize: 16, fontWeight: 600, color: "var(--fg-default)", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 920px) {
          .nav-desktop { display: none !important; }
          .header-phone { display: none !important; }
          .nav-mobile-toggle { display: inline-flex !important; align-items: center; justify-content: center; }
          .nav-mobile-drawer { display: block !important; }
        }
      `}</style>
    </header>
  );
}

/* =============================================================
   Footer — site-wide
   ============================================================= */
function Footer() {
  return (
    <footer style={{
      background: "var(--ms-blue-800)",
      color: "rgba(255,255,255,0.86)",
      padding: "72px 0 32px",
      marginTop: 96,
    }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          {/* width/height explicitos + maxWidth: o PNG tem 1652px de largura e, so com
              height:80, renderizava 418px — mais largo que a tela e empurrava a pagina toda. */}
          <img src="/assets/logo-10-anos.png" alt="Maxxi Saúde — 10 anos"
               width="418" height="80"
               style={{ width: 418, height: "auto", maxWidth: "100%", marginBottom: 20, filter: "brightness(0) invert(1)" }}/>
          <p style={{ color: "rgba(255,255,255,0.74)", fontSize: 14, lineHeight: 1.6, maxWidth: 320 }}>
            Referência em diagnóstico por imagem e análises clínicas em Altamira / PA.
            Atendimento humanizado, há mais de 10 anos cuidando do Xingu.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {SOCIAL.instagram && (
              <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram" style={socialIconStyle()}><Icon name="instagram" size={18}/></a>
            )}
            {SOCIAL.facebook && (
              <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook" style={socialIconStyle()}><Icon name="facebook" size={18}/></a>
            )}
            <a href={"https://wa.me/" + GENERAL_WHATS} target="_blank" rel="noopener" aria-label="WhatsApp"
               style={{ width: 38, height: 38, display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
              <WhatsAppMark size={38} alt="WhatsApp"/>
            </a>
          </div>
        </div>

        <div>
          <h6 style={{ color: "#fff", fontSize: 13, letterSpacing: "0.12em", marginBottom: 16 }}>Navegação</h6>
          <FooterLinks items={[
            ["/", "Início"],
            ["/especialidades/", "Especialidades"],
            ["/exames/", "Exames"],
            ["/tomografia-128-canais/", "Tomografia 128 canais"],
            ["/sobre/", "A clínica"],
          ]}/>
        </div>

        <div>
          <h6 style={{ color: "#fff", fontSize: 13, letterSpacing: "0.12em", marginBottom: 16 }}>Para você</h6>
          <FooterLinks items={[
            ["/resultados/", "Resultados online"],
            ["/agendar-exame/", "Agendar exame"],
            ["/faq/", "Dúvidas frequentes"],
            ["/contato/", "Contato"],
            ["/convenios/", "Convênios"],
          ]}/>
        </div>

        <div>
          <h6 style={{ color: "#fff", fontSize: 13, letterSpacing: "0.12em", marginBottom: 16 }}>Atendimento</h6>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 14, margin: "0 0 8px" }}>
            <Icon name="map-pin" size={14} style={{ verticalAlign: "-2px", marginRight: 6 }}/>
            Tv. Coronel Tancredo, 45 &middot; Centro &middot; Altamira / PA
          </p>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 14, margin: "0 0 8px" }}>
            <Icon name="clock" size={14} style={{ verticalAlign: "-2px", marginRight: 6 }}/>
            Seg–Sáb · 7h às 19h
          </p>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 14, margin: "0 0 8px" }}>
            <Icon name="whatsapp" size={14} style={{ verticalAlign: "-2px", marginRight: 6 }}/>
            (93) 99180-5990
          </p>
          <div style={{ marginTop: 14 }}>
            <Badge variant="solid-accent" icon="clock">Plantão 24h tomografia &amp; raio-x</Badge>
          </div>
        </div>
      </div>

      <div className="container" style={{
        marginTop: 56, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.10)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, color: "rgba(255,255,255,0.55)", flexWrap: "wrap", gap: 16,
      }}>
        <div>© {new Date().getFullYear()} Maxxi Saúde · Diagnóstico por Imagem e Análises Clínicas · CNPJ 11.503.226/0001-21</div>
        <div>Responsável técnico: Dr. Anísio Fernando Chaves · Médico Radiologista · CRM 9422 · R.Q.E. 6391</div>
      </div>

      <div className="container" style={{
        marginTop: 16, display: "flex", gap: 18, flexWrap: "wrap",
        fontSize: 12, color: "rgba(255,255,255,0.55)",
      }}>
        {[
          ["/politica-de-privacidade/", "Política de Privacidade"],
          ["/politica-de-cookies-br/", "Política de Cookies"],
          ["/termos-e-condicoes/", "Termos e Condições"],
        ].map(([href, label]) => (
          <a key={href} href={href} style={{ color: "rgba(255,255,255,0.72)", textDecoration: "underline" }}>{label}</a>
        ))}
        <span style={{ flexBasis: "100%", lineHeight: 1.5, marginTop: 8, color: "rgba(255,255,255,0.45)" }}>
          O conteúdo deste site é informativo e não substitui consulta, diagnóstico ou
          tratamento médico. Exames são realizados mediante solicitação médica e os
          resultados variam de paciente para paciente.
        </span>
      </div>

      <style>{`
        @media (max-width: 920px) {
          footer .container { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          footer .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterLinks({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map(([href, label]) => (
        <li key={href}>
          <a href={href} style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none", fontSize: 14, transition: "color var(--dur-fast)" }}
             onMouseEnter={e => e.currentTarget.style.color = "#fff"}
             onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.78)"}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function socialIconStyle(bg) {
  return {
    width: 38, height: 38, borderRadius: "50%",
    background: bg || "rgba(255,255,255,0.08)",
    color: "#fff",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    textDecoration: "none",
    transition: "background var(--dur-fast)",
  };
}

/* =============================================================
   Floating WhatsApp bubble — bottom-right
   Click expands a quick chooser of specialty numbers.
   ============================================================= */
function WhatsAppBubble() {
  const [open, setOpen] = useStateSC(false);
  const popRef = useRefSC(null);
  useEffectSC(() => {
    if (!open) return;
    const onDown = (e) => { if (popRef.current && !popRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Three official Maxxi Saúde WhatsApp channels — same shown on /contato/.
  const quick = [
    {
      label: "Recepção",
      hint: "Agendar, tirar dúvidas com a equipe e pedir ligação",
      whats: RECEPCAO_WHATS,
      icon: "stethoscope",
      msg: "Olá! Vim pelo site da Maxxi Saúde.",
    },
    {
      label: "Atendimento por IA",
      hint: "Dúvidas gerais 24h, respostas na hora — só mensagens",
      whats: IA_WHATS,
      icon: "sparkle",
      msg: "Olá! Tenho uma dúvida sobre a Maxxi Saúde.",
    },
    {
      label: "Plantão 24h",
      hint: "Urgência de tomografia e raio-x — só emergências",
      whats: PLANTAO_WHATS,
      icon: "heart-pulse",
      msg: "Olá! Preciso do plantão da Maxxi Saúde.",
    },
  ];

  return (
    <>
      {/* Popover */}
      {open && (
        <div ref={popRef} style={{
          position: "fixed", right: 24, bottom: 96, zIndex: 70,
          width: 340, maxWidth: "calc(100vw - 48px)",
          background: "#fff", borderRadius: 20, boxShadow: "var(--sh-xl)",
          border: "1px solid var(--border-subtle)",
          overflow: "hidden",
          animation: "waPop 220ms var(--ease-out)",
        }}>
          <div style={{ background: "#075E54", color: "#fff", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/assets/logo-mark.png" alt="" style={{ width: 32, height: 32 }}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Maxxi Saúde</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>Estamos esperando por você 👋</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fechar"
                    style={{ background: "transparent", color: "#fff", border: 0, cursor: "pointer" }}>
              <Icon name="x" size={20}/>
            </button>
          </div>
          <div style={{ padding: "16px 16px 20px", background: "#ECE5DD" }}>
            <p style={{ fontSize: 13, color: "#3a3a3a", margin: "0 0 12px", lineHeight: 1.45 }}>
              Escolha o canal certo. Para falar por voz, use o telefone fixo ou a Recepção.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {quick.map(q => (
                <a key={q.label} href={"https://wa.me/" + q.whats + "?text=" + encodeURIComponent(q.msg)}
                   target="_blank" rel="noopener"
                   style={{
                     display: "flex", alignItems: "center", gap: 12,
                     background: "#fff", padding: "12px 14px", borderRadius: 12,
                     textDecoration: "none", color: "var(--fg-strong)",
                     border: "1px solid rgba(0,0,0,0.05)",
                     boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                   }}>
                  <IconCircle name={q.icon} color="accent" size={36} stroke={2}/>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: "block", fontSize: 14, fontWeight: 800 }}>{q.label}</span>
                    <span style={{ display: "block", fontSize: 11.5, color: "var(--fg-muted)", marginTop: 2, lineHeight: 1.35 }}>{q.hint}</span>
                  </span>
                  <Icon name="chevron-right" size={16} className="" style={{ color: "var(--fg-muted)" }}/>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bubble */}
      <button
        aria-label="Falar no WhatsApp"
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed", right: 24, bottom: 24, zIndex: 70,
          width: 64, height: 64, padding: 0,
          background: "transparent", border: 0, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 140ms",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
        <WhatsAppMark size={64} alt="Falar no WhatsApp" style={{ filter: "drop-shadow(0 12px 28px rgba(37,211,102,0.45))" }}/>
      </button>
      <style>{`@keyframes waPop { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </>
  );
}

/* =============================================================
   Page shell — Header + main + Footer + WhatsApp bubble
   Also handles reveal-on-scroll for .reveal elements.
   ============================================================= */
function PageShell({ active, children, hideBubble }) {
  useEffectSC(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Set top padding so content clears the fixed header
  return (
    <>
      <Header active={active}/>
      <main style={{ paddingTop: 76 }}>
        <AcessibilidadeBar/>
        {children}
      </main>
      <Footer/>
      {!hideBubble && <WhatsAppBubble/>}
    </>
  );
}

Object.assign(window, { Header, Footer, WhatsAppBubble, PageShell });
