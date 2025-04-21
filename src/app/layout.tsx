import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIM Services | Installateur de bornes de recharge ",
  description:
    "AIM Services est spécialiste en installation de bornes de recharge pour véhicules électriques. Découvrez nos services pour particuliers et professionnels.",
  keywords: [
    "borne de recharge",
    "installation borne électrique",
    "voiture électrique",
    "AIM Services",
    "énergie verte",
    "mobilité électrique",
  ],
  authors: [{ name: "AIM Services", url: "https://aim-services.fr" }],
  creator: "AIM Services",
  publisher: "AIM Services",
  metadataBase: new URL("https://aim-services.fr"),
  alternates: {
    canonical: "https://aim-services.fr",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },

  openGraph: {
    title: "AIM Services | Installation de bornes de recharge",
    description:
      "Découvrez l’expertise AIM Services dans l’installation de bornes électriques pour véhicules. Services sur mesure pour particuliers et professionnels.",
    url: "https://aim-services.fr",
    siteName: "AIM Services",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
