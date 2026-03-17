import { Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080C0A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "56px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        {/* Logo + description */}
        <div style={{ maxWidth: 280 }}>
          <a href="#hero" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", marginBottom: 14 }}>
            <Image
              src="/qindica-logo.png"
              alt="Q-Indica"
              width={200}
              height={58}
              style={{ height: 36, width: "auto", filter: "brightness(0) invert(1)" }}
            />
          </a>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0 }}>
            Recomendação inteligente de produtos complementares para aumentar ticket médio em farmácias.
          </p>
        </div>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.88)", marginBottom: 16 }}>
              Produto
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="#solution" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Solução</a>
              <a href="#pricing" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Planos</a>
              <a href="#faq" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>FAQ</a>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.88)", marginBottom: 16 }}>
              Contato
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:contato@q-indica.com" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                contato@q-indica.com
              </a>
              <a href="tel:+5582999999999" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                +55 82 99999-9999
              </a>
              <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                Política de privacidade
              </a>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.88)", marginBottom: 16 }}>
              Social
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <a
                href="#"
                aria-label="LinkedIn"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <Linkedin style={{ width: 14, height: 14 }} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <Instagram style={{ width: 14, height: 14 }} />
              </a>
              <a
                href="mailto:contato@q-indica.com"
                aria-label="E-mail"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <Mail style={{ width: 14, height: 14 }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1152,
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
        }}
      >
        © {new Date().getFullYear()} Q-Indica. Todos os direitos reservados.
      </div>
    </footer>
  );
}
