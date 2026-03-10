import { Check } from "lucide-react";
import { ActionLink, HoverCard, SectionReveal } from "./ui/motion";

const plans = [
  {
    name: "Starter",
    audience: "Para farmácias pequenas",
    price: "R$ 299/mês",
    features: ["1 unidade", "Sugestões em tempo real", "Suporte por e-mail"],
    featured: false,
  },
  {
    name: "Pro",
    audience: "Para farmácias em crescimento",
    price: "R$ 699/mês",
    features: ["Até 10 unidades", "Dashboard avançado", "Suporte prioritário"],
    featured: true,
  },
  {
    name: "Enterprise",
    audience: "Para redes de farmácia",
    price: "Sob consulta",
    features: ["Unidades ilimitadas", "Integração dedicada", "Gerente de conta"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <SectionReveal id="pricing" className="bg-surface-muted/60 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">Pricing</h2>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">Planos pensados para cada fase da sua operação.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <HoverCard
              key={plan.name}
              delay={index * 0.08}
              className={`rounded-2xl border p-6 shadow-lg ${
                plan.featured
                  ? "border-brand bg-white shadow-brand/20"
                  : "border-stroke bg-white shadow-[#102a4310]"
              }`}
            >
              {plan.featured && (
                <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-strong">
                  Mais escolhido
                </span>
              )}
              <h3 className="mt-4 text-2xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-text-muted">{plan.audience}</p>
              <p className="mt-5 text-3xl font-bold text-foreground">{plan.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-text-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 rounded-lg bg-surface-muted px-3 py-2">
                    <Check className="h-4 w-4 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ActionLink
                href="#final-cta"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold ${
                  plan.featured
                    ? "bg-brand text-white shadow-lg shadow-brand/30"
                    : "border border-stroke bg-white text-foreground"
                }`}
              >
                Escolher plano
              </ActionLink>
            </HoverCard>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
