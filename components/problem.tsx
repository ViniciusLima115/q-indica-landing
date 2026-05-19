import { SectionReveal, HoverCard } from "./ui/motion";

const problems = [
  {
    emoji: "🧠",
    title: "O atendente depende só da memória",
    description: "Na correria do balcão, ele esquece o que poderia oferecer junto — não porque não quer, mas porque não lembrou na hora.",
  },
  {
    emoji: "📉",
    title: "A venda termina no produto pedido",
    description: "O cliente pede um item e o atendente entrega apenas aquilo. A cesta fica pequena e o ticket médio fica limitado.",
  },
  {
    emoji: "🔄",
    title: "Cada vendedor atende de um jeito",
    description: "Sem um guia de apoio, o padrão de recomendação varia entre experientes e iniciantes, e a farmácia perde consistência.",
  },
];

export default function Problem() {
  return (
    <SectionReveal style={{ background: "#080C0A", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        {/* Eyebrow */}
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
          <span style={{ color: "#22C55E" }}>■</span> O PROBLEMA
        </p>

        <h2
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "rgba(255,255,255,0.88)",
            maxWidth: 600,
            marginBottom: 48,
            lineHeight: 1.15,
          }}
        >
          Sua farmácia pode estar perdendo vendas{" "}
          <span style={{ color: "#1DB954" }}>todos os dias sem perceber.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {problems.map((item, index) => (
            <HoverCard
              key={item.title}
              delay={index * 0.1}
              style={{
                background: "#161E19",
                border: "1px solid rgba(255,255,255,0.08)",
                borderTop: "2px solid #EF4444",
                borderRadius: 16,
                padding: "28px 24px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <span style={{ fontSize: 28, display: "block", marginBottom: 16 }}>{item.emoji}</span>
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
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                {item.description}
              </p>
            </HoverCard>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
