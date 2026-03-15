import Link from "next/link";
import { navigationItems, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/70 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-8xl flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. Built for data analytics,
          automation, and BI opportunities in Germany.
        </p>
        <div className="flex flex-wrap gap-4">
          {navigationItems.map((item) => (
            <Link className="transition hover:text-primary" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
