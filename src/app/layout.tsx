import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Automation Analyst Portfolio | Berlin",
  description:
    "Professional portfolio for a Berlin-based Data Analyst and Data Automation Engineer specializing in Python ETL pipelines, analytics systems, and BI process improvements.",
  metadataBase: new URL("https://example-portfolio.vercel.app"),
  keywords: [
    "Data Analyst Berlin",
    "Data Automation Analyst",
    "BI Analyst Portfolio",
    "Junior Data Engineer",
    "Python ETL",
    "Process Analytics Consultant"
  ],
  openGraph: {
    title: "Data Automation Analyst Portfolio | Berlin",
    description:
      "Turning data into automated intelligence through Python pipelines, ETL workflows, and analytics systems.",
    url: "https://example-portfolio.vercel.app",
    siteName: "Berlin Data Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Automation Analyst Portfolio | Berlin",
    description:
      "Professional portfolio focused on data automation, ETL engineering, and analytics systems."
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Data Automation Analyst",
  jobTitle: "Data Analyst / Data Automation Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "Germany"
  },
  email: "berlin.data.analyst@example.com",
  sameAs: ["https://www.linkedin.com/in/berlin-data-automation"]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var saved = localStorage.getItem('theme');
                var isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && isDarkPreferred)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            })();
          `}
        </Script>
        <Script id="person-jsonld" type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
