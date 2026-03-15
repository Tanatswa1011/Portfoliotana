"use client";

import { motion } from "framer-motion";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from "react";
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
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className } = props;
  const classes = cn(baseStyles, variants[variant], className);

  if ("href" in props && props.href) {
    const anchorProps = { ...props };
    const href = anchorProps.href;
    delete anchorProps.variant;
    delete anchorProps.className;
    delete anchorProps.href;
    delete anchorProps.children;

    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <a className={classes} href={href} {...anchorProps}>
          {children}
        </a>
      </motion.div>
    );
  }

  const buttonProps = { ...props };
  const type = buttonProps.type ?? "button";
  delete buttonProps.variant;
  delete buttonProps.className;
  delete buttonProps.type;
  delete buttonProps.children;

  return (
    <motion.button
      className={classes}
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}
