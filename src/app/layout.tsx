import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-oswald" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Ocularis | Premium Eyewear",
  description: "Modern, premium eyeglasses and sunglasses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${manrope.variable} min-h-screen flex flex-col bg-[#fafafa] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white`}>
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
