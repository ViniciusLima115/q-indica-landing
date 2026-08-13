import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="qi-footer"
      style={{
        background: "#080C0A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "56px 24px 32px",
      }}
    >
      <div
        className="qi-footer-top"
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
          className="qi-footer-nav"
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
              <a href="mailto:contatoqindica@gmail.com" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                contatoqindica@gmail.com
              </a>
              <a href="tel:+5581998394496" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                +55 81 99839-4496
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
                href="https://www.youtube.com/@Q-Indica-oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
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
                <Youtube style={{ width: 14, height: 14 }} />
              </a>
              <a
                href="mailto:contatoqindica@gmail.com"
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

      <style>{`
        @media (max-width: 640px) {
          .qi-footer {
            padding: 40px 16px 24px !important;
          }
          .qi-footer-top {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .qi-footer-nav {
            gap: 32px !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: 1152,
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.25)",
            lineHeight: 1.65,
            marginBottom: 16,
          }}
        >
          Recomendações dessa ferramenta são de caráter educacional e de apoio profissional. Alguns medicamentos podem exigir prescrição e devem seguir a legislação vigente. O conteúdo não substitui o julgamento clínico nem o encaminhamento ao médico ou farmacêutico quando necessário. Farmacêutica responsável: Janecleia da Silva Santos Ferreira — CRF 3555/AL.
        </p>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", margin: 0 }}>
          © {new Date().getFullYear()} Q-Indica. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
