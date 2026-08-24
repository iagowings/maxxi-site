/* global React */
const { useState } = React;

/* ---------------- Lucide-style icon ---------------- */
function Icon({ name, size = 20, stroke = 1.75, className = "", style = {} }) {
  const paths = {
    "calendar":     <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    "calendar-days": <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></>,
    "map-pin":      <><path d="M12 22s8-4.5 8-12a8 8 0 0 0-16 0c0 7.5 8 12 8 12z"/><circle cx="12" cy="10" r="3"/></>,
    "clock":        <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    "phone":        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.96.72 2.88a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.11-.45c.92.35 1.88.59 2.88.72A2 2 0 0 1 22 16.92z"/>,
    "stethoscope":  <><path d="M6 2v6a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V2"/><path d="M6 2h8"/><path d="M10 12v4a4 4 0 0 0 8 0v-2"/><circle cx="18" cy="10" r="2"/></>,
    "heart-pulse":  <><path d="M22 12h-4l-3 9-6-18-3 9H2"/></>,
    "scan-line":    <><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></>,
    "flask":        <><path d="M9 3v6L2 22h20L15 9V3"/><path d="M7 14h10"/></>,
    "heart":        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>,
    "shield-check": <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
    "user":         <><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></>,
    "users":        <><circle cx="9" cy="8" r="4"/><path d="M16 21a7 7 0 0 0-14 0"/><circle cx="17" cy="6" r="3"/><path d="M22 18a5 5 0 0 0-6-5"/></>,
    "activity":     <path d="M22 12h-4l-3 9-6-18-3 9H2"/>,
    "baby":         <><path d="M9 12h.01M15 12h.01"/><path d="M10 16s.5 1 2 1 2-1 2-1"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></>,
    "brain":        <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></>,
    "bone":         <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5z"/>,
    "smile":        <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></>,
    "tooth":        <path d="M12 5.5C9.5 3 5 3.5 5 8c0 2.5 1 4 1.5 6s.5 6 2 6 2-2 3.5-2 2 2 3.5 2 1-4 1.5-6S19 10.5 19 8c0-4.5-4.5-5-7-2.5z"/>,
    "lungs":        <><path d="M6.081 20c1.612 0 2.919-1.317 2.919-2.94v-5.06c0-.81-.66-1.47-1.47-1.47-1.21 0-2.61.79-3.53 2.04-.79 1.08-1.05 2.31-1 3.43.08 2.21 1.49 4 3.08 4z"/><path d="M17.919 20c-1.612 0-2.919-1.317-2.919-2.94v-5.06c0-.81.66-1.47 1.47-1.47 1.21 0 2.61.79 3.53 2.04.79 1.08 1.05 2.31 1 3.43-.08 2.21-1.49 4-3.08 4z"/><path d="M12 4v9"/></>,
    "ribbon":       <><path d="M12 3c-2 0-3 1-3 3v6l-3 9 6-3 6 3-3-9V6c0-2-1-3-3-3z"/></>,
    "head-side":    <><path d="M16 17H7a4 4 0 0 1-4-4V9a7 7 0 0 1 14 0v0a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2h-2v2zm0 0v4"/></>,
    "sparkle":      <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></>,
    "whatsapp":     <path d="M20.5 3.5A11.5 11.5 0 0 0 4.1 19.5L3 22l2.7-1A11.5 11.5 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4.3-1.2l-.3-.2-2.7.7.7-2.6-.2-.3a8 8 0 1 1 6.8 3.6zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8.9-.3.2-.5.1c-.7-.4-1.4-.8-2-1.4-.5-.5-.8-1.1-1.1-1.5-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4s.1-.3 0-.5l-.7-1.7c-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.4.1-.6.3a2 2 0 0 0-.7 1.5c0 .9.6 1.7.7 1.8.1.2 1.3 2 3.1 2.8.4.2.8.3 1 .4.4.1.8.1 1.1.1.3 0 1.1-.5 1.2-.9.2-.5.2-.9.1-1z"/>,
    "menu":         <><path d="M3 6h18M3 12h18M3 18h18"/></>,
    "x":            <path d="M18 6L6 18M6 6l12 12"/>,
    "check":        <path d="M5 12l5 5L20 7"/>,
    "check-circle": <><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></>,
    "arrow-right":  <><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></>,
    "arrow-up-right": <><path d="M7 17L17 7M8 7h9v9"/></>,
    "chevron-down": <path d="M6 9l6 6 6-6"/>,
    "chevron-right": <path d="M9 6l6 6-6 6"/>,
    "plus":         <><path d="M12 5v14M5 12h14"/></>,
    "minus":        <path d="M5 12h14"/>,
    "instagram":    <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></>,
    "facebook":     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    "search":       <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>,
    "mail":         <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>,
    "external":     <><path d="M14 3h7v7M21 3l-9 9M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></>,
    "shield":       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    "award":        <><circle cx="12" cy="8" r="6"/><path d="M9 13.5L7 22l5-3 5 3-2-8.5"/></>,
    "image":        <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></>,
    "mic":          <><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8"/></>,
    "volume":       <><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></>,
    "stop":         <rect x="6" y="6" width="12" height="12" rx="2"/>,
    "play":         <path d="M6 4l14 8-14 8V4z"/>,
    "lock":         <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
    "file-text":    <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></>,
    "info":         <><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></>,
  };
  return (
    <svg aria-hidden="true" focusable="false"
         className={"icon " + className} width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {paths[name] || null}
    </svg>
  );
}

