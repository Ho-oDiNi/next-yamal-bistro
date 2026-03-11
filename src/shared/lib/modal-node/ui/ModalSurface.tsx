"use client";

import Image from "next/image";
import { forwardRef, MouseEvent, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

import closeIcon from "@icons/close-blue.svg";

import { ModalVariant } from "../model";

interface ModalSurfaceProps {
    onClose: () => void;
    children: ReactNode;
    className?: string;
    variant: ModalVariant;
}

export const ModalSurface = forwardRef<
    HTMLDialogElement | null,
    ModalSurfaceProps
>(({ onClose, children, className = "", variant }, ref) => {
    const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <dialog
            ref={ref}
            onClick={handleBackdropClick}
            className={cn(
                "fixed bottom-8 z-999 mx-auto border-0 bg-transparent p-2 md:top-24 md:bottom-0",
                variant === "dialog" && "backdrop:bg-black/50",
                className,
            )}
        >
            <button
                type="button"
                className="absolute top-5 right-5"
                onClick={onClose}
            >
                <Image
                    src={closeIcon}
                    alt="Закрыть"
                    className="h-4 w-4 hover:opacity-70"
                />
            </button>

            {children}
        </dialog>
    );
});

ModalSurface.displayName = "ModalSurface";
