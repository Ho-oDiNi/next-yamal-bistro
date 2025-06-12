import "@/app/globals.css";
import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import SecessionFont from "@/components/ui/SecessionFont";

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
