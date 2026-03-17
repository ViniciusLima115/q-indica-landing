import { SectionReveal, HoverCard } from "./ui/motion";

const testimonials = [
  {
    name: "Marina Oliveira",
    role: "Gerente de Farmácia",
    quote: "Depois que começamos a usar o Q-Indica, nosso ticket médio aumentou.",
    avatar: "MO",
  },
  {
    name: "Carlos Menezes",
    role: "Diretor de Rede de Drogarias",
    quote: "Hoje a equipe recomenda com mais segurança e o faturamento subiu mês após mês.",
    avatar: "CM",
  },
  {
    name: "Juliana Costa",
    role: "Farmacêutica Responsável",
    quote: "A ferramenta trouxe padronização e confiança para todo atendimento no balcão.",
    avatar: "JC",
  },
];

export default function Testimonials() {
  return (
    <SectionReveal style={{ background: "#0F1612", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <p
          style={{
            color: "#22C55E",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>■</span> DEPOIMENTOS
        </p>
        <h2
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "rgba(255,255,255,0.88)",
            marginBottom: 48,
            lineHeight: 1.15,
          }}
        >
          O que farmacêuticos{" "}
          <span style={{ color: "#1DB954" }}>dizem sobre o Q-Indica</span>
        </h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
          className="qi-testimonials-grid"
        >
          {testimonials.map((item, index) => (
            <HoverCard
              key={item.name}
              delay={index * 0.1}
              style={{
                background: "#161E19",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "28px 24px",
                position: "relative",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              {/* Decorative quote */}
              <span
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  fontSize: 56,
                  lineHeight: 1,
                  color: "rgba(29,185,84,0.15)",
                  fontFamily: "Georgia, serif",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                "
              </span>

              {/* Stars */}
              <div style={{ marginBottom: 16, display: "flex", gap: 2 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: "#F59E0B", fontSize: 14 }}>★</span>
                ))}
              </div>

              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.80)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                "{item.quote}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(29,185,84,0.15)",
                    border: "1px solid rgba(29,185,84,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#1DB954",
                    fontFamily: "var(--font-sora)",
                    flexShrink: 0,
                  }}
                >
                  {item.avatar}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.88)", margin: "0 0 2px", fontFamily: "var(--font-sora)" }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>{item.role}</p>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .qi-testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionReveal>
  );
}
