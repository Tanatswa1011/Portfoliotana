"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:berlin.data.analyst@example.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <AnimatedSection id="contact" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        label="Contact"
        title="Let’s discuss your analytics or automation needs"
      />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm text-slate-600 dark:text-slate-300">
              Name
              <input
                required
                name="name"
                type="text"
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-600 dark:text-slate-300">
              Email
              <input
                required
                name="email"
                type="email"
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-600 dark:text-slate-300">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              Send Message
            </button>
            {submitted ? (
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                Your email client should now open with the message draft.
              </p>
            ) : null}
          </div>
        </form>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/70">
          <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <p className="font-semibold text-slate-900 dark:text-slate-100">Email</p>
              <Link href="mailto:berlin.data.analyst@example.com" className="hover:text-accent dark:hover:text-accent-light">
                berlin.data.analyst@example.com
              </Link>
            </li>
            <li>
              <p className="font-semibold text-slate-900 dark:text-slate-100">LinkedIn</p>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent dark:hover:text-accent-light"
              >
                linkedin.com/in/berlin-data-automation
              </Link>
            </li>
            <li>
              <p className="font-semibold text-slate-900 dark:text-slate-100">Download CV</p>
              <Link href="/cv.pdf" download className="hover:text-accent dark:hover:text-accent-light">
                Download PDF
              </Link>
            </li>
            <li>
              <p className="font-semibold text-slate-900 dark:text-slate-100">Calendly</p>
              <Link
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent dark:hover:text-accent-light"
              >
                Optional meeting link
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </AnimatedSection>
  );
}
