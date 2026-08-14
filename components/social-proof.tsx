import { SectionReveal } from "./ui/motion";

export default function SocialProof() {
  return (
    <SectionReveal
      className="qi-s"
      style={{
        background: "#0F1612",
        padding: "88px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(29,185,84,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1152, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <p
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: "clamp(64px, 11vw, 128px)",
            fontWeight: 800,
            color: "#22C55E",
            lineHeight: 1,
            margin: "0 0 14px",
            letterSpacing: "-3px",
            textShadow: "0 0 60px rgba(29,185,84,0.35)",
          }}
        >
          100k+
        </p>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", margin: 0 }}>correlações de recomendação mapeadas</p>
      </div>
    </SectionReveal>
  );
}
