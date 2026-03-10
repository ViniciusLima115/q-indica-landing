"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ActionLink, SectionReveal } from "./ui/motion";

type LeadForm = {
  email: string;
};

export default function Cta() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadForm>();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSent(true);
    reset();
  };

  return (
    <SectionReveal id="cta" className="px-6 py-20">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-stroke bg-white p-8 shadow-xl shadow-[#102a4318] sm:p-12">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Comece a aumentar o faturamento da sua farmácia hoje.
        </h2>

        <div className="mt-7">
          <ActionLink
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30"
          >
            Ver planos
            <ArrowRight className="h-4 w-4" />
          </ActionLink>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="w-full">
            <input
              {...register("email", {
                required: "Informe seu e-mail",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido",
                },
              })}
              className="w-full rounded-xl border border-stroke bg-surface px-4 py-3 text-sm outline-none ring-brand focus:ring-2"
              placeholder="Seu e-mail para receber uma proposta"
              type="email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-stroke bg-white px-6 py-3 text-sm font-semibold text-foreground disabled:opacity-60"
          >
            {isSubmitting ? "Enviando..." : "Receber proposta"}
          </motion.button>
        </form>

        {sent && <p className="mt-3 text-sm font-medium text-brand-strong">Recebido. Entraremos em contato.</p>}
      </div>
    </SectionReveal>
  );
}
