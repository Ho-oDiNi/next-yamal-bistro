"use client";

import Image, { StaticImageData } from "next/image";

import { cn } from "@/shared/lib/cn";

interface RoundedButtonProps {
    icon: StaticImageData;
    callback?: () => void;
    className?: string;
}

export const RoundedButton = ({
    icon,
    callback,
    className = "bg-white",
}: RoundedButtonProps) => {
    return (
        <button
            className={cn("h-10 w-10 rounded-full hover:opacity-70", className)}
            onClick={callback}
        >
            <Image src={icon} className="w-full" alt="" />
        </button>
    );
};
