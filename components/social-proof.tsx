import { SectionReveal } from "./ui/motion";

const metrics = [
  { value: "10k+", label: "produtos analisados" },
  { value: "100k+", label: "correlações de recomendação" },
  { value: "+18%", label: "aumento médio em ticket" },
  { value: "72%", label: "taxa de aceitação" },
];

export default function SocialProof() {
  return (
    <SectionReveal
      style={{
        background: "#0F1612",
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
          className="qi-metrics-grid"
        >
          {metrics.map((m, index) => (
            <div
              key={m.label}
              style={{
                textAlign: "center",
                opacity: 0,
                animation: `fadeUp 0.5s ease forwards ${index * 0.1}s`,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 800,
                  color: "#22C55E",
                  lineHeight: 1,
                  margin: "0 0 10px",
                  letterSpacing: "-2px",
                }}
              >
                {m.value}
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.4 }}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 960px) {
          .qi-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px 24px !important;
          }
        }
        @media (max-width: 480px) {
          .qi-metrics-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </SectionReveal>
  );
}
