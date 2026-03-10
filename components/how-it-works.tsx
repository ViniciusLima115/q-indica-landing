import { ArrowRightLeft, Pill, TrendingUp } from "lucide-react";
import { HoverCard, SectionReveal } from "./ui/motion";

const steps = [
  {
    title: "Digite o medicamento",
    description: "O atendente informa o medicamento vendido no sistema.",
    icon: Pill,
  },
  {
    title: "O sistema sugere produtos complementares",
    description: "A IA apresenta opções adicionais com relevância farmacêutica.",
    icon: ArrowRightLeft,
  },
  {
    title: "Aumente o ticket médio da venda",
    description: "A equipe recomenda com segurança e eleva o valor por atendimento.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <SectionReveal id="how-it-works" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">Como funciona</h2>
        <p className="mt-4 max-w-3xl text-lg text-text-muted">
          Em três passos, o Q-Indica transforma cada atendimento em oportunidade de cross-sell.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <HoverCard
                key={step.title}
                delay={index * 0.1}
                className="relative rounded-2xl border border-stroke bg-white p-6 shadow-lg shadow-[#102a4310]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-strong">Passo {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
