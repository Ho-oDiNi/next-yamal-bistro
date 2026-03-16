"use client";

import { ActionsMenu, useAdminActions } from "../lib/actions-menu";
import { AdminSidebar } from "../lib/redactor-sidebar";

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
