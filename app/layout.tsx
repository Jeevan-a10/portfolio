import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeevan Kishore Arigela | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and AWS Cloud Deployments. Engineering scalable web platforms at Anju Siima Technologies.",
  keywords: [
    "Jeevan Kishore",
    "Jeevan Kishore Arigela",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "AWS",
    "Anju Siima Technologies",
  ],
  authors: [{ name: "Jeevan Kishore Arigela" }],
  openGraph: {
    title: "Jeevan Kishore Arigela | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications with React, Next.js, TypeScript, and AWS Cloud Deployments.",
    url: "https://jeevankishorea.vercel.app",
    siteName: "Jeevan Kishore Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23007acc'/%3E%3Cstop offset='100%25' stop-color='%2300dfa2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='25' fill='%230b1120'/%3E%3Crect x='4' y='4' width='92' height='92' rx='21' fill='none' stroke='url(%23g)' stroke-width='4'/%3E%3Ctext x='50' y='63' font-family='system-ui, -apple-system, sans-serif' font-weight='900' font-size='42' fill='%23ffffff' text-anchor='middle'%3EJK%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#080c14] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
