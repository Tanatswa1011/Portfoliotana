"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/button";
import { stats, siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-20 lg:px-8 lg:pt-24"
      id="home"
    >
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-hero-grid opacity-90" />
      <motion.div
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.08, 1]
        }}
        className="absolute left-1/2 top-16 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ x: [0, 16, 0], y: [0, -14, 0] }}
        className="absolute right-12 top-24 -z-10 h-32 w-32 rounded-full bg-slate-400/10 blur-3xl"
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-8xl gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="max-w-4xl">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Berlin-based data professional focused on analytics automation
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Turning Data into Automated Intelligence
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Data Automation Analyst specializing in Python pipelines, ETL
              workflows, and analytics systems that transform raw data into
              reliable insights.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {siteConfig.location}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button download href={siteConfig.cvPath} variant="secondary">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button href="#contact" variant="ghost">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          initial={{ opacity: 0, y: 28 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-border/80 bg-card/80 p-6 shadow-soft backdrop-blur"
              initial={{ opacity: 0, y: 18 }}
              key={stat.label}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.55 }}
            >
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
