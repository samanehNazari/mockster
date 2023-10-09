import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Mockster: Free Fake REST API",
  description: "Free Fake REST API",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-neutral-900 text-slate-900 dark:text-white">
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
