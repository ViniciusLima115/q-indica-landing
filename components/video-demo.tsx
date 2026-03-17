import { CirclePlay } from "lucide-react";
import { ActionLink, SectionReveal } from "./ui/motion";

export default function VideoDemo() {
  return (
    <SectionReveal id="video-demo" style={{ background: "#0F1612", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
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
          <span>■</span> DEMONSTRAÇÃO
        </p>
        <h2
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "rgba(255,255,255,0.88)",
            marginBottom: 32,
            lineHeight: 1.15,
          }}
        >
          Veja o Q-Indica em ação.
        </h2>

        <div
          style={{
            overflow: "hidden",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#000",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
          }}
        >
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              src="https://www.youtube.com/embed/aqz-KE-bpKQ"
              title="Demonstração Q-Indica"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
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
            <CirclePlay style={{ width: 16, height: 16 }} />
          </ActionLink>
        </div>
      </div>
    </SectionReveal>
  );
}