/* ---------------- Eyebrow ---------------- */
function Eyebrow({ children, color = "accent" }) {
  const c = color === "blue" ? "var(--ms-blue-500)"
          : color === "green" ? "var(--ms-green-700)"
          : "var(--site-accent-700)";
  return <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: c, marginBottom: 14 }}>{children}</div>;
}

/* ---------------- Section title ---------------- */
function SectionTitle({ eyebrow, eyebrowColor, title, kicker, align = "left", maxWidth = 720 }) {
  return (
    <div style={{ textAlign: align, maxWidth, margin: align === "center" ? "0 auto 48px" : "0 0 40px" }}>
      {eyebrow && <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>}
      <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.025em", color: "var(--fg-strong)", lineHeight: 1.08, margin: 0 }}>{title}</h2>
      {kicker && <p style={{ fontSize: 19, color: "var(--fg-muted)", marginTop: 18, lineHeight: 1.55, maxWidth: 640, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{kicker}</p>}
    </div>
  );
}

/* ---------------- Button ---------------- */
function Button({ children, variant = "primary", size = "md", icon, iconAfter, onClick, href, target, style: extra = {}, type, fullWidth }) {
  const base = {
    fontFamily: "inherit", fontWeight: 700, lineHeight: 1.2, borderRadius: 999,
    display: fullWidth ? "flex" : "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer",
    border: 0, textDecoration: "none",
    // Rotulo longo ("Agendar Tomografia Computadorizada") quebra em vez de
    // estourar a largura da tela no celular.
    whiteSpace: "normal", textAlign: "center", maxWidth: "100%",
    transition: "background var(--dur-fast), color var(--dur-fast), transform var(--dur-fast), box-shadow var(--dur-base)",
    width: fullWidth ? "100%" : undefined,
  };
  const sizes = {
    sm: { fontSize: 13, padding: "10px 16px", minHeight: 36 },
    md: { fontSize: 15, padding: "14px 22px", minHeight: 46 },
    lg: { fontSize: 17, padding: "18px 28px", minHeight: 56 },
  };
  const variants = {
    primary:   { background: "var(--site-accent-500)", color: "var(--on-accent)", boxShadow: "var(--site-accent-glow)" },
    secondary: { background: "var(--ms-blue-500)", color: "#fff", boxShadow: "var(--sh-brand-glow)" },
    outline:   { background: "transparent", color: "var(--ms-blue-700)", border: "2px solid var(--ms-blue-200)" },
    ghost:     { background: "transparent", color: "var(--ms-blue-700)" },
    onbrand:   { background: "#fff", color: "var(--ms-blue-700)" },
    whatsapp:  { background: "#25D366", color: "var(--on-green)", boxShadow: "0 8px 24px rgba(37,211,102,0.32)" },
  };
  const style = { ...base, ...sizes[size], ...variants[variant], ...extra };
  const Comp = href ? "a" : "button";
  return (
    <Comp className={"btn btn-" + variant} style={style} href={href} target={target} onClick={onClick} type={Comp === "button" ? (type || "button") : undefined}>
      {icon && <Icon name={icon} size={size === "sm" ? 16 : 18} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={size === "sm" ? 16 : 18} />}
    </Comp>
  );
}

/* ---------------- Icon circle ---------------- */
function IconCircle({ name, color = "accent", size = 48, stroke = 1.75 }) {
  const palette = {
    accent: { bg: "var(--site-accent-100)", fg: "var(--site-accent-700)" },
    green:  { bg: "var(--ms-green-100)",    fg: "var(--ms-green-700)" },
    blue:   { bg: "var(--ms-blue-100)",     fg: "var(--ms-blue-600)" },
    "blue-solid": { bg: "var(--ms-blue-500)", fg: "#fff" },
    "accent-solid": { bg: "var(--site-accent-500)", fg: "var(--on-accent)" },
    white:  { bg: "rgba(255,255,255,0.18)",  fg: "#fff" },
  };
  const { bg, fg } = palette[color] || palette.accent;
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: bg, color: fg,
                  display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
      <Icon name={name} size={Math.round(size * 0.46)} stroke={stroke} />
    </div>
  );
}

/* ---------------- Badge ---------------- */
function Badge({ children, variant = "soft-accent", icon }) {
  const styles = {
    "soft-accent": { background: "var(--site-accent-100)", color: "var(--site-accent-800)" },
    "soft-green":  { background: "var(--ms-green-100)", color: "var(--ms-green-800)" },
    "soft-blue":   { background: "var(--ms-blue-100)",  color: "var(--ms-blue-700)" },
    "solid-green": { background: "var(--ms-green-500)", color: "var(--on-green)" },
    "solid-blue":  { background: "var(--ms-blue-500)",  color: "#fff" },
    "solid-accent":{ background: "var(--site-accent-500)", color: "var(--on-accent)" },
    "outline":     { background: "transparent", color: "var(--ms-blue-700)", border: "1.5px solid var(--ms-blue-200)" },
    "warning":     { background: "#FFF1D6", color: "#8A5A0A" },
    "danger":      { background: "#FDE4E4", color: "#7A2727" },
  };
  return <span style={{ ...styles[variant], display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, padding: "6px 12px", borderRadius: 999, lineHeight: 1, letterSpacing: "0.01em" }}>
    {icon && <Icon name={icon} size={13}/>}
    {children}
  </span>;
}

/* ---------------- Field ---------------- */
function Field({ label, type = "text", placeholder, hint, value, onChange, icon }) {
  const [focused, setFocused] = useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && <span style={{ fontSize: 13, fontWeight: 600, color: "var(--fg-strong)" }}>{label}</span>}
      <div style={{ position: "relative" }}>
        {icon && <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--fg-muted)", pointerEvents: "none" }}><Icon name={icon} size={18}/></div>}
        <input
          type={type}
          placeholder={placeholder}
          value={value ?? ""}
          onChange={e => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%", height: 48, padding: icon ? "0 16px 0 44px" : "0 16px",
            borderRadius: 12, fontFamily: "inherit", fontSize: 15,
            color: "var(--fg-default)", background: "#fff",
            border: "1px solid " + (focused ? "var(--ms-blue-500)" : "var(--border-strong)"),
            boxShadow: focused
              ? "0 0 0 3px var(--ms-blue-100), inset 0 1px 2px rgba(20,52,71,0.04)"
              : "inset 0 1px 2px rgba(20,52,71,0.04)",
            outline: "none",
          }}
        />
      </div>
      {hint && <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>{hint}</span>}
    </label>
  );
}

