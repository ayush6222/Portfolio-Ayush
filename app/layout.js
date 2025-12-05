import './styles/globals.css'

export const metadata = {
  title: "Ayush's Portfolio",
  description: "UI Developer Portfolio — React | Next.js | Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
