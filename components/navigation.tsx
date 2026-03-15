"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigationItems, siteConfig } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          className="text-sm font-semibold tracking-[0.18em] text-foreground uppercase"
          href="#home"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              className="text-sm text-muted-foreground transition hover:text-primary"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-border/70 bg-background/95 md:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <div className="mx-auto flex max-w-8xl flex-col px-6 py-4">
              {navigationItems.map((item) => (
                <Link
                  className="rounded-xl px-3 py-3 text-sm text-muted-foreground transition hover:bg-secondary hover:text-primary"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
