import { Building2, Link2, PackageSearch } from "lucide-react";
import { HoverCard, SectionReveal } from "./ui/motion";

const stats = [
  {
    value: "10.000+",
    label: "produtos analisados",
    icon: PackageSearch,
  },
  {
    value: "100.000+",
    label: "correlações de recomendação",
    icon: Link2,
  },
  {
    value: "Brasil inteiro",
    label: "farmácias usando a plataforma",
    icon: Building2,
  },
];

export default function SocialProof() {
  return (
    <SectionReveal className="px-6 pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <HoverCard
                key={stat.label}
                delay={index * 0.1}
                className="rounded-2xl border border-stroke bg-white p-6 shadow-lg shadow-[#102a4310]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
