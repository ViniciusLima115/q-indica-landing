"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionReveal } from "./ui/motion";

const items = [
  {
    question: "Preciso instalar algo?",
    answer: "Não. O Q-Indica funciona na nuvem e pode ser acessado diretamente pelo navegador.",
  },
  {
    question: "Funciona em qualquer farmácia?",
    answer: "Sim. Atende farmácias independentes, drogarias de bairro e grandes redes.",
  },
  {
    question: "Preciso treinar minha equipe?",
    answer: "A curva de aprendizado é rápida e oferecemos onboarding para acelerar a adoção.",
  },
  {
    question: "Funciona no celular?",
    answer: "Sim. Você pode usar em celular, tablet e desktop com navegador moderno.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionReveal id="faq" className="px-6 py-20">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">FAQ</h2>

        <div className="mt-8 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-stroke bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground">{item.question}</span>
                  <span className="text-brand-strong">{isOpen ? "-" : "+"}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-text-muted">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
