"use client";

import closeIcon from "@icons/close-blue.svg";

import { AdminAction } from "../../actions-menu/model";
import { ActionButton } from "../../actions-menu/ui/ActionButton";

interface AdminSidebarProps {
    mode: AdminAction;
    onClose: () => void;
}

export const AdminSidebar = ({ mode, onClose }: AdminSidebarProps) => {
    return (
        <aside className="fixed top-0 z-99 m-4 w-full lg:relative lg:w-2/3">
            <div className="no-scrollbar sticky top-20 max-h-[85vh] overflow-y-auto rounded-2xl border-2 border-black bg-slate-50 inset-shadow-sm/30">
                <ActionButton
                    icon={closeIcon}
                    callback={onClose}
                    className="absolute top-5 right-5"
                />

                {/* <AdminRedactorForm mode={mode} onClose={onClose} /> */}
            </div>
        </aside>
    );
};
