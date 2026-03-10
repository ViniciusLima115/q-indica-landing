import { BadgeCheck, Bolt, BookOpenText, Users } from "lucide-react";
import { HoverCard, SectionReveal } from "./ui/motion";

const benefits = [
  {
    title: "Increase average ticket",
    description: "Aumente o valor por atendimento com recomendações complementares de alto potencial.",
    icon: BadgeCheck,
  },
  {
    title: "Instant suggestions",
    description: "Sugestões imediatas no balcão sem impactar a velocidade da operação.",
    icon: Bolt,
  },
  {
    title: "Helps inexperienced attendants",
    description: "Padronize abordagem comercial e reduza insegurança de novos colaboradores.",
    icon: Users,
  },
  {
    title: "Pharmaceutical knowledge base",
    description: "Base técnica robusta para recomendações mais seguras e confiáveis.",
    icon: BookOpenText,
  },
];

export default function Benefits() {
  return (
    <SectionReveal className="bg-surface-muted/50 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Benefícios que viram resultado no caixa
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <HoverCard
                key={benefit.title}
                delay={index * 0.08}
                className="rounded-2xl border border-stroke bg-white p-6 shadow-lg shadow-[#102a4310]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{benefit.description}</p>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
