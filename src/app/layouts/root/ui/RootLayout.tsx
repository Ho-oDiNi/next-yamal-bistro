import { ReactNode } from "react";

import { YandexMetrika } from "@/app/analytics";
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
                className={`${FontSecession.className} bg-slate-200 antialiased`}
            >
                <YandexMetrika />
                <ModalProvider>
                    <Header />
                    <main className="text-neutral-900">{children}</main>
                    <ModalRenderer />
                    <Footer />
                </ModalProvider>
            </body>
        </html>
    );
};
