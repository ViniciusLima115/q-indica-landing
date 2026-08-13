import { SectionReveal, HoverCard } from "./ui/motion";

const audiences = [
  {
    emoji: "🏪",
    title: "Donos de farmácia",
    description: "Que querem aumentar o faturamento e melhorar o desempenho da equipe no balcão.",
  },
  {
    emoji: "📋",
    title: "Gestores de drogaria",
    description: "Que precisam padronizar o atendimento no balcão e reduzir variação entre os atendentes.",
  },
  {
    emoji: "🧑‍💼",
    title: "Balconistas iniciantes",
    description: "Que ainda não dominam todas as possibilidades de recomendação e precisam de apoio na hora da venda.",
  },
  {
    emoji: "⚡",
    title: "Atendentes experientes",
    description: "Que querem ganhar agilidade e não deixar escapar oportunidades de complementar a venda.",
  },
  {
    emoji: "💊",
    title: "Farmacêuticos",
    description: "Que desejam ampliar sugestões, garantir indicações mais completas e apoiar melhor a equipe.",
  },
  {
    emoji: "🏢",
    title: "Redes e farmácias independentes",
    description: "Que querem melhorar a performance comercial sem complicar a rotina do balcão.",
  },
];

export default function ForWho() {
  return (
    <SectionReveal className="qi-s" style={{ background: "#080C0A", padding: "96px 24px" }}>
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
          <span>■</span> PARA QUEM É
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
          O Q-Indica foi criado para farmácias que querem{" "}
          <span style={{ color: "#1DB954" }}>vender mais com indicação inteligente.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="qi-forwhom-grid"
        >
          {audiences.map((item, index) => (
            <HoverCard
              key={item.title}
              delay={index * 0.1}
              style={{
                background: "#161E19",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "28px 24px",
                transition: "border-color 0.2s",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "rgba(29,185,84,0.1)",
                  border: "1px solid rgba(29,185,84,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 20,
                }}
              >
                {item.emoji}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.88)",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: 0 }}>
                {item.description}
              </p>
            </HoverCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .qi-forwhom-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .qi-forwhom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionReveal>
  );
}
