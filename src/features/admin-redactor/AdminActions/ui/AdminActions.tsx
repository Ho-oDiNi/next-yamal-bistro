"use client";

import { ActionMenu } from "./ActionMenu";
import { ActionSidebar } from "./AdminSidebar";
import { useAdminActions } from "../lib/useAdminActions";

export const AdminActions = () => {
    const { activeAction, openAction, closeAction } = useAdminActions();

    return activeAction ? (
        <ActionSidebar mode={activeAction} onClose={closeAction} />
    ) : (
        <ActionMenu
            onCreate={() => openAction("create")}
            onEdit={() => openAction("edit")}
            onDelete={() => openAction("delete")}
        />
    );
};
