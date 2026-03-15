"use client";

import { motion } from "framer-motion";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "border-primary bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary/90",
  secondary:
    "border-border bg-card text-card-foreground hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary",
  ghost:
    "border-transparent bg-transparent text-foreground hover:-translate-y-0.5 hover:bg-secondary"
} as const;

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    </motion.div>
  );
}
