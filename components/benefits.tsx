import { SectionReveal, HoverCard } from "./ui/motion";

const benefits = [
  {
    icon: "🛒",
    title: "Mais itens na cesta do cliente",
    description: "Cada atendimento pode gerar novas possibilidades de recomendação. O cliente pediu um item, mas pode precisar de outros produtos relacionados.",
  },
  {
    icon: "📈",
    title: "Aumenta o ticket médio",
    description: "Ao sugerir produtos complementares, a farmácia aumenta as chances de vender mais itens na mesma compra.",
  },
  {
    icon: "🤝",
    title: "Ajuda novos funcionários",
    description: "Quem está começando no balcão pode ter dificuldade para lembrar combinações e oportunidades de venda. O Q-Indica encurta esse caminho.",
  },
  {
    icon: "🔄",
    title: "Padroniza a recomendação da equipe",
    description: "Com o Q-Indica, os atendentes passam a ter uma base de apoio, reduzindo diferenças entre vendedores experientes e iniciantes.",
  },
  {
    icon: "📊",
    title: "O gestor acompanha o uso",
    description: "O gestor pode monitorar se a equipe está usando a ferramenta, com uma versão específica para orientar e avaliar os balconistas.",
  },
  {
    icon: "💊",
    title: "Aproveita melhor o mix da farmácia",
    description: "Produtos que muitas vezes ficam esquecidos podem voltar a aparecer no momento certo da venda.",
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
          Sua equipe vende melhor quando{" "}
          <span style={{ color: "#1DB954" }}>sabe o que oferecer</span>
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
