import { ImageResponse } from "next/og";

export const alt = "Gabriel González — Desarrollo de sistemas de gestión";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#0a0a0a", color: "#f5f5f3", width: "100%", height: "100%", padding: "70px", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "sans-serif" }}>
      <div style={{ fontSize: 28, color: "#a5a5a0", display: "flex" }}>Gabriel González · Córdoba, Argentina</div>
      <div style={{ fontSize: 88, letterSpacing: "-4px", lineHeight: 1.05, display: "flex", maxWidth: 1000 }}>Herramientas para gestionar mejor.</div>
      <div style={{ fontSize: 25, color: "#6e9bff", display: "flex", borderTop: "1px solid #333", paddingTop: 25 }}>Sistemas de gestión · Procesos · Datos</div>
    </div>,
    size,
  );
}
