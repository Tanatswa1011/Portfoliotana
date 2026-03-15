export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:px-6">
        <p>© {new Date().getFullYear()} Berlin Data Portfolio</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
