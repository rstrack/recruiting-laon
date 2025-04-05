import '@fortawesome/fontawesome-svg-core/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import { Header } from "@/components/Header";

import "./globals.css";

import { Inter } from 'next/font/google'

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={inter.className}>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
