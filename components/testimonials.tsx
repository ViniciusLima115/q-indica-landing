import { Quote } from "lucide-react";
import { HoverCard, SectionReveal } from "./ui/motion";

const testimonials = [
  {
    name: "Marina Oliveira",
    role: "Gerente de Farmácia",
    quote: "Depois que começamos a usar o Q-Indica, nosso ticket médio aumentou.",
    avatar: "MO",
  },
  {
    name: "Carlos Menezes",
    role: "Diretor de Rede de Drogarias",
    quote: "Hoje a equipe recomenda com mais segurança e o faturamento subiu mês após mês.",
    avatar: "CM",
  },
  {
    name: "Juliana Costa",
    role: "Farmacêutica Responsável",
    quote: "A ferramenta trouxe padronização e confiança para todo atendimento no balcão.",
    avatar: "JC",
  },
];

export default function Testimonials() {
  return (
    <SectionReveal className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">Depoimentos</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <HoverCard
              key={item.name}
              delay={index * 0.1}
              className="rounded-2xl border border-stroke bg-white p-6 shadow-lg shadow-[#102a4310]"
            >
              <Quote className="h-5 w-5 text-brand" />
              <p className="mt-3 text-base leading-relaxed text-foreground">“{item.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand-strong">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.role}</p>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
