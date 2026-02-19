import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ubot — AI-Powered Personal Automation Assistant",
  description:
    "Automate your digital life through natural conversations. Ubot connects WhatsApp, Telegram, Gmail, browser automation, and more — all powered by AI.",
  keywords: [
    "AI assistant",
    "personal automation",
    "WhatsApp bot",
    "Telegram bot",
    "browser automation",
    "LLM",
    "AI agent",
  ],
  openGraph: {
    title: "Ubot — AI-Powered Personal Automation Assistant",
    description:
      "Automate your digital life through natural conversations. WhatsApp, Telegram, Gmail integrations and more.",
    url: "https://ubot.bigmints.com",
    siteName: "Ubot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubot — AI-Powered Personal Automation Assistant",
    description:
      "Automate your digital life through natural conversations.",
  },
  metadataBase: new URL("https://ubot.bigmints.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
