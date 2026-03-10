"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CirclePlay, Maximize2, Pill, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ActionLink, FloatingItem, SectionReveal } from "./ui/motion";

export default function Hero() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

  return (
    <>
      <SectionReveal id="hero" className="relative overflow-hidden px-6 pb-20 pt-8 sm:pt-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <header className="flex items-center justify-between">
            <a href="#hero" className="inline-flex items-center">
              <Image
                src="/qindica-logo.png"
                alt="Q-Indica"
                width={200}
                height={58}
                priority
                className="h-8 w-auto sm:h-9"
              />
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
                    <button
                      type="button"
                      onClick={() => setIsPreviewOpen(true)}
                      aria-label="Abrir print do sistema em tela cheia"
                      className="group relative block w-full"
                    >
                      <Image
                        src="/print-Qindica.jpg"
                        alt="Print do sistema Q-Indica"
                        width={1600}
                        height={900}
                        priority
                        sizes="(max-width: 1024px) 100vw, 960px"
                        className="h-auto w-full object-contain object-top transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-end gap-2 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 text-xs font-semibold text-white">
                        <Maximize2 className="h-4 w-4" />
                        Toque para ampliar
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </FloatingItem>
          </div>
        </div>
      </SectionReveal>

      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              className="mx-auto flex h-full w-full max-w-6xl items-center justify-center"
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(false)}
                  aria-label="Fechar preview"
                  className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white ring-1 ring-white/30 transition hover:bg-black/70"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#0d1b2a]/60 p-2 shadow-2xl sm:p-3">
                  <Image
                    src="/print-Qindica.jpg"
                    alt="Print ampliado do sistema Q-Indica"
                    width={1600}
                    height={900}
                    sizes="100vw"
                    className="mx-auto h-auto max-h-[85vh] w-full object-contain"
                  />
                </div>

                <p className="mt-3 text-center text-xs font-medium text-white/90">
                  Toque fora da imagem ou use ESC para fechar.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
