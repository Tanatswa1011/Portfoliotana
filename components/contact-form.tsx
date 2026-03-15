"use client";

import { useMemo, useState } from "react";

const initialValues = {
  name: "",
  email: "",
  company: "",
  message: ""
};

export function ContactForm({ recipientEmail }: { recipientEmail: string }) {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return (
      values.name.trim().length > 1 &&
      values.email.includes("@") &&
      values.message.trim().length > 20
    );
  }, [values]);

  function updateValue(field: keyof typeof initialValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${values.name}${values.company ? ` (${values.company})` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Company: ${values.company || "Not provided"}`,
        "",
        values.message
      ].join("\n")
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setValues(initialValues);
  }

  return (
    <form
      className="rounded-[1.75rem] border border-border/80 bg-card p-8 shadow-soft sm:p-10"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted-foreground">
          Name
          <input
            className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary/40"
            onChange={(event) => updateValue("name", event.target.value)}
            placeholder="Your name"
            required
            type="text"
            value={values.name}
          />
        </label>

        <label className="grid gap-2 text-sm text-muted-foreground">
          Email
          <input
            className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary/40"
            onChange={(event) => updateValue("email", event.target.value)}
            placeholder="you@company.com"
            required
            type="email"
            value={values.email}
          />
        </label>
      </div>

      <div className="mt-5 grid gap-5">
        <label className="grid gap-2 text-sm text-muted-foreground">
          Company
          <input
            className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary/40"
            onChange={(event) => updateValue("company", event.target.value)}
            placeholder="Company or team"
            type="text"
            value={values.company}
          />
        </label>

        <label className="grid gap-2 text-sm text-muted-foreground">
          Message
          <textarea
            className="min-h-[180px] rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary/40"
            onChange={(event) => updateValue("message", event.target.value)}
            placeholder="Tell me a little about the role, project, or conversation you have in mind."
            required
            value={values.message}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          The form opens your email client with a pre-filled message.
        </p>
        <button
          className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!isValid}
          type="submit"
        >
          Send message
        </button>
      </div>

      {submitted ? (
        <p className="mt-4 text-sm text-primary">
          Your email draft has been prepared. Please send it from your email
          client.
        </p>
      ) : null}
    </form>
  );
}
