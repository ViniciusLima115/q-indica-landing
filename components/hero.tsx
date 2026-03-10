import Image from "next/image";
import { ArrowRight, CirclePlay, Pill, ShieldCheck } from "lucide-react";
import { ActionLink, FloatingItem, SectionReveal } from "./ui/motion";

export default function Hero() {
  return (
    <SectionReveal id="hero" className="relative overflow-hidden px-6 pb-20 pt-8 sm:pt-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <header className="flex items-center justify-between">
          <a href="#hero" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
              QI
            </span>
            Q-Indica
          </a>
          <ActionLink
            href="#pricing"
            className="rounded-full border border-stroke bg-surface px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
          >
            Ver planos
          </ActionLink>
        </header>

        <div className="mt-12 flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1 text-sm font-semibold text-brand-strong">
            <Pill className="h-4 w-4" />
            Inteligencia de venda para farmacias
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Aumente o ticket medio da sua farmacia com recomendacoes inteligentes.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">
            O Q-Indica sugere automaticamente produtos complementares para cada medicamento, ajudando
            balconistas a vender mais com seguranca.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ActionLink
              href="#video-demo"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30"
            >
              Ver demonstracao
              <CirclePlay className="h-4 w-4" />
            </ActionLink>
            <ActionLink
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-stroke bg-white px-6 py-3 text-sm font-semibold text-foreground"
            >
              Ver planos
              <ArrowRight className="h-4 w-4" />
            </ActionLink>
          </div>

          <div className="mt-8 grid w-full max-w-3xl gap-4 text-left text-sm text-text-muted sm:grid-cols-2">
            <div className="rounded-xl border border-stroke bg-white/90 p-4">
              <p className="text-2xl font-bold text-foreground">+18%</p>
              <p>de aumento medio em ticket</p>
            </div>
            <div className="rounded-xl border border-stroke bg-white/90 p-4">
              <p className="inline-flex items-center gap-2 text-lg font-semibold text-foreground">
                <ShieldCheck className="h-5 w-5 text-brand" />
                Seguranca clinica
              </p>
              <p className="mt-1">sugestoes orientadas por logica farmaceutica</p>
            </div>
          </div>

          <FloatingItem className="mt-12 w-full">
            <div className="relative mx-auto w-full max-w-5xl rounded-[2rem] border border-stroke/80 bg-white/80 p-2 shadow-2xl shadow-[#102a4330]">
              <div className="rounded-[1.4rem] border border-stroke bg-white">
                <div className="flex items-center justify-between border-b border-stroke/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#fe5f55]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbf2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2bc840]" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Dashboard Q-Indica</p>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand-strong">
                    Tempo real
                  </span>
                </div>

                <div className="overflow-hidden rounded-b-[1.35rem] bg-surface-muted">
                  <Image
                    src="/print-Qindica.jpg"
                    alt="Print do sistema Q-Indica"
                    width={1600}
                    height={900}
                    priority
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="h-auto w-full object-contain object-top"
                  />
                </div>
              </div>
            </div>
          </FloatingItem>
        </div>
      </div>
    </SectionReveal>
  );
}
