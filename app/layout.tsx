import "./globals.css";
import Header from "./components/Header";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayush Jaiswal | Senior Frontend Developer | React & Next.js",
  description:
    "Ayush Jaiswal is a Senior Frontend Developer with 6+ years of experience in React.js, Next.js, TypeScript, and building scalable UI systems.",
  keywords: [
    "Ayush Jaiswal",
    "Ayush Jaiswal Frontend Developer",
    "Ayush Jaiswal React Developer",
    "Ayush Jaiswal Next.js",
    "Ayush Jaiswal Portfolio",
    "Ayush Jaiswal UI Engineer",
    "Ayush Jaiswal JavaScript Developer",
    "Ayush Jaiswal TypeScript",
    "Ayush Jaiswal Web Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Ayush Jaiswal" }],
  creator: "Ayush Jaiswal",
  metadataBase: new URL("https://ayushjaiswal.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black transition-colors">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ayush Jaiswal",
              url: "https://ayushjaiswal.vercel.app",
              jobTitle: "Senior Frontend Developer",
              sameAs: [
                "https://www.linkedin.com/in/ayush-jais/",
                "https://github.com/ayush42837272-eng",
                "https://leetcode.com/u/Ayush622/",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Frontend Development",
                "UI Engineering",
                "Web Development",
                "Scalable Web Applications",
                "Performance Optimization",
                "Responsive Design",
                "Next.js SEO",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ayush Jaiswal Portfolio",
              url: "https://ayushjaiswal.vercel.app",
              description:
                "Official portfolio website of Ayush Jaiswal, Senior Frontend Developer specializing in React.js, Next.js, and scalable web applications.",
              inLanguage: "en",
              author: {
                "@type": "Person",
                name: "Ayush Jaiswal",
              },
            }),
          }}
        />

        <Header />
        <ScrollProgressBar />
        <div className="pt-20">{children}</div>
        <Footer />

      </body>
    </html>
  );
}
