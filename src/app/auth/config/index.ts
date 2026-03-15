import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Yandex from "next-auth/providers/yandex";

import { prisma } from "@/shared/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "database" },
    trustHost: true,

    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
        Yandex({
            clientId: process.env.AUTH_YANDEX_ID!,
            clientSecret: process.env.AUTH_YANDEX_SECRET!,
            authorization: {
                url: "https://oauth.yandex.ru/authorize",
                params: {
                    scope: "login:email login:info",
                },
            },
        }),
    ],

    callbacks: {
        async session({ session, user }) {
            if (!session.user) return session;

            session.user.id = user.id;
            session.user.role = user.role ?? undefined;

            return session;
        },
    },
});
