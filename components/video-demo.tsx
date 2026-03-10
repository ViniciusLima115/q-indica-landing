import { CirclePlay } from "lucide-react";
import { ActionLink, SectionReveal } from "./ui/motion";

export default function VideoDemo() {
  return (
    <SectionReveal id="video-demo" className="bg-surface-muted/60 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">Veja o Q-Indica em ação.</h2>

        <div className="mt-8 overflow-hidden rounded-3xl border border-stroke bg-black shadow-2xl shadow-[#102a4330]">
          <div className="relative aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/aqz-KE-bpKQ"
              title="Demonstração Q-Indica"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8">
          <ActionLink
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30"
          >
            Ver planos e preços
            <CirclePlay className="h-4 w-4" />
          </ActionLink>
        </div>
      </div>
    </SectionReveal>
  );
}
