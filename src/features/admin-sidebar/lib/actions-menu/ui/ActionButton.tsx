"use client";

import Image, { StaticImageData } from "next/image";

import { cn } from "@/shared/lib/cn";

interface ActionButtonProps {
    icon: StaticImageData;
    callback?: () => void;
    className?: string;
}

export const ActionButton = ({
    icon,
    callback,
    className = "",
}: ActionButtonProps) => {
    return (
        <button
            className={cn(
                "h-10 w-10 rounded-full bg-white hover:bg-slate-300",
                className,
            )}
            onClick={callback}
        >
            <Image src={icon} className="w-full" alt="" />
        </button>
    );
};
