import { ReactNode } from "react";
import { Poppins } from 'next/font/google';

import "@/app/styles/global.scss";
import "@/app/styles/reset.scss";

import { Header } from "@/app/components/Header/Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Market',
  description: 'Shop with clothes',
}

export default function RootLayout({
  children,
}: 
Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en" className={poppins.className}>
            <body>
                <Header />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
};