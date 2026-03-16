"use client";

import { usePathname } from "next/navigation";

import pencilIcon from "@icons/pencil-blue.svg";
import plusIcon from "@icons/plus-blue.svg";
import trashIcon from "@icons/trash-red.svg";

import { ActionButton } from "./ActionButton";

interface ActionsMenuProps {
    onCreate: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

export const ActionsMenu = ({
    onCreate,
    onEdit,
    onDelete,
}: ActionsMenuProps) => {
    const pathname = usePathname();
    const isDishesRoot = pathname === "/dishes";

    return (
        <menu className="fixed right-5 bottom-5 z-99 flex flex-col gap-4 rounded-3xl p-2 shadow-2xl backdrop-blur-xl">
            <ActionButton icon={plusIcon} callback={onCreate} />
            {isDishesRoot && (
                <>
                    <ActionButton icon={pencilIcon} callback={onEdit} />
                    <ActionButton icon={trashIcon} callback={onDelete} />
                </>
            )}
        </menu>
    );
};
