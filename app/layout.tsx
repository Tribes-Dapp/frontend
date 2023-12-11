'use client'
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { Web3ModalProvider } from "@/contexts/Web3Modal";
import React from "react";

interface RootLayoutProps {
  children: ReactNode;
}


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "900"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <title>Tribes</title>
      <link rel='icon' href='/icon.svg' type="image/svg"  />
      <Web3ModalProvider>
        <body className={`bg-whiteBackground ${poppins.className}`}>
          <NavBar />
          {children}
        </body>
      </Web3ModalProvider>
    </html>
  );
}
