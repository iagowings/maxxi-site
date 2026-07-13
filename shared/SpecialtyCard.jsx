/* global React, Icon, Button, Badge, IconCircle, DoctorAvatar, SPECIALTIES, CATEGORIES, useTweaks */
const { useState: useStateSP, useMemo: useMemoSP } = React;

/* =============================================================
   SpecialtyCard — renders in one of three layouts based on tweaks.
   Layouts:
     classic  → icon + name + blurb + WhatsApp button (with doctor strip if present)
     portrait → tall card, large avatar/icon area at top, info below
     minimal  → flat, icon + name only, hover reveals action
   ============================================================= */
function SpecialtyCard({ spec, style: layout = "classic" }) {
  const waHref = "https://wa.me/" + spec.whatsapp + "?text=" + encodeURIComponent(
    `Olá! Vim pelo site da Maxxi Saúde. Gostaria de agendar ${spec.name}` +
    (spec.doctor ? ` com ${spec.doctor.name}.` : ".")
  );

  if (layout === "minimal") return <MinimalCard spec={spec} waHref={waHref}/>;
  if (layout === "portrait") return <PortraitCard spec={spec} waHref={waHref}/>;
  return <ClassicCard spec={spec} waHref={waHref}/>;
}

/* ---- Classic layout ---- */
function ClassicCard({ spec, waHref }) {
  return (
    <a href={waHref} target="_blank" rel="noopener" className="lift no-link"
       style={{
         display: "flex", flexDirection: "column",
         background: "var(--bg-card)",
         border: "1px solid var(--border-subtle)",
         borderRadius: 18,
         padding: 22,
         boxShadow: "var(--sh-sm)",
         textDecoration: "none",
         color: "inherit",
         minHeight: 260,
       }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
        <IconCircle name={spec.icon} color="accent" size={48}/>
        {spec.doctor && (
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, color: "var(--fg-muted)", fontWeight: 600 }}>Especialista</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg-strong)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{spec.doctor.name}</div>
          </div>
        )}
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--fg-strong)", margin: "0 0 8px", letterSpacing: "-0.01em" }}>{spec.name}</h3>
      <p className="clamp-2" style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.5, margin: "0 0 18px", flex: 1 }}>
        {spec.blurb}
      </p>
      {spec.schedule && (
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--fg-muted)", marginBottom: 14 }}>
          <Icon name="clock" size={13}/> {spec.schedule}
        </div>
      )}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
        background: "var(--site-accent-50)",
        color: "var(--site-accent-800)",
        padding: "10px 14px", borderRadius: 12,
        fontSize: 13, fontWeight: 700,
      }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <Icon name="whatsapp" size={16}/> Agendar pelo WhatsApp
        </span>
        <Icon name="arrow-right" size={16}/>
      </div>
    </a>
  );
}

