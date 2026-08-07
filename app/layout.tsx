import type { Metadata, Viewport } from "next";
import { AppChrome } from "@/components/app-chrome";
import "./globals.css";
import "@/styles/navigation.css";
import "@/styles/home.css";
import "@/styles/space.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CREER — Digital Design & Creative Development",
  description:
    "An immersive portfolio across digital design, creative development, real-time 3D, and moving image.",
  openGraph: {
    title: "CREER — Digital Design & Creative Development",
    description:
      "An immersive portfolio across design, code, real-time 3D, and moving image.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1744,
        height: 912,
        alt: "CREER — Digital Design and Creative Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CREER — Digital Design & Creative Development",
    description:
      "An immersive portfolio across design, code, real-time 3D, and moving image.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06100c",
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
