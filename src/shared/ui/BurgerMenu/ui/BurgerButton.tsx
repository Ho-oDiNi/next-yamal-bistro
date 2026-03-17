"use client";

import Image from "next/image";

import { useModal } from "@/shared/lib/modal-node";

import burgerIcon from "@icons/burger-blue.svg";

import { BurgerMenu } from "./BurgerMenu";

export const BurgerButton = () => {
    const { openDialog, closeModal } = useModal();

    const handleOpen = () => {
        openDialog(<BurgerMenu onClose={closeModal} />)("w-full");
    };

    return (
        <button onClick={() => handleOpen()} className="block lg:hidden">
            <Image src={burgerIcon} alt="Открыть меню навигации" />
        </button>
    );
};
