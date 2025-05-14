import "@/styles/globals.css";
import type { Metadata } from "next";
import React from "react";

import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import { Secession } from "@/components/ui/Fonts";

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
            <body className={`${Secession.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
