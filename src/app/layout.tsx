import type { Metadata } from "next";
import { Archivo, Raleway } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from '@/app/components/layout-wrapper';
import { AnimatePresence } from "framer-motion";


const archivo = Archivo({ subsets: ["latin"], weight: ["300", "400", "500", "600"], style: ['normal'], variable: "--font-archivo" });
const raleway = Raleway({ subsets: ["latin"], weight: ["300", "500", "600", "700"], style: ['normal'], variable: "--font-raleway" });


export const metadata: Metadata = {
  title: "Monkey Label",
  description: "Films",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="any" />
      </head>
      <body style={{ backgroundColor: 'white' }}
        className={`${archivo.variable} ${raleway.variable} antialiased`}
      >
        <AnimatePresence>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </AnimatePresence>

      </body>
    </html>
  );
}
