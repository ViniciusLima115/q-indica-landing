import { ArrowRight } from "lucide-react";
import { ActionLink, SectionReveal } from "./ui/motion";

export default function FinalCta() {
  return (
    <SectionReveal id="final-cta" className="px-6 py-20">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-stroke bg-white p-10 text-center shadow-xl shadow-[#102a4318] sm:p-14">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Transforme cada venda em uma oportunidade de faturamento.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
          Tenha recomendações inteligentes no balcão e acelere o crescimento da sua operação.
        </p>

        <div className="mt-8">
          <ActionLink
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30"
          >
            Começar agora
            <ArrowRight className="h-5 w-5" />
          </ActionLink>
        </div>
      </div>
    </SectionReveal>
  );
}
