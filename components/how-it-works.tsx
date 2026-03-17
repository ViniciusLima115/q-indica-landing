import { SectionReveal, HoverCard } from "./ui/motion";

const steps = [
  {
    number: "01",
    title: "Digite o medicamento",
    description: "O atendente informa o medicamento vendido no sistema.",
  },
  {
    number: "02",
    title: "O sistema sugere produtos complementares",
    description: "A IA apresenta opções adicionais com relevância farmacêutica.",
  },
  {
    number: "03",
    title: "Aumente o ticket médio da venda",
    description: "A equipe recomenda com segurança e eleva o valor por atendimento.",
  },
];

const features = [
  "Recomendações em tempo real",
  "Base farmacêutica validada",
  "Dashboard de performance",
  "Suporte multiplataforma",
];

export default function HowItWorks() {
  return (
    <SectionReveal id="how-it-works" style={{ background: "#080C0A", padding: "96px 24px" }}>
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
          <span>■</span> COMO FUNCIONA
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
          Em três passos, o Q-Indica transforma cada atendimento em{" "}
          <span style={{ color: "#1DB954" }}>oportunidade de cross-sell.</span>
        </h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}
          className="qi-hiw-grid"
        >
          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((step, index) => (
              <HoverCard
                key={step.title}
                delay={index * 0.1}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "24px 0",
                  borderBottom: index < steps.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(29,185,84,0.10)",
                    border: "1px solid rgba(29,185,84,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sora), sans-serif",
                    fontWeight: 800,
                    fontSize: 13,
                    color: "#1DB954",
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.88)",
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </HoverCard>
            ))}
          </div>

          {/* Dashboard visual */}
          <div
            style={{
              background: "#161E19",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
            }}
          >
            {/* macOS-style topbar */}
            <div
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#fe5f55", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbf2e", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#2bc840", display: "inline-block" }} />
              <span style={{ flex: 1, textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.4)", marginLeft: -34 }}>
                Q-Indica — Dashboard
              </span>
            </div>

            {/* Metrics grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.04)", margin: 16, borderRadius: 10, overflow: "hidden" }}>
              {[
                { label: "Recomendações", value: "1.248" },
                { label: "Aceitação", value: "72%" },
                { label: "Ticket médio", value: "+18%" },
                { label: "Produtos", value: "10k+" },
              ].map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: "#0F1612",
                    padding: "14px 16px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: 20, fontWeight: 800, color: "#1DB954", fontFamily: "var(--font-sora)", margin: "0 0 4px", lineHeight: 1 }}>
                    {m.value}
                  </p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: 0 }}>{m.label}</p>
                </div>
              ))}
            </div>

            {/* Feature list */}
            <div style={{ padding: "4px 16px 20px" }}>
              {features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#1DB954",
                        display: "inline-block",
                      }}
                    />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{f}</span>
                  </div>
                  <span
                    style={{
                      background: "rgba(29,185,84,0.12)",
                      color: "#1DB954",
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: 6,
                    }}
                  >
                    ✓ Ativo
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .qi-hiw-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </SectionReveal>
  );
}
