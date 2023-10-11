import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "@package/header";

export const metadata: Metadata = {
  title: "Mockster: Free Fake REST API",
  description: "Free Fake REST API",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-neutral-900 text-slate-900 dark:text-white">
        <NavBar
          title="Mockster"
          navList={[
            { text: "Twitter", href: "/posts" },
            { text: "Todo" },
            { text: "Gallery" },
            { text: "Movies" },
          ]}
        />
        <main className="container">{children}</main>
        <Footer>
          <div className="text-xs text-neutral-500">
            Built by @samanehNazari | ©2023. All Rights Reserved
          </div>
        </Footer>
      </body>
    </html>
  );
}
