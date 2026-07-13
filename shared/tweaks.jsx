/* global React */
/* =============================================================
   Tweaks panel — cross-page state via localStorage + window event
   Knobs:
     accent     : 'green' | 'blue'   (which brand color is protagonist)
     density    : 'compact' | 'comfortable'  (specialty grid)
     cardStyle  : 'classic' | 'portrait' | 'minimal'  (specialty card layout)
   ============================================================= */
const { useState: useStateTW, useEffect: useEffectTW } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "green",
  "density": "comfortable",
  "cardStyle": "classic"
}/*EDITMODE-END*/;

const TW_LS_KEY = "maxxi-tweaks-v1";

function readTweaks() {
  try {
    const raw = localStorage.getItem(TW_LS_KEY);
    if (!raw) return { ...TWEAK_DEFAULTS };
    return { ...TWEAK_DEFAULTS, ...JSON.parse(raw) };
  } catch (e) { return { ...TWEAK_DEFAULTS }; }
}
function writeTweaks(t) {
  try { localStorage.setItem(TW_LS_KEY, JSON.stringify(t)); } catch (e) {}
}

function applyTweaksToDoc(t) {
  document.documentElement.setAttribute("data-accent", t.accent);
  document.documentElement.setAttribute("data-density", t.density);
  document.documentElement.setAttribute("data-card-style", t.cardStyle);
}

/* Hook every component can use to react to tweaks live. */
function useTweaks() {
  const [t, setT] = useStateTW(() => readTweaks());
  useEffectTW(() => {
    applyTweaksToDoc(t);
    writeTweaks(t);
    window.dispatchEvent(new CustomEvent("maxxi:tweaks", { detail: t }));
  }, [t]);
  useEffectTW(() => {
    const onEvt = (e) => {
      const next = e.detail;
      setT(prev => {
        if (JSON.stringify(prev) === JSON.stringify(next)) return prev;
        return next;
      });
    };
    window.addEventListener("maxxi:tweaks", onEvt);
    // Also listen across tabs
    const onStorage = (e) => { if (e.key === TW_LS_KEY) setT(readTweaks()); };
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("maxxi:tweaks", onEvt);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  const setTweak = (key, val) => setT(prev => ({ ...prev, [key]: val }));
  return [t, setTweak];
}

/* The floating panel itself. Hidden unless edit mode is active. */
function TweaksPanel() {
  const [t, setTweak] = useTweaks();
  const [active, setActive] = useStateTW(false);
  const [dismissed, setDismissed] = useStateTW(false);

  useEffectTW(() => {
    const onMsg = (e) => {
      const data = e?.data;
      if (!data || typeof data !== "object") return;
      if (data.type === "__activate_edit_mode") setActive(true);
      if (data.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", onMsg);
    // Announce availability AFTER listener is wired
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // Persist via parent so reload survives
  useEffectTW(() => {
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: t }, "*"); } catch (e) {}
  }, [t]);

  if (!active) return null;

  const close = () => {
    setActive(false);
    try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch (e) {}
  };

  return (
    <div className="tweaks-z" style={{
      position: "fixed", bottom: 100, right: 24, width: 320, maxWidth: "calc(100vw - 48px)",
      background: "#fff", borderRadius: 18, boxShadow: "var(--sh-xl)",
      border: "1px solid var(--border-subtle)", padding: 18, zIndex: 80,
      fontFamily: "var(--font-sans)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--site-accent-100)", color: "var(--site-accent-700)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="sparkle" size={16}/>
          </div>
          <div style={{ fontWeight: 800, fontSize: 14, color: "var(--fg-strong)" }}>Tweaks</div>
        </div>
        <button onClick={close} aria-label="Fechar"
                style={{ background: "transparent", border: 0, cursor: "pointer", color: "var(--fg-muted)", padding: 4 }}>
          <Icon name="x" size={18}/>
        </button>
      </div>

      <TweakRadio
        label="Cor protagonista"
        value={t.accent}
        onChange={v => setTweak("accent", v)}
        options={[
          { value: "green", label: "Verde", swatch: "var(--ms-green-500)" },
          { value: "blue",  label: "Azul",  swatch: "var(--ms-blue-500)" },
        ]}
      />

      <TweakRadio
        label="Densidade da grade"
        value={t.density}
        onChange={v => setTweak("density", v)}
        options={[
          { value: "comfortable", label: "Confortável" },
          { value: "compact",     label: "Compacta" },
        ]}
      />

      <TweakRadio
        label="Layout do card de especialidade"
        value={t.cardStyle}
        onChange={v => setTweak("cardStyle", v)}
        options={[
          { value: "classic",  label: "Clássico" },
          { value: "portrait", label: "Retrato" },
          { value: "minimal",  label: "Mínimo" },
        ]}
        vertical
      />

      <div style={{ fontSize: 11, color: "var(--fg-muted)", marginTop: 8, lineHeight: 1.4 }}>
        As preferências valem para todas as páginas.
      </div>
    </div>
  );
}

function TweakRadio({ label, value, onChange, options, vertical }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--fg-strong)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
      <div style={{ display: vertical ? "flex" : "grid",
                    flexDirection: vertical ? "column" : undefined,
                    gridTemplateColumns: vertical ? undefined : `repeat(${options.length}, 1fr)`,
                    gap: 6,
                    background: "var(--ms-neutral-50)", padding: 4, borderRadius: 12 }}>
        {options.map(o => {
          const sel = o.value === value;
          return (
            <button key={o.value} onClick={() => onChange(o.value)}
                    style={{
                      border: 0, cursor: "pointer",
                      padding: vertical ? "10px 12px" : "8px 10px",
                      borderRadius: 9,
                      background: sel ? "#fff" : "transparent",
                      boxShadow: sel ? "var(--sh-xs)" : "none",
                      fontSize: 13, fontWeight: 700,
                      color: sel ? "var(--fg-strong)" : "var(--fg-muted)",
                      fontFamily: "inherit",
                      display: "inline-flex", alignItems: "center", gap: 8, justifyContent: vertical ? "flex-start" : "center",
                    }}>
              {o.swatch && <span style={{ width: 14, height: 14, borderRadius: "50%", background: o.swatch, flex: "0 0 auto" }}/>}
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* Boot: apply persisted tweaks BEFORE React mounts so CSS variables land
   on first paint and there is no flash of default styles. */
applyTweaksToDoc(readTweaks());

Object.assign(window, { TweaksPanel, useTweaks, readTweaks });