/* ---------------- Doctor avatar (SVG placeholder) ---------------- */
function DoctorAvatar({ name = "", color = "blue", size = 64 }) {
  // Build initials
  const initials = name
    .replace(/^Dra?\.\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join("")
    .toUpperCase() || "?";
  const palettes = {
    blue:  ["#296586", "#4d85a4"],
    green: ["#559143", "#8ccb71"],
    teal:  ["#1a445f", "#7aa6bd"],
    sand:  ["#a78c5e", "#d8c69a"],
    rose:  ["#a4495e", "#d28799"],
    plum:  ["#6f4a7a", "#a78bb0"],
  };
  const [c1, c2] = palettes[color] || palettes.blue;
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      color: "#fff", fontWeight: 800, fontSize: size * 0.36, letterSpacing: "-0.02em",
      flex: "0 0 auto", boxShadow: "inset 0 -8px 16px rgba(0,0,0,0.10)",
      fontFamily: "var(--font-display)",
    }}>{initials}</div>
  );
}

/* ---------------- Card (basic) ---------------- */
function Card({ children, style = {}, accentBar = false, hoverable = false, padding = 24 }) {
  return (
    <div className={hoverable ? "lift" : ""} style={{
      background: "var(--bg-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 16,
      boxShadow: "var(--sh-sm)",
      padding,
      position: "relative",
      overflow: "hidden",
      ...style,
    }}>
      {accentBar && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "var(--site-accent-500)" }}/>}
      {children}
    </div>
  );
}

/* ---------------- WhatsApp brand mark (PNG) ----------------
   Use this in prominent brand placements (bubble button, footer social,
   header phone link, "Recepção" channel card). Inside colored buttons
   keep `<Icon name="whatsapp"/>` — the SVG adapts to currentColor. */
function WhatsAppMark({ size = 24, className = "", style = {}, alt = "" }) {
  return (
    <img
      src="/assets/whatsapp.png"
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-block", flex: "0 0 auto", ...style }}
    />
  );
}

Object.assign(window, { Icon, Eyebrow, SectionTitle, Button, IconCircle, Badge, Field, DoctorAvatar, Card, WhatsAppMark });
