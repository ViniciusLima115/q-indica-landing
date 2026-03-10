"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type SectionRevealProps = BaseProps & {
  id?: string;
};

type ActionLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  id,
}: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}

export function HoverCard({ children, className, delay = 0 }: BaseProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      {children}
    </motion.div>
  );
}

export function ActionLink({ children, href, className }: ActionLinkProps) {
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18 }}
    >
      {children}
    </motion.a>
  );
}

export function FloatingItem({ children, className }: BaseProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
