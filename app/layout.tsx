'use client'
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { Web3ModalProvider } from "@/contexts/Web3Modal";


interface RootLayoutProps {
  children: ReactNode;
}


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "900"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Web3ModalProvider>
        <body className={`bg-whiteBackground ${poppins.className}`}>
          <NavBar />
          {children}
        </body>
      </Web3ModalProvider>
    </html>
  );
}
