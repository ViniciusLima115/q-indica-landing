import { Check } from "lucide-react";
import { SectionReveal } from "./ui/motion";

export default function Solution() {
  return (
    <SectionReveal id="solution" className="qi-s" style={{ background: "#0F1612", padding: "96px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
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
            O Q-Indica não substitui o vendedor.{" "}
            <span style={{ color: "#1DB954" }}>Ele potencializa o vendedor.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>
            Ele não tira o papel do atendente — dá apoio para que ele recomende melhor. Em vez de
            depender apenas da memória ou da iniciativa de cada colaborador, sua farmácia passa a ter
            um guia de apoio para tornar a recomendação mais rápida, prática e padronizada.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Guia de apoio acessível no balcão em tempo real.",
              "Sugestões confiáveis baseadas em correlações farmacêuticas.",
              "Padroniza o atendimento entre experientes e iniciantes.",
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
      </div>
    </SectionReveal>
  );
}
