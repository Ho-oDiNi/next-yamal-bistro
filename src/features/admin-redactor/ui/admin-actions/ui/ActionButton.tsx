"use client";

import Image, { StaticImageData } from "next/image";

interface ActionButtonProps {
    icon: StaticImageData;
    callback?: () => void;
}

export const ActionButton = ({ icon, callback }: ActionButtonProps) => {
    return (
        <button
            className="h-10 w-10 rounded-full bg-white hover:bg-slate-300"
            onClick={callback}
        >
            <Image src={icon} className="w-full" alt="" />
        </button>
    );
};
