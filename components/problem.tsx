import { CircleAlert, ShoppingBasket, TrendingDown } from "lucide-react";
import { HoverCard, SectionReveal } from "./ui/motion";

const problems = [
  {
    title: "Balconistas não sabem o que sugerir",
    description: "Sem suporte inteligente, sugestões adicionais deixam de acontecer no momento da compra.",
    icon: CircleAlert,
  },
  {
    title: "Ticket médio baixo",
    description: "A venda termina no item principal, sem estratégia de recomendação complementar.",
    icon: TrendingDown,
  },
  {
    title: "Vendas limitadas ao produto pedido",
    description: "A farmácia perde margem ao não explorar necessidades relacionadas ao tratamento.",
    icon: ShoppingBasket,
  },
];

export default function Problem() {
  return (
    <SectionReveal className="bg-surface-muted/60 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Farmácias perdem oportunidades de venda todos os dias.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <HoverCard
                key={item.title}
                delay={index * 0.1}
                className="rounded-2xl border border-stroke bg-white p-6 shadow-lg shadow-[#102a4312]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
