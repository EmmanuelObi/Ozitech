import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

export const DM_Serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ozi Technologies",
  description:
    "Empower your business with our top-notch software solutions. Elevate online presence and engage customers through our advanced mobile apps and websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-matter">{children}</body>
    </html>
  );
}
