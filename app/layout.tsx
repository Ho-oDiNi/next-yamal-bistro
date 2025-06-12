import "./globals.css";
import type { Metadata } from "next";
import React from "react";

import Footer from "@/app/_components/shared/Footer";
import Header from "@/app/_components/shared/Header";
import SecessionFont from "@/app/_components/ui/SecessionFont";

export const metadata: Metadata = {
    title: "Ямал Бистро | Кафе открытой кухни | Доставка еды в Салехарде SEO",
    description: "Описание для SEO",
};

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${SecessionFont.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
