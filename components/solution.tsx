import { Check, Sparkles } from "lucide-react";
import { SectionReveal } from "./ui/motion";

export default function Solution() {
  return (
    <SectionReveal id="solution" className="px-6 py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            O Q-Indica transforma cada venda em uma oportunidade.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            O sistema sugere produtos complementares automaticamente com base em lógica farmacêutica,
            histórico de correlações e contexto do medicamento informado.
          </p>

          <ul className="mt-8 space-y-3 text-text-muted">
            <li className="flex items-center gap-2 rounded-xl border border-stroke bg-white px-4 py-3">
              <Check className="h-4 w-4 text-brand" />
              Recomendações em tempo real no balcão.
            </li>
            <li className="flex items-center gap-2 rounded-xl border border-stroke bg-white px-4 py-3">
              <Check className="h-4 w-4 text-brand" />
              Sugestões confiáveis orientadas por contexto terapêutico.
            </li>
            <li className="flex items-center gap-2 rounded-xl border border-stroke bg-white px-4 py-3">
              <Check className="h-4 w-4 text-brand" />
              Padronização da qualidade de venda em toda a equipe.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-stroke bg-white p-6 shadow-xl shadow-[#102a4318]">
          <div className="flex items-center justify-between border-b border-stroke pb-4">
            <p className="text-sm font-semibold text-foreground">Dashboard de Recomendações</p>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand-strong">
              <Sparkles className="h-3.5 w-3.5" />
              Inteligência ativa
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-stroke bg-surface-muted p-4">
              <p className="text-xs uppercase tracking-wide text-text-muted">Recomendações geradas</p>
              <p className="mt-2 text-3xl font-bold text-foreground">1.248</p>
              <p className="mt-1 text-sm text-text-muted">nos últimos 30 dias</p>
            </article>
            <article className="rounded-2xl border border-stroke bg-surface-muted p-4">
              <p className="text-xs uppercase tracking-wide text-text-muted">Taxa de aceitação</p>
              <p className="mt-2 text-3xl font-bold text-foreground">72%</p>
              <p className="mt-1 text-sm text-text-muted">sugestões aceitas no caixa</p>
            </article>
          </div>

          <div className="mt-4 rounded-2xl border border-stroke bg-surface-muted p-4">
            <p className="text-xs uppercase tracking-wide text-text-muted">Categoria com melhor performance</p>
            <p className="mt-2 text-lg font-semibold text-foreground">Vitaminas e imunidade</p>
            <div className="mt-3 h-2 rounded-full bg-white">
              <div className="h-full w-3/4 rounded-full bg-brand" />
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
