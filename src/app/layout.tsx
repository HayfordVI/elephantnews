import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Cards from "@/components/cards/cards";
import Menu from "@/components/menu/Menu";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElephantNewsgh",
  description: "Visit ElephantNewsgh for trusted reporting on the latest world and Ghana news, politics, business, climate and much more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />   
          </div>
        </div>
        
      </body>
    </html>
  );
}
