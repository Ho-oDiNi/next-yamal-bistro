"use client";
import { RoundedButton } from "@/shared/ui/StyledButton/";

import closeIcon from "@icons/close-blue.svg";

import { AdminAction } from "../model";
import { RedactorWrapper } from "./RedactorWrapper";

interface AdminSidebarProps {
    mode: AdminAction;
    onClose: () => void;
}

export const AdminSidebar = ({ mode, onClose }: AdminSidebarProps) => {
    return (
        <aside className="fixed top-0 z-999 w-full">
            <div className="no-scrollbar sticky top-20 max-h-screen overflow-y-auto rounded-2xl border-2 border-black bg-slate-50 inset-shadow-sm/30">
                <RoundedButton
                    icon={closeIcon}
                    callback={onClose}
                    className="fixed top-5 right-5"
                />

                <RedactorWrapper mode={mode} onClose={onClose} />
            </div>
        </aside>
    );
};
