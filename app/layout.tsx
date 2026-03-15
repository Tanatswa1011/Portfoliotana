import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: {
    default: `${siteConfig.name} | Data Automation Analyst in Berlin`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Professional portfolio for a Berlin-based Data Automation Analyst focused on Python pipelines, ETL workflows, BI reporting, and reliable analytics systems.",
  keywords: [
    "Data Analyst portfolio",
    "Business Intelligence Analyst",
    "Data Automation Analyst",
    "Junior Data Engineer",
    "Berlin data analyst",
    "Python ETL",
    "Analytics portfolio Germany"
  ],
  openGraph: {
    title: `${siteConfig.name} | Data Automation Analyst`,
    description:
      "Portfolio showcasing analytics systems, ETL workflows, Python automation, and business-focused data projects.",
    url: siteConfig.website,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Data Automation Analyst`,
    description:
      "Berlin-based portfolio focused on analytics automation, ETL workflows, and BI-ready data systems."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_55%)]" />
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
