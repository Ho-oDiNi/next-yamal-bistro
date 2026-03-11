"use client";

import { PropsWithChildren } from "react";

import { useIsAdmin } from "../lib/useIsAdmin";

export const AdminGate = ({ children }: PropsWithChildren) => {
    const isAdmin = useIsAdmin();

    if (!isAdmin) {
        return null;
    }

    return <>{children}</>;
};
