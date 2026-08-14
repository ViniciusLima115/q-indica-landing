"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ActionLink } from "./ui/motion";

export default function Hero() {
  return (
    <>
      {/* Fixed Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(8,12,10,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="#hero" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/qindica-logo-white.png"
              alt="Q-Indica"
              width={200}
              height={58}
              priority
              style={{ height: 50, width: "auto" }}
            />
          </a>
          <ActionLink
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-[10px] px-4 py-2 text-sm font-semibold"
            style={{ background: "#1DB954", color: "#000" }}
          >
            Ver planos
          </ActionLink>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="qi-hero-section"
        style={{
          background: "#0F1612",
          paddingTop: 64,
          paddingLeft: 24,
          paddingRight: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(29,185,84,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, black 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, black 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Green glow top right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(29,185,84,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="qi-hero-grid">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid rgba(29,185,84,0.35)",
                borderRadius: 999,
                padding: "6px 14px",
                background: "rgba(29,185,84,0.08)",
                marginBottom: 24,
              }}
            >
              <span style={{ color: "#1DB954", fontSize: 14, lineHeight: 1 }}>⬡</span>
              <span
                style={{
                  color: "#1DB954",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "var(--font-sora), sans-serif",
                }}
              >
                A ferramenta de indicação do balcão da sua farmácia
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(30px, 4vw, 50px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                color: "rgba(255,255,255,0.88)",
                marginBottom: 20,
                fontFamily: "var(--font-sora), sans-serif",
              }}
            >
              Atenda com mais segurança e nunca mais trave na hora de{" "}
              <span
                style={{
                  color: "#1DB954",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(29,185,84,0.45)",
                  textUnderlineOffset: 5,
                }}
              >
                indicar.
              </span>
            </h1>

            {/* Pain points */}
            <div style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 7 }}>
              <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 15, margin: 0 }}>
                🚫 Na correria do atendimento, o balconista esquece o que poderia oferecer junto
              </p>
              <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 15, margin: 0 }}>
                🚫 A venda termina no produto pedido — e a farmácia perde sem perceber
              </p>
              <p style={{ color: "#1DB954", fontSize: 15, fontWeight: 600, margin: 0 }}>
                ✓ O Q-Indica mostra o que sugerir no momento certo, a cada atendimento
              </p>
            </div>

            {/* Description */}
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 16,
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              O Q-Indica ajuda sua equipe do balcão a lembrar o que oferecer, sugerir medicamentos
              e suplementos complementares com mais segurança e transformar cada atendimento em
              uma oportunidade de aumentar a cesta de compras.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <motion.a
                href="#video-demo"
                className="glow-pulse"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#1DB954",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "14px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontFamily: "var(--font-sora), sans-serif",
                }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
              >
                ▶ Ver demonstração
              </motion.a>
              <motion.a
                href="#pricing"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "13px 24px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.15)",
                  textDecoration: "none",
                }}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
              >
                Quero o Q-Indica na minha farmácia →
              </motion.a>
            </div>
          </motion.div>
        </div>

        <style>{`
          .qi-hero-grid {
            max-width: 1152px;
            margin: 0 auto;
            padding: 80px 0 110px;
            position: relative;
            z-index: 1;
          }
          .qi-hero-grid > div {
            max-width: 640px;
          }
          @media (max-width: 600px) {
            .qi-hero-section {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .qi-hero-grid {
              padding: 56px 0 64px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
