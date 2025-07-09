import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka, Poppins, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fun, rounded font for headings and playful elements
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Clean, modern font for body text
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Handwritten style for testimonials and special text
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shilps Art - Bring Your Inner Vision to Life",
  description: "Personal fine arts instruction that honors your unique creative voice. Learn to translate what you see in your mind's eye into beautiful reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} ${poppins.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
