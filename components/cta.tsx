"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SectionReveal } from "./ui/motion";

type LeadForm = {
  email: string;
};

export default function Cta() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadForm>();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSent(true);
    reset();
  };

  return (
    <SectionReveal id="cta" style={{ background: "#0F1612", padding: "96px 24px" }}>
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 480,
            height: 320,
            background: "radial-gradient(ellipse, rgba(29,185,84,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Comece a aumentar o faturamento da sua{" "}
            <span style={{ color: "#1DB954" }}>farmácia hoje.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 40, lineHeight: 1.6 }}>
            Tenha recomendações inteligentes no balcão e acelere o crescimento da sua operação.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              gap: 10,
              maxWidth: 480,
              margin: "0 auto 12px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 240 }}>
              <input
                {...register("email", {
                  required: "Informe seu e-mail",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "E-mail inválido",
                  },
                })}
                type="email"
                placeholder="Seu e-mail para receber uma proposta"
                style={{
                  width: "100%",
                  background: "#161E19",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  padding: "13px 16px",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.88)",
                  outline: "none",
                }}
              />
              {errors.email && (
                <p style={{ marginTop: 6, fontSize: 12, color: "#EF4444", textAlign: "left" }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "#1DB954",
                color: "#000",
                fontWeight: 700,
                fontSize: 14,
                padding: "13px 22px",
                borderRadius: 10,
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                opacity: isSubmitting ? 0.6 : 1,
                fontFamily: "var(--font-sora), sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {isSubmitting ? "Enviando..." : "Receber proposta"}
            </motion.button>
          </form>

          {sent && (
            <p style={{ color: "#1DB954", fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
              Recebido. Entraremos em contato.
            </p>
          )}

          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
            🔒 Sem spam. Você pode cancelar quando quiser.
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
