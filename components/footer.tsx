import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stroke bg-white px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#hero" className="inline-flex items-center">
            <Image
              src="/qindica-logo.png"
              alt="Q-Indica"
              width={200}
              height={58}
              className="h-8 w-auto sm:h-9"
            />
          </a>
          <p className="mt-3 max-w-sm text-sm text-text-muted">
            Recomendação inteligente de produtos complementares para aumentar ticket médio em farmácias.
          </p>
        </div>

        <div className="grid gap-6 text-sm sm:grid-cols-3">
          <div>
            <p className="font-semibold text-foreground">Produto</p>
            <div className="mt-3 space-y-2 text-text-muted">
              <a href="#solution" className="block hover:text-foreground">
                Solução
              </a>
              <a href="#pricing" className="block hover:text-foreground">
                Planos
              </a>
              <a href="#faq" className="block hover:text-foreground">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-foreground">Contato</p>
            <div className="mt-3 space-y-2 text-text-muted">
              <a href="mailto:contato@q-indica.com" className="block hover:text-foreground">
                contato@q-indica.com
              </a>
              <a href="tel:+5582999999999" className="block hover:text-foreground">
                +55 82 99999-9999
              </a>
              <a href="#" className="block hover:text-foreground">
                Política de privacidade
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-foreground">Social</p>
            <div className="mt-3 flex items-center gap-3 text-text-muted">
              <a href="#" aria-label="LinkedIn" className="rounded-lg border border-stroke p-2 hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-lg border border-stroke p-2 hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="mailto:contato@q-indica.com" aria-label="E-mail" className="rounded-lg border border-stroke p-2 hover:text-foreground">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-stroke pt-6 text-xs text-text-muted">
        © {new Date().getFullYear()} Q-Indica. Todos os direitos reservados.
      </div>
    </footer>
  );
}
