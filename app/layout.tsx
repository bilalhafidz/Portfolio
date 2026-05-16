import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bilal AlHafidz - Full Stack Developer",
  description:
    "Portfolio of Bilal, a Full Stack Web Developer specializing in building intelligent digital experiences with React, Next.js, Node.js and modern cloud technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Web Developer",
    "Portfolio",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Bilal" }],
  creator: "Bilal",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Bilal Dev - Full Stack Developer",
    description: "Building intelligent digital experiences with modern web technologies.",
    siteName: "Bilal Dev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Dev - Full Stack Developer",
    description: "Building intelligent digital experiences.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="bg-[#050505] text-[#F8FAFC] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
