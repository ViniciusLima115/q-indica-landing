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
    <SectionReveal id="faq" style={{ background: "#080C0A", padding: "96px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p
          style={{
            color: "#22C55E",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>■</span> FAQ
        </p>
        <h2
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "rgba(255,255,255,0.88)",
            marginBottom: 40,
            lineHeight: 1.15,
          }}
        >
          Perguntas frequentes
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                style={{
                  background: "#161E19",
                  border: `1px solid ${isOpen ? "rgba(29,185,84,0.3)" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      color: isOpen ? "#1DB954" : "rgba(255,255,255,0.4)",
                      fontSize: 20,
                      lineHeight: 1,
                      flexShrink: 0,
                      transition: "color 0.2s",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p
                        style={{
                          padding: "0 20px 18px",
                          fontSize: 14,
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {item.answer}
                      </p>
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
