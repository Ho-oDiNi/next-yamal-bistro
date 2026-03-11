"use client";

import { useEffect } from "react";

import { cn } from "@/shared/lib/cn";

interface MessagePopupProps {
    message: string;
    success: boolean | null;
    autoCloseMs?: number;
    onClose: () => void;
}

export const MessagePopup = ({
    message,
    success,
    autoCloseMs = 3000,
    onClose,
}: MessagePopupProps) => {
    useEffect(() => {
        if (!autoCloseMs) {
            return;
        }

        const timer = window.setTimeout(() => {
            onClose();
        }, autoCloseMs);

        return () => {
            window.clearTimeout(timer);
        };
    }, [autoCloseMs, onClose]);

    if (!message) {
        return null;
    }

    return (
        <div
            className={cn(
                "rounded-2xl border p-8 shadow-2xl",
                success
                    ? "border-green-900 bg-green-200 text-green-700"
                    : "border-red-900 bg-red-200 text-red-700",
            )}
        >
            <p className="text-xl">{message}</p>
        </div>
    );
};
