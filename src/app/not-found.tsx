import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent/70 dark:text-accent-light/70">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">Page not found</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          The page you requested does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
