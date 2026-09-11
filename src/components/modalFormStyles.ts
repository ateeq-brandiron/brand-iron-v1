import type { CSSProperties } from "react";

export const labelStyle: CSSProperties = {
  display: "block", fontFamily: "var(--font-montserrat), sans-serif", fontSize: 11,
  fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)", marginBottom: 6,
};

export const inputStyle: CSSProperties = {
  width: "100%", padding: "14px 14px", minHeight: 44,
  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 6, color: "#FFFFFF",
  fontFamily: "var(--font-montserrat), sans-serif", fontSize: 13,
  outline: "none", boxSizing: "border-box",
};

export const selectStyle: CSSProperties = {
  ...inputStyle, appearance: "none" as const,
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23d87307' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
  paddingRight: 36,
};

export const optionStyle: CSSProperties = { background: "#FFFFFF", color: "#1a1a1a" };

// Fluid two-up layout: collapses to a single column on its own once a field can't fit
// its minimum width, instead of relying on a fixed breakpoint per modal.
export const fieldPairGrid: CSSProperties = {
  display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 14,
};

export const checkboxGrid: CSSProperties = {
  display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px 16px", marginTop: 10,
};

export const checkboxLabelStyle: CSSProperties = {
  display: "flex", alignItems: "center", gap: 9, cursor: "pointer", minHeight: 32, padding: "4px 0",
};

export const checkboxInputStyle: CSSProperties = {
  width: 18, height: 18, accentColor: "#d87307", cursor: "pointer", flexShrink: 0,
};

export const modalCloseButtonStyle: CSSProperties = {
  position: "absolute", top: 18, right: 18, width: 44, height: 44,
  borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "none",
  color: "rgba(255,255,255,0.70)", fontSize: 20, cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  lineHeight: 1, transition: "background 0.2s",
};
