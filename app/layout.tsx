import "@/styles/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/structure/Header";
import { Footer } from "@/components/structure/Footer";
import { Secession } from "@/components/ui/Fonts";

export const metadata: Metadata = {
    title: "Ямал Бистро | Кафе открытой кухни | Доставка еды в Салехарде SEO",
    description: "Описание для SEO",
};

export default function RootLayout({
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
