import { Check } from "lucide-react";
import { ActionLink, HoverCard, SectionReveal } from "./ui/motion";

const plans = [
  {
    name: "Starter",
    audience: "Para farmácias pequenas",
    price: "R$ 299",
    period: "/mês",
    features: ["1 unidade", "Sugestões em tempo real", "Suporte por e-mail"],
    featured: false,
  },
  {
    name: "Pro",
    audience: "Para farmácias em crescimento",
    price: "R$ 699",
    period: "/mês",
    features: ["Até 10 unidades", "Dashboard avançado", "Suporte prioritário"],
    featured: true,
  },
  {
    name: "Enterprise",
    audience: "Para redes de farmácia",
    price: "Sob consulta",
    period: "",
    features: ["Unidades ilimitadas", "Integração dedicada", "Gerente de conta"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <SectionReveal id="pricing" style={{ background: "#080C0A", padding: "96px 24px" }}>
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
          <span>■</span> PLANOS
        </p>
        <h2
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "rgba(255,255,255,0.88)",
            marginBottom: 12,
            lineHeight: 1.15,
          }}
        >
          Planos para cada fase da sua{" "}
          <span style={{ color: "#1DB954" }}>operação</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 56 }}>
          Planos pensados para cada fase da sua operação.
        </p>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}
          className="qi-pricing-grid"
        >
          {plans.map((plan, index) => (
            <div key={plan.name} style={{ position: "relative", paddingTop: plan.featured ? 28 : 0 }}>
              {plan.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#1DB954",
                    color: "#000",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "5px 14px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-sora)",
                    zIndex: 1,
                  }}
                >
                  Mais escolhido
                </div>
              )}
              <HoverCard
                delay={index * 0.08}
                style={{
                  background: "#161E19",
                  border: plan.featured
                    ? "1px solid rgba(29,185,84,0.5)"
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  boxShadow: plan.featured
                    ? "0 0 40px rgba(29,185,84,0.12)"
                    : "none",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.88)",
                    marginBottom: 4,
                    lineHeight: 1,
                  }}
                >
                  {plan.name}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 20 }}>
                  {plan.audience}
                </p>

                <div style={{ marginBottom: 24 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      fontSize: "clamp(28px, 3vw, 36px)",
                      fontWeight: 800,
                      color: plan.featured ? "#1DB954" : "rgba(255,255,255,0.88)",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginLeft: 4 }}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "#0F1612",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 8,
                        padding: "9px 12px",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      <Check style={{ width: 14, height: 14, color: "#1DB954", flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ActionLink
                  href="#final-cta"
                  className="inline-flex w-full items-center justify-center rounded-[10px] py-3 text-sm font-semibold"
                  style={{
                    background: plan.featured ? "#1DB954" : "transparent",
                    color: plan.featured ? "#000" : "rgba(255,255,255,0.75)",
                    border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.15)",
                    textDecoration: "none",
                    padding: "12px 16px",
                    fontSize: 14,
                  }}
                >
                  Escolher plano
                </ActionLink>
              </HoverCard>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .qi-pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 440px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 600px) {
          .qi-pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionReveal>
  );
}