/* ---- Portrait layout ---- */
function PortraitCard({ spec, waHref }) {
  // Use accent-toned mini "portrait" surface that contains either a doctor avatar
  // (if known) or a big specialty glyph.
  return (
    <a href={waHref} target="_blank" rel="noopener" className="lift no-link"
       style={{
         display: "flex", flexDirection: "column",
         background: "var(--bg-card)",
         border: "1px solid var(--border-subtle)",
         borderRadius: 20,
         overflow: "hidden",
         boxShadow: "var(--sh-sm)",
         textDecoration: "none", color: "inherit",
         minHeight: 360,
       }}>
      <div style={{
        position: "relative",
        height: 170,
        background: `linear-gradient(135deg, var(--site-accent-200) 0%, var(--site-accent-400) 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Decorative big icon */}
        <div style={{ color: "rgba(255,255,255,0.30)", position: "absolute", right: -18, bottom: -22 }}>
          <Icon name={spec.icon} size={180} stroke={1}/>
        </div>
        {spec.doctor ? (
          <DoctorAvatar name={spec.doctor.name} color={spec.color} size={84}/>
        ) : (
          <div style={{ width: 84, height: 84, borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--site-accent-700)", boxShadow: "var(--sh-md)" }}>
            <Icon name={spec.icon} size={40} stroke={1.6}/>
          </div>
        )}
      </div>
      <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--fg-strong)", margin: "0 0 4px", letterSpacing: "-0.01em" }}>{spec.name}</h3>
        {spec.doctor && (
          <div style={{ fontSize: 13, color: "var(--ms-blue-600)", fontWeight: 600, marginBottom: 8 }}>{spec.doctor.name}</div>
        )}
        <p className="clamp-2" style={{ fontSize: 13.5, color: "var(--fg-muted)", lineHeight: 1.5, margin: "0 0 16px", flex: 1 }}>
          {spec.blurb}
        </p>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          color: "var(--ms-green-700)",
          fontSize: 13, fontWeight: 700,
        }}>
          <Icon name="whatsapp" size={16}/> Agendar pelo WhatsApp
          <Icon name="arrow-right" size={14}/>
        </div>
      </div>
    </a>
  );
}

/* ---- Minimal layout ---- */
function MinimalCard({ spec, waHref }) {
  const [hover, setHover] = useStateSP(false);
  return (
    <a href={waHref} target="_blank" rel="noopener"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: "flex", alignItems: "center", gap: 16,
         background: hover ? "var(--site-accent-50)" : "var(--bg-card)",
         border: "1px solid " + (hover ? "var(--site-accent-200)" : "var(--border-subtle)"),
         borderRadius: 14,
         padding: "16px 18px",
         textDecoration: "none", color: "inherit",
         transition: "background var(--dur-fast), border-color var(--dur-fast), transform var(--dur-fast)",
         transform: hover ? "translateY(-2px)" : "translateY(0)",
         minHeight: 84,
       }}>
      <IconCircle name={spec.icon} color="accent" size={44}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: "var(--fg-strong)", letterSpacing: "-0.01em" }}>{spec.name}</div>
        {spec.doctor ? (
          <div style={{ fontSize: 12, color: "var(--fg-muted)", fontWeight: 600 }}>{spec.doctor.name}</div>
        ) : (
          <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>Agenda pelo WhatsApp</div>
        )}
      </div>
      <div style={{
        width: 36, height: 36, borderRadius: "50%",
        background: hover ? "var(--site-accent-500)" : "var(--site-accent-100)",
        color: hover ? "#fff" : "var(--site-accent-700)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        transition: "background var(--dur-fast), color var(--dur-fast)",
        flex: "0 0 auto",
      }}>
        <Icon name="whatsapp" size={18}/>
      </div>
    </a>
  );
}

/* =============================================================
   SpecialtiesGrid — used on home (limit) and especialidades (all).
   Driven by Tweaks (density + cardStyle).
   ============================================================= */
function SpecialtiesGrid({ limit, filter, search }) {
  const [tweaks] = useTweaks();
  const filtered = useMemoSP(() => {
    let list = SPECIALTIES;
    if (filter && filter !== "todas") list = list.filter(s => s.category === filter);
    if (search) {
      const q = search.toLowerCase().trim();
      if (q.length) {
        list = list.filter(s =>
          s.name.toLowerCase().includes(q) ||
          (s.doctor && s.doctor.name.toLowerCase().includes(q)) ||
          (s.terms || []).some(t => t.toLowerCase().includes(q))
        );
      }
    }
    if (limit) list = list.slice(0, limit);
    return list;
  }, [filter, search, limit]);

  const compact = tweaks.density === "compact";
  const minMobile = compact ? 220 : 260;
  const min = compact ? 240 : 300;

  return (
    <div className="specialty-grid" style={{
      "--grid-gap": compact ? "14px" : "20px",
      "--grid-min": min + "px",
    }}>
      {filtered.map(s => (
        <SpecialtyCard key={s.slug} spec={s} style={tweaks.cardStyle}/>
      ))}
      {filtered.length === 0 && (
        <div style={{
          gridColumn: "1 / -1",
          padding: 32, textAlign: "center",
          background: "var(--ms-neutral-50)", borderRadius: 16,
          color: "var(--fg-muted)",
        }}>Nenhuma especialidade encontrada com esse filtro. Tente outra busca.</div>
      )}
      <style>{`
        @media (max-width: 720px) {
          .specialty-grid { --grid-min: ${minMobile}px !important; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { SpecialtyCard, SpecialtiesGrid });
