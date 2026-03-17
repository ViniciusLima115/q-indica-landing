import { Check, Sparkles } from "lucide-react";
import { SectionReveal } from "./ui/motion";

export default function Solution() {
  return (
    <SectionReveal id="solution" style={{ background: "#0F1612", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}
        className="qi-solution-grid"
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            O Q-Indica transforma cada venda em uma{" "}
            <span style={{ color: "#1DB954" }}>oportunidade.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>
            O sistema sugere produtos complementares automaticamente com base em lógica farmacêutica,
            histórico de correlações e contexto do medicamento informado.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Recomendações em tempo real no balcão.",
              "Sugestões confiáveis orientadas por contexto terapêutico.",
              "Padronização da qualidade de venda em toda a equipe.",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#161E19",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  padding: "12px 16px",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 14,
                }}
              >
                <Check style={{ color: "#1DB954", flexShrink: 0, width: 16, height: 16 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard card */}
        <div
          style={{
            background: "#161E19",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: 24,
            boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              paddingBottom: 16,
              marginBottom: 20,
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-sora)", margin: 0 }}>
              Dashboard de Recomendações
            </p>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                background: "rgba(29,185,84,0.12)",
                border: "1px solid rgba(29,185,84,0.3)",
                borderRadius: 999,
                padding: "4px 10px",
                fontSize: 12,
                color: "#1DB954",
                fontWeight: 600,
              }}
            >
              <Sparkles style={{ width: 12, height: 12 }} />
              Inteligência ativa
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            {[
              { label: "Recomendações geradas", value: "1.248", sub: "nos últimos 30 dias" },
              { label: "Taxa de aceitação", value: "72%", sub: "sugestões aceitas no caixa" },
            ].map((metric) => (
              <div
                key={metric.label}
                style={{
                  background: "#0F1612",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  padding: "14px 16px",
                }}
              >
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 6px" }}>
                  {metric.label}
                </p>
                <p style={{ fontSize: 28, fontWeight: 800, color: "#1DB954", fontFamily: "var(--font-sora)", margin: "0 0 4px", lineHeight: 1 }}>
                  {metric.value}
                </p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: 0 }}>{metric.sub}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "#0F1612",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "14px 16px",
            }}
          >
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 6px" }}>
              Categoria com melhor performance
            </p>
            <p style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-sora)", margin: "0 0 10px" }}>
              Vitaminas e imunidade
            </p>
            <div style={{ height: 6, borderRadius: 999, background: "rgba(255,255,255,0.08)" }}>
              <div style={{ height: "100%", width: "75%", borderRadius: 999, background: "#1DB954" }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .qi-solution-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </SectionReveal>
  );
}
