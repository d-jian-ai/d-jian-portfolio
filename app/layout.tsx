import type { Metadata, Viewport } from "next";
import { AppChrome } from "@/components/app-chrome";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CREER Portfolio",
  description: "Immersive portfolio for design, web, and moving image work.",
  openGraph: {
    title: "CREER Portfolio",
    description: "Immersive portfolio for design, web, and moving image work.",
    images: ["/images/forest-entry.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10221d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
