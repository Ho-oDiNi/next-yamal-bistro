import { ReactNode } from "react";

export default function FieldWrapper({
    id,
    label,
    children,
}: {
    id: string;
    label: string;
    children: ReactNode;
}) {
    return (
        <label htmlFor={id} className="flex w-full flex-col gap-2">
            <span className="text-sm/6 opacity-90">{label}</span>
            {children}
        </label>
    );
}
