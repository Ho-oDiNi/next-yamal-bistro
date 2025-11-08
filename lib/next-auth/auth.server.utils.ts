"use server";

import { auth } from "@/lib/next-auth/next-auth.config";
import { logger } from "../logger";

export const isAdminServerSide = async (): Promise<boolean> => {
    try {
        const session = await auth();
        return session?.user?.role === "ADMIN";
    } catch (error) {
        logger.error("[auth/server] Failed to resolve admin session", {
            error,
        });
        return false;
    }
};
