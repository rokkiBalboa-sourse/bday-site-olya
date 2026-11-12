import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Оля 🎂",
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased selection:bg-pink-200 selection:text-pink-900">
        {children}
      </body>
    </html>
  );
}
