import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Script from "next/script";
import Footer from "../components/footer";
import { ResourceProvider } from "@/context/ResourceContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Android Blast Off",
  description: "Modern Android geliştirme dünyasına hızlı bir giriş yapmaya hazır mısın? 40 saatlik bu ücretsiz Jetpack Compose Bootcamp ile, Android uygulama geliştirmede en güncel ve güçlü araçları öğrenme fırsatını kaçırma!",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Developer",
    "MultiGroup",
    "Developer MultiGroup",
    "DMG",
    "Etkinlik",
    "Bootcamp",
    "Yazılım",
    "Yazılım Etkinliği",
    "Topluluk",
    "Yazılım Topluluğu",
    "Eğitim",
    "Android",
    "Jetpack Compose",
    "Youtube Bootcamp",
    "Video Bootcamp",
    "Online Bootcamp"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.UMAMI_PROJECT_ID}
        ></Script>
      </head>
      <body className="font-montserrat">
        <ResourceProvider>
          <Navbar />
          {children}
          <Footer />
        </ResourceProvider>
      </body>
    </html>
  );
}
