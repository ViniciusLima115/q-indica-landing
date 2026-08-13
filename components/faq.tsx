"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionReveal } from "./ui/motion";

const items = [
  {
    question: "Serve para balconistas iniciantes sem experiência?",
    answer: "Sim. O Q-Indica foi criado para apoiar balconistas iniciantes. Além de sugerir o produto, a ferramenta explica o motivo da indicação, sugere uma pergunta para fazer ao cliente durante a venda e mostra para que serve o medicamento ou suplemento naquela situação.",
  },
  {
    question: "Eu tenho que baixar algum programa no computador?",
    answer: "Não. O Q-Indica é uma ferramenta online. Após o pagamento, você recebe o link de acesso e pode cadastrar sua equipe para começar a usar na mesma hora.",
  },
  {
    question: "Minha equipe já sabe vender. Ainda preciso do Q-Indica?",
    answer: "Sim, porque o Q-Indica não foi feito apenas para quem não sabe vender. Ele foi feito para quem quer vender melhor. Mesmo vendedores experientes esquecem oportunidades durante a correria do balcão. Mesmo bons atendentes podem deixar de sugerir um produto complementar. O Q-Indica funciona como apoio comercial para lembrar, orientar e acelerar a recomendação.",
  },
  {
    question: "O gestor consegue verificar se a equipe está usando?",
    answer: "Sim. O gestor pode acompanhar o uso da ferramenta pela equipe, pois conta com uma versão específica para monitorar, orientar e avaliar o desempenho dos balconistas.",
  },
  {
    question: "Meus atendentes vão realmente usar?",
    answer: "O Q-Indica foi pensado para a rotina do balcão. A lógica é simples: pesquisar, visualizar sugestões e oferecer com mais segurança. Não é uma ferramenta para complicar o atendimento — é para facilitar. Quanto mais simples for o uso, maior a chance de virar hábito na equipe.",
  },
  {
    question: "Serve para farmácia pequena?",
    answer: "Sim. Farmácias pequenas também perdem vendas quando o atendente esquece de oferecer complementos. Na verdade, em muitos casos, cada venda conta ainda mais. Se a farmácia tem fluxo, balcão e produtos complementares no mix, o Q-Indica pode ajudar a equipe a aproveitar melhor cada atendimento.",
  },
  {
    question: "Vai tomar tempo no atendimento?",
    answer: "A proposta é justamente o contrário. O Q-Indica ajuda o atendente a encontrar sugestões de forma rápida, sem depender apenas da memória. Em vez de pensar do zero no que oferecer, ele consulta o guia e ganha apoio para agir com mais segurança.",
  },
  {
    question: "O Q-Indica substitui treinamento?",
    answer: "Não. O Q-Indica complementa o treinamento. Ele ajuda a equipe a aplicar no dia a dia aquilo que muitas vezes é esquecido na prática. Treinamento ensina. O Q-Indica lembra na hora da venda.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionReveal id="faq" className="qi-s" style={{ background: "#080C0A", padding: "96px 24px" }}>
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
