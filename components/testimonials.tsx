import { SectionReveal, HoverCard } from "./ui/motion";

const testimonials = [
  {
    name: "Anderson Mendonça",
    role: "Farmácia Poupe Mais",
    embedUrl: "https://www.instagram.com/reel/DOVp6TqDZOE/embed/",
    avatar: "AM",
  },
  {
    name: "Rogério Santos",
    role: "Smart Farma",
    embedUrl: "https://www.instagram.com/reel/DMP2UAGRc-4/embed/",
    avatar: "RS",
  },
  {
    name: "Manuela Carneiro",
    role: "Farma Drogabem",
    quote: "A equipe tem aderido a ferramenta e conseguido agregar todos os dias produtos e suplementos além do que o cliente vem comprar.",
    avatar: "MC",
  },
];

export default function Testimonials() {
  return (
    <SectionReveal className="qi-s" style={{ background: "#0F1612", padding: "96px 24px" }}>
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
          O que clientes{" "}
          <span style={{ color: "#1DB954" }}>dizem sobre o Q-Indica</span>
        </h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}
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
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              {item.quote ? (
                <>
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
                      flex: 1,
                    }}
                  >
                    "{item.quote}"
                  </p>
                </>
              ) : (
                <div style={{ margin: "-28px -24px 20px", borderRadius: "16px 16px 0 0", overflow: "hidden", background: "#000" }}>
                  <iframe
                    src={item.embedUrl}
                    title={`Depoimento de ${item.name}`}
                    loading="lazy"
                    style={{ width: "100%", height: 600, border: "none", display: "block" }}
                  />
                </div>
              )}

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
