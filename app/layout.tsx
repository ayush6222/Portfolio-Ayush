import "./globals.css";
import Header from "./components/Header";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayush Jaiswal | Senior Frontend Developer | React & Next.js",
  description:
    "Ayush Jaiswal is a Senior Frontend Developer with 6+ years of experience in React.js, Next.js, TypeScript, and scalable UI systems.",
  keywords: [
    "Ayush Jaiswal",
    "Ayush Jaiswal Frontend Developer",
    "Ayush Jaiswal React Developer",
    "Ayush Jaiswal Next.js",
  ],
  authors: [{ name: "Ayush Jaiswal" }],
  creator: "Ayush Jaiswal",
  metadataBase: new URL("https://ayushjaiswal.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black transition-colors">
        <Header />
        <ScrollProgressBar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
