import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Ayush's Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black transition-colors">
        <Header />
        {/* Add padding to push hero below navbar */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
