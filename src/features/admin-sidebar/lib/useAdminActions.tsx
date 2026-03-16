"use client";

import { useModal } from "@/shared/lib/modal-node";

import { AdminAction } from "../model";
import { RedactorDialogContent } from "../ui/RedactorDialogContent";

export const useAdminActions = () => {
    const { openDialog, closeModal } = useModal();

    const openAction = (action: AdminAction) => {
        openDialog(
            {
                component: RedactorDialogContent,
                props: {
                    mode: action,
                    onClose: closeModal,
                },
            },
            "no-scrollbar w-full",
        );
    };

    return {
        openAction,
        closeAction: closeModal,
    };
};
