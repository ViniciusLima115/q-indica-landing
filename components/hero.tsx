"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ActionLink } from "./ui/motion";
import { useState, useEffect } from "react";
import { X, Maximize2 } from "lucide-react";

export default function Hero() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsPreviewOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [isPreviewOpen]);

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
              src="/qindica-logo.png"
              alt="Q-Indica"
              width={200}
              height={58}
              priority
              style={{ height: 50, width: "auto", filter: "brightness(0) invert(1)" }}
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
        style={{
          background: "#0F1612",
          paddingTop: 64,
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
                Inteligência de venda para farmácias
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
              Aumente o ticket médio da sua farmácia com recomendações{" "}
              <span
                style={{
                  color: "#1DB954",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(29,185,84,0.45)",
                  textUnderlineOffset: 5,
                }}
              >
                inteligentes.
              </span>
            </h1>

            {/* Pain points */}
            <div style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 7 }}>
              <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 15, margin: 0 }}>
                🚫 Balconistas sem suporte inteligente perdem vendas todos os dias
              </p>
              <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 15, margin: 0 }}>
                🚫 Ticket médio travado sem estratégia de recomendação complementar
              </p>
              <p style={{ color: "#1DB954", fontSize: 15, fontWeight: 600, margin: 0 }}>
                ✓ O Q-Indica resolve isso automaticamente, em tempo real
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
              O Q-Indica sugere automaticamente produtos complementares para cada medicamento,
              ajudando balconistas a vender mais com segurança.
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
                Ver planos →
              </motion.a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { value: "+18%", label: "ticket médio" },
                { value: "72%", label: "taxa de aceitação" },
                { value: "10k+", label: "produtos analisados" },
              ].map((stat) => (
                <div key={stat.value}>
                  <p
                    style={{
                      fontSize: "clamp(22px, 2.5vw, 30px)",
                      fontWeight: 800,
                      color: "#1DB954",
                      fontFamily: "var(--font-sora), sans-serif",
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — Screenshot do sistema */}
          <motion.div
            className="qi-hero-mockup"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            {/* Floating metric — top right */}
            <div
              style={{
                position: "absolute",
                top: -18,
                right: -16,
                background: "#161E19",
                border: "1px solid rgba(29,185,84,0.3)",
                borderRadius: 12,
                padding: "10px 14px",
                zIndex: 10,
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              }}
            >
              <p style={{ color: "#1DB954", fontWeight: 800, fontSize: 18, fontFamily: "var(--font-sora)", margin: 0, lineHeight: 1 }}>
                +18%
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, margin: "4px 0 0" }}>ticket médio</p>
            </div>

            {/* Main card with screenshot */}
            <div
              style={{
                background: "#161E19",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              }}
            >
              {/* macOS-style topbar */}
              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#fe5f55", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbf2e", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#2bc840", display: "inline-block" }} />
                <span style={{ flex: 1, textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.35)", marginLeft: -34 }}>
                  Dashboard Q-Indica
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: "rgba(29,185,84,0.12)",
                    border: "1px solid rgba(29,185,84,0.3)",
                    borderRadius: 999,
                    padding: "3px 8px",
                    fontSize: 11,
                    color: "#1DB954",
                    fontWeight: 600,
                  }}
                >
                  <span
                    className="blink"
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#1DB954",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  Inteligência ativa
                </span>
              </div>

              {/* System screenshot */}
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                aria-label="Abrir print do sistema em tela cheia"
                style={{
                  display: "block",
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  position: "relative",
                }}
                className="qi-screenshot-btn"
              >
                <Image
                  src="/print-Qindica.jpg"
                  alt="Print do sistema Q-Indica"
                  width={1600}
                  height={900}
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 6,
                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                    padding: "20px 12px 10px",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  <Maximize2 style={{ width: 12, height: 12 }} />
                  Toque para ampliar
                </span>
              </button>
            </div>

            {/* Floating metric — bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: -18,
                left: -16,
                background: "#161E19",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "10px 14px",
                zIndex: 10,
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.88)", fontWeight: 700, fontSize: 14, fontFamily: "var(--font-sora)", margin: 0, lineHeight: 1 }}>
                1.248
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, margin: "4px 0 0" }}>recomendações/30 dias</p>
            </div>
          </motion.div>
        </div>

        <style>{`
          .qi-hero-grid {
            max-width: 1152px;
            margin: 0 auto;
            padding: 80px 24px 110px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .qi-screenshot-btn:hover img {
            transform: scale(1.01);
            transition: transform 0.3s ease;
          }
          @media (max-width: 960px) {
            .qi-hero-grid {
              grid-template-columns: 1fr;
              gap: 40px;
              padding: 56px 24px 72px;
            }
            .qi-hero-mockup {
              display: none;
            }
          }
          @media (max-width: 600px) {
            .qi-hero-grid {
              padding: 48px 20px 60px;
            }
          }
        `}</style>
      </section>

      {/* Fullscreen preview modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              backdropFilter: "blur(6px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              style={{ maxWidth: 1100, width: "100%", position: "relative" }}
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                aria-label="Fechar preview"
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 10,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <X style={{ width: 16, height: 16 }} />
              </button>
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Image
                  src="/print-Qindica.jpg"
                  alt="Print ampliado do sistema Q-Indica"
                  width={1600}
                  height={900}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", maxHeight: "85vh", objectFit: "contain", display: "block" }}
                />
              </div>
              <p style={{ textAlign: "center", marginTop: 12, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                Toque fora ou pressione ESC para fechar
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
