import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Data Automation Analyst | Python, ETL & Analytics Portfolio",
  description:
    "Portfolio of a Data Automation Analyst based in Berlin, specializing in Python pipelines, ETL workflows, and analytics systems. Experienced in data engineering, business intelligence, and process automation.",
  keywords: [
    "Data Analyst",
    "Data Automation",
    "ETL Pipeline",
    "Python",
    "Business Intelligence",
    "Berlin",
    "Data Engineer",
    "Analytics",
    "Power BI",
    "SQL",
  ],
  authors: [{ name: "Data Automation Analyst" }],
  openGraph: {
    title: "Data Automation Analyst | Python, ETL & Analytics Portfolio",
    description:
      "Portfolio of a Data Automation Analyst based in Berlin, specializing in Python pipelines, ETL workflows, and analytics systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Automation Analyst Portfolio",
    description:
      "Python pipelines, ETL workflows, and analytics systems in Berlin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
