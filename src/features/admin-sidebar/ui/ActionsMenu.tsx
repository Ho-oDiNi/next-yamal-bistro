"use client";

import { usePathname } from "next/navigation";

import { RoundedButton } from "@/shared/ui/StyledButton/ui/RoundedButton";

import pencilIcon from "@icons/pencil-blue.svg";
import plusIcon from "@icons/plus-blue.svg";
import trashIcon from "@icons/trash-red.svg";

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
    const isDishesRoot = pathname === "/dish";

    return (
        <menu className="fixed right-5 bottom-5 z-99 flex flex-col gap-4 rounded-3xl p-2 shadow-2xl backdrop-blur-xl">
            <RoundedButton icon={plusIcon} callback={onCreate} />
            {isDishesRoot && (
                <>
                    <RoundedButton icon={pencilIcon} callback={onEdit} />
                    <RoundedButton icon={trashIcon} callback={onDelete} />
                </>
            )}
        </menu>
    );
};
