import { ReactNode } from "react";

import { YandexMetrika } from "@/app/analytics";
import { cn } from "@/shared/lib/cn";
import { FontRoboto } from "@/shared/lib/font-roboto";
import { FontSecession } from "@/shared/lib/fonts-secession";
import { ModalProvider, ModalRenderer } from "@/shared/lib/modal-node";
import { Footer } from "@/widgets/layout-footer";
import { Header } from "@/widgets/layout-header";

export const RootLayout = async ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <html lang="ru">
            <body
                className={cn(
                    FontSecession.variable,
                    FontRoboto.variable,
                    "font-secession bg-slate-200 antialiased",
                )}
            >
                <YandexMetrika />
                <ModalProvider>
                    <Header />
                    <main className="text-brand-dark">{children}</main>
                    <ModalRenderer />
                    <Footer />
                </ModalProvider>
            </body>
        </html>
    );
};
