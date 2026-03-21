import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import { YandexMetrika } from "@/app/analytics";
import { AdminGate, auth } from "@/app/auth";
import { AdminRedactor } from "@/features/admin-sidebar";
import { cn } from "@/shared/lib/cn";
import { FontRoboto } from "@/shared/lib/font-roboto";
import { FontSecession } from "@/shared/lib/fonts-secession";
import { ModalProvider, ModalRenderer } from "@/shared/lib/modal-node";
import { CookieConsent } from "@/shared/ui/CookieConsent";
import { ScrollToTopButton } from "@/shared/ui/ScrollToTopButton";
import { Footer } from "@/widgets/layout-footer";
import { Header } from "@/widgets/layout-header";

import { RootMeta } from "./RootMeta";

export const RootLayout = async ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    const session = await auth();

    return (
        <html lang="ru">
            <body
                className={cn(
                    FontSecession.variable,
                    FontRoboto.variable,
                    "font-secession bg-slate-200 antialiased",
                )}
            >
                <SessionProvider session={session}>
                    <YandexMetrika />
                    <ModalProvider>
                        <Header />
                        <main
                            className="text-brand-dark"
                            itemScope
                            itemType="https://schema.org/Restaurant"
                        >
                            <RootMeta />
                            {children}
                        </main>
                        <ModalRenderer />
                        <Footer />
                        <AdminGate>
                            <AdminRedactor />
                        </AdminGate>
                    </ModalProvider>
                </SessionProvider>
                <CookieConsent />
                <ScrollToTopButton />
            </body>
        </html>
    );
};
