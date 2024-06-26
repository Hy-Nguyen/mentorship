import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Next.js",
  description:
    "Dashboard for all your mentorship purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main>
        <body
          className={`${inter.className} main-bg`}
        >
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </body>
      </main>
    </html>
  );
}
