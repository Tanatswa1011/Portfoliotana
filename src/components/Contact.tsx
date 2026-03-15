"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2 tracking-wide uppercase">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-4 text-accent-500 dark:text-accent-400 max-w-2xl">
              Open to discussing data analytics, automation, and BI
              opportunities in Berlin. Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-accent-700 dark:text-accent-300 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-accent-200 dark:border-accent-700 bg-white dark:bg-accent-800/50 text-accent-900 dark:text-accent-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 dark:focus:border-primary-400 transition-all placeholder:text-accent-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-accent-700 dark:text-accent-300 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-accent-200 dark:border-accent-700 bg-white dark:bg-accent-800/50 text-accent-900 dark:text-accent-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 dark:focus:border-primary-400 transition-all placeholder:text-accent-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-accent-700 dark:text-accent-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-accent-200 dark:border-accent-700 bg-white dark:bg-accent-800/50 text-accent-900 dark:text-accent-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 dark:focus:border-primary-400 transition-all placeholder:text-accent-400"
                    placeholder="Job opportunity / Collaboration / General inquiry"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-accent-700 dark:text-accent-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-accent-200 dark:border-accent-700 bg-white dark:bg-accent-800/50 text-accent-900 dark:text-accent-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 dark:focus:border-primary-400 transition-all resize-none placeholder:text-accent-400"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary-600/25 active:scale-[0.98]"
                >
                  {submitted ? (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Opening Mail Client...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="lg:col-span-2 space-y-6"
            >
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "your.email@example.com",
                  href: "mailto:your.email@example.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "Connect on LinkedIn",
                  href: "https://linkedin.com/in/yourprofile",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  label: "Resume",
                  value: "Download CV (PDF)",
                  href: "/cv.pdf",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "Berlin, Germany",
                  href: null,
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={scaleIn}
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent-50 dark:bg-accent-800/50 border border-accent-100 dark:border-accent-700/50"
                >
                  <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-accent-500 dark:text-accent-400 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-accent-700 dark:text-accent-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-accent-700 dark:text-accent-200">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
