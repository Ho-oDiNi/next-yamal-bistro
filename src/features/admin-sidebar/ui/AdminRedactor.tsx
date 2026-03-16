"use client";

import { ActionsMenu } from "./ActionsMenu";
import { AdminSidebar } from "./AdminSidebar";
import { useAdminActions } from "../lib/useAdminActions";

export const AdminRedactor = () => {
    const { activeAction, openAction, closeAction } = useAdminActions();

    return activeAction ? (
        <AdminSidebar mode={activeAction} onClose={closeAction} />
    ) : (
        <ActionsMenu
            onCreate={() => openAction("create")}
            onEdit={() => openAction("edit")}
            onDelete={() => openAction("delete")}
        />
    );
};
