"use client";

import closeIcon from "@icons/close-blue-dark.svg";
import Image from "next/image";

import AdminActionForm from "../../admin-menu-service";
import { AdminAction } from "../model";

interface ActionSidebarProps {
    mode: AdminAction;
    onClose: () => void;
}

export const ActionSidebar = ({ mode, onClose }: ActionSidebarProps) => {
    return (
        <aside className="fixed top-0 z-99 m-4 w-full lg:relative lg:w-2/3">
            <div className="no-scrollbar sticky top-20 max-h-[85vh] overflow-y-auto rounded-2xl border-2 border-black bg-slate-50 inset-shadow-sm/30">
                <button type="button" onClick={onClose}>
                    <Image
                        src={closeIcon}
                        className="absolute top-5 right-5 h-10 w-10 rounded-full"
                        alt="Закрыть"
                    />
                </button>

                <AdminActionForm mode={mode} onClose={onClose} />
            </div>
        </aside>
    );
};
