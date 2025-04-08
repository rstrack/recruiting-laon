import '@fortawesome/fontawesome-svg-core/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import { Header } from "@/components/Header";

import "./globals.css";
import "../css/custom.css"

import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext';
import { Metadata } from 'next';

config.autoAddCss = false;

export const metadata: Metadata = {
    title: 'Laon Streaming',
    description: 'Explore um catálogo completo de filmes e séries com sinopses, trailers e muito mais',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="pt-BR" className={inter.className}>
            <AuthProvider>
                <body>
                    <Header />
                    {children}
                </body>
            </AuthProvider>
        </html>
    );
}
