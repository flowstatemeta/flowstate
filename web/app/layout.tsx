import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import AuthProvider from "@/components/AuthProvider"; // Assuming this path is correct
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowStateMeta",
  description: "Your awesome new project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <body className="font-sans antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
