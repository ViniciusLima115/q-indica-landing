import { Instagram, Youtube } from "lucide-react";
import { ActionLink, SectionReveal } from "./ui/motion";

export default function CtaVideo() {
  return (
    <SectionReveal id="cta-video" className="qi-s" style={{ background: "#0F1612", padding: "96px 24px" }}>
      <div
        style={{ maxWidth: 1152, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }}
        className="qi-ctavideo-grid"
      >
        <div>
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
            <span>■</span> COMECE POR AQUI
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "rgba(255,255,255,0.88)",
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Entenda o Q-Indica em poucos segundos.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
            Um resumo rápido de como o Q-Indica ajuda sua equipe a recomendar melhor e vender mais em cada atendimento.
          </p>

          <ActionLink
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-[10px] text-sm font-semibold"
            style={{
              background: "#1DB954",
              color: "#000",
              padding: "12px 22px",
              textDecoration: "none",
            }}
          >
            Ver planos e preços
          </ActionLink>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24 }} className="qi-ctavideo-social">
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>Siga a gente</span>
            <a
              href="https://www.instagram.com/qindica_oficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.7)",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              <Instagram style={{ width: 16, height: 16 }} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCDOgfOHWdWMo8yShXL54CzQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.7)",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              <Youtube style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>

        <div
          style={{
            overflow: "hidden",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#000",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
            maxWidth: 380,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div style={{ position: "relative", paddingBottom: "177.78%", height: 0 }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              src="https://www.youtube.com/embed/ScLbU_6owRk"
              title="Q-Indica"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .qi-ctavideo-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            text-align: center;
          }
          .qi-ctavideo-grid p {
            justify-content: center;
          }
          .qi-ctavideo-social {
            justify-content: center;
          }
        }
      `}</style>
    </SectionReveal>
  );
}
