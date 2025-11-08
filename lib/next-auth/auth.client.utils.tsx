"use client";

import { useSession } from "next-auth/react";
import { logger } from "../logger";
import { PropsWithChildren } from "react";

export const useIsAdmin = (): boolean => {
    const session = useSession();

    try {
        return session.data?.user?.role === "ADMIN";
    } catch (error) {
        logger.error("[auth/server] Failed to resolve admin session", {
            error,
        });
        return false;
    }
};

export const AdminGate = ({ children }: PropsWithChildren) => {
    if (!useIsAdmin()) return null;
    return <>{children}</>;
};
