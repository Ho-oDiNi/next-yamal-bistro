"use client";

import Image from "next/image";

import { cn } from "@/shared/lib/cn";

import spinnerIcon from "@icons/spinner-blue.svg";

interface SpinningLoaderProps {
    text?: string;
    fullScreen?: boolean;
}

export const SpinningLoader = ({
    text = "Загрузка...",
    fullScreen = false,
}: SpinningLoaderProps) => {
    return (
        <div
            className={cn(
                "flex-center w-full flex-col gap-4",
                fullScreen ? "min-h-screen" : "min-h-50",
            )}
        >
            <Image
                src={spinnerIcon}
                alt={text}
                className="relative h-20 w-20 animate-spin"
            />

            <p className="text-lg font-medium">{text}</p>
        </div>
    );
};
