import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className="font-matter" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
