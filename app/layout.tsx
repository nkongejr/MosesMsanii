// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moses Msanii | Premium Beauty & Hair Studio — Nairobi",
  description:
    "Nairobi's most creative beauty and hair studio specializing in Dendrocks, Piercing, Dye, Grooming, and modern African hairstyles. Located at Allsops, Ruaraka.",
  keywords: [
    "Moses Msanii",
    "Nairobi salon",
    "Dendrocks Nairobi",
    "hair studio Nairobi",
    "beauty studio Kenya",
    "Ruaraka salon",
    "African hairstyles",
    "grooming Nairobi",
  ],
  authors: [{ name: "Moses Msanii" }],
  openGraph: {
    title: "Moses Msanii | Premium Beauty & Hair Studio",
    description: "Crafting Confidence Through Style — Nairobi's elite beauty studio",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}