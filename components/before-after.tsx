import { SectionReveal } from "./ui/motion";

const before = [
  "O atendente depende apenas da memória",
  "A venda termina no produto pedido",
  "Poucos itens são oferecidos",
  "O ticket médio fica limitado",
  "Cada vendedor atende de um jeito",
  "Produtos complementares são esquecidos",
  "Novos funcionários demoram para ganhar confiança",
];

const after = [
  "A equipe tem um guia de apoio no balcão",
  "Mais produtos são lembrados no atendimento",
  "A recomendação fica mais rápida",
  "A venda ganha mais possibilidades",
  "O atendimento fica mais completo e padronizado",
  "A farmácia aproveita melhor o seu mix",
  "O cliente recebe uma solução mais ampla",
];

export default function BeforeAfter() {
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
          <span>■</span> ANTES E DEPOIS
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
          O que muda quando a equipe tem{" "}
          <span style={{ color: "#1DB954" }}>um guia de apoio</span>
        </h2>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          className="qi-beforeafter-grid"
        >
          {/* Before */}
          <div
            style={{
              background: "#161E19",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "2px solid #EF4444",
              borderRadius: 16,
              padding: "28px 24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                ✕
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#EF4444",
                }}
              >
                Sem o Q-Indica
              </span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {before.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: "rgba(239,68,68,0.15)",
                      border: "1px solid rgba(239,68,68,0.25)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 9,
                      color: "#EF4444",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            style={{
              background: "#161E19",
              border: "1px solid rgba(29,185,84,0.25)",
              borderTop: "2px solid #1DB954",
              borderRadius: 16,
              padding: "28px 24px",
              boxShadow: "0 0 32px rgba(29,185,84,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(29,185,84,0.12)",
                  border: "1px solid rgba(29,185,84,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#1DB954",
                }}
              >
                Com o Q-Indica
              </span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {after.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: "rgba(29,185,84,0.15)",
                      border: "1px solid rgba(29,185,84,0.25)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 9,
                      color: "#1DB954",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .qi-beforeafter-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionReveal>
  );
}
