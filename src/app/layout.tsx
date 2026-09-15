import type { Metadata } from "next";
import { Raleway, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "GGCODE MX — Nallely Figueroa | Web Developer",
  description:
    "Desarrollo web full stack (Next.js, React, AWS) y crecimiento digital (SEO, Meta Ads) para negocios en México y el extranjero.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${raleway.variable} ${spaceGrotesk.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
