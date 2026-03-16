"use client";

import { useState } from "react";

import { AdminAction } from "../model";

export const useAdminActions = () => {
    const [activeAction, setActiveAction] = useState<AdminAction | null>(null);

    return {
        activeAction,
        openAction: setActiveAction,
        closeAction: () => setActiveAction(null),
    };
};
