'use client'

import '@fortawesome/fontawesome-svg-core/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import { Header } from "@/components/Header";

import "./globals.css";
import "../css/custom.css"

import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext';
import { useEffect } from 'react';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    useEffect(() => {
        // necessary to use boostrap third-party functions (popovers, dropdowns)
        import('bootstrap/dist/js/bootstrap.bundle.min.js' as string);
    })

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
