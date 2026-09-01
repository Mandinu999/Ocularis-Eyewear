import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} ${manrope.variable} min-h-screen flex flex-col bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <CartProvider>
            <Navbar />
            <CartSidebar />
            <main className="flex-grow pt-20 flex flex-col">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
