"use client";

import { RoundedButton } from "@/shared/ui/StyledButton/";

import closeIcon from "@icons/close-blue.svg";

import { AdminAction } from "../model";
import { RedactorWrapper } from "./RedactorWrapper";

interface RedactorDialogContentProps {
    mode: AdminAction;
    onClose: () => void;
}

export const RedactorDialogContent = ({
    mode,
    onClose,
}: RedactorDialogContentProps) => {
    return (
        <div className="font-roboto relative w-full overflow-hidden rounded-2xl bg-slate-50">
            <RoundedButton
                icon={closeIcon}
                callback={onClose}
                className="absolute top-4 right-4 z-10"
            />

            <div className="overflow-y-auto p-4">
                <RedactorWrapper mode={mode} />
            </div>
        </div>
    );
};
