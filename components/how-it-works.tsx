import { SectionReveal, HoverCard } from "./ui/motion";

const steps = [
  {
    number: "01",
    title: "O cliente solicita um produto ou informa uma patologia",
    description: "Ele chega ao balcão pedindo um medicamento, suplemento, ou informando uma condição de saúde.",
  },
  {
    number: "02",
    title: "O atendente pesquisa no Q-Indica",
    description: "Em poucos segundos, ele acessa o guia pelo computador ou celular e pesquisa o produto ou a patologia informada.",
  },
  {
    number: "03",
    title: "O Q-Indica mostra sugestões complementares",
    description: "A ferramenta apresenta possibilidades de produtos complementares que podem fazer sentido para aquele atendimento.",
  },
  {
    number: "04",
    title: "O atendente oferece uma solução mais completa",
    description: "Com mais opções na tela, o atendente ganha segurança para sugerir e aumentar a chance de incluir mais itens na cesta.",
  },
];

export default function HowItWorks() {
  return (
    <SectionReveal id="how-it-works" className="qi-s" style={{ background: "#080C0A", padding: "96px 24px" }}>
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
          Em quatro passos, o Q-Indica transforma cada atendimento em{" "}
          <span style={{ color: "#1DB954" }}>uma oportunidade de venda mais completa.</span>
        </h2>

        <div
          style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 640, margin: "0 auto" }}
        >
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
      </div>
    </SectionReveal>
  );
}
