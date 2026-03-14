"use client";

import pencilIcon from "@icons/pencil-blue-dark.svg";
import plusIcon from "@icons/plus-blue-dark.svg";
import trashIcon from "@icons/trash-red-fill.svg";
import { usePathname } from "next/navigation";

import { ActionButton } from "./ActionButton";

interface ActionMenuProps {
    onCreate: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

export const ActionMenu = ({ onCreate, onEdit, onDelete }: ActionMenuProps) => {
    const pathname = usePathname();
    const isDishesRoot = pathname === "/dishes";

    return (
        <menu className="fixed right-5 bottom-5 z-99 flex flex-col gap-4 rounded-3xl p-2 shadow-2xl backdrop-blur-xl">
            <ActionButton icon={plusIcon} callback={onCreate} />
            {!isDishesRoot && (
                <>
                    <ActionButton icon={pencilIcon} callback={onEdit} />
                    <ActionButton icon={trashIcon} callback={onDelete} />
                </>
            )}
        </menu>
    );
};
