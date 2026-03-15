import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import { YandexMetrika } from "@/app/analytics";
import { AdminGate, AdminGate, auth } from "@/app/auth";
import { AdminRedactor } from "@/features/admin-redactor";
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
                        <main className="text-brand-dark">{children}</main>
                        <ModalRenderer />
                        <Footer />
                        <AdminGate>
                            <AdminRedactor />
                        </AdminGate>
                    </ModalProvider>
                </SessionProvider>
            </body>
        </html>
    );
};
