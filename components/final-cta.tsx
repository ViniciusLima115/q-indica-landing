import { ArrowRight } from "lucide-react";
import { ActionLink, SectionReveal } from "./ui/motion";

export default function FinalCta() {
  return (
    <SectionReveal id="final-cta" style={{ background: "#0F1612", padding: "96px 24px" }}>
      <div
        style={{
          maxWidth: 800,
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
            width: 600,
            height: 400,
            background: "radial-gradient(ellipse, rgba(29,185,84,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.1,
              marginBottom: 18,
            }}
          >
            Transforme cada venda em uma{" "}
            <span style={{ color: "#1DB954" }}>oportunidade de faturamento.</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 17,
              lineHeight: 1.65,
              marginBottom: 40,
              maxWidth: 560,
              margin: "0 auto 40px",
            }}
          >
            Tenha recomendações inteligentes no balcão e acelere o crescimento da sua operação.
          </p>

          <ActionLink
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-[10px] font-bold text-base"
            style={{
              background: "#1DB954",
              color: "#000",
              padding: "16px 32px",
              textDecoration: "none",
              fontFamily: "var(--font-sora), sans-serif",
            }}
          >
            Começar agora
            <ArrowRight style={{ width: 18, height: 18 }} />
          </ActionLink>
        </div>
      </div>
    </SectionReveal>
  );
}
