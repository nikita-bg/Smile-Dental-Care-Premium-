import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const _playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Smile Dental Care | Trusted Dentist in Nigel, Gauteng",
  description:
    "Smile Dental Care is your trusted family dental clinic in Nigel, Gauteng. We offer professional teeth cleaning, fillings, extractions, whitening, braces and more. Book your appointment today.",
  keywords: [
    "dentist Nigel",
    "dental clinic Nigel Gauteng",
    "teeth cleaning Nigel",
    "dentist Gauteng",
    "Smile Dental Care",
    "affordable dentist Nigel",
    "family dentist Gauteng",
  ],
  openGraph: {
    title: "Smile Dental Care | Trusted Dentist in Nigel, Gauteng",
    description:
      "Professional dental care for the whole family in Nigel, Gauteng. Book on WhatsApp today.",
    type: "website",
    locale: "en_ZA",
  },
};

export const viewport: Viewport = {
  themeColor: "#2D6A4F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${_poppins.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
