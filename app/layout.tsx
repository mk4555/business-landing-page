import type { Metadata } from "next";
import { Outfit, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontOutfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const fontSans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowPilot - Automate Your Workflow",
  description:
    "FlowPilot is your AI copilot — handling emails, JIRA tickets, and the grind behind the scenes — so you can focus on the flight path ahead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontOutfit.variable} ${fontJakarta.variable}`}
    >
      <body className="font-sans antialiased min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
