import { SectionReveal, HoverCard } from "./ui/motion";

const benefits = [
  {
    icon: "🎯",
    title: "Aumento de ticket médio",
    description: "Aumente o valor por atendimento com recomendações complementares de alto potencial.",
  },
  {
    icon: "⚡",
    title: "Sugestões instantâneas",
    description: "Sugestões imediatas no balcão sem impactar a velocidade da operação.",
  },
  {
    icon: "👥",
    title: "Apoia atendentes inexperientes",
    description: "Padronize abordagem comercial e reduza insegurança de novos colaboradores.",
  },
  {
    icon: "📚",
    title: "Base farmacêutica validada",
    description: "Base técnica robusta para recomendações mais seguras e confiáveis.",
  },
  {
    icon: "📊",
    title: "Dashboard de performance",
    description: "Acompanhe métricas de recomendação e ticket médio em tempo real.",
  },
  {
    icon: "🔒",
    title: "Segurança clínica",
    description: "Sugestões orientadas por lógica farmacêutica para evitar interações indesejadas.",
  },
];

export default function Benefits() {
  return (
    <SectionReveal style={{ background: "#080C0A", padding: "96px 24px" }}>
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
          <span>■</span> BENEFÍCIOS
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
          Benefícios que viram{" "}
          <span style={{ color: "#1DB954" }}>resultado no caixa</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
          className="qi-benefits-grid"
        >
          {benefits.map((item, index) => (
            <HoverCard
              key={item.title}
              delay={index * 0.07}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                background: "#161E19",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: "20px 20px",
                transition: "border-color 0.2s",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(29,185,84,0.1)",
                  border: "1px solid rgba(29,185,84,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.88)",
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .qi-benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionReveal>
  );
}
