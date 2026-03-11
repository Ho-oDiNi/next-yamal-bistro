import { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

type InfoGroupProps = {
    title: string;
    children: ReactNode;
    titleClassName?: string;
};

export const InfoGroup = ({
    title,
    children,
    titleClassName = "",
}: InfoGroupProps) => {
    return (
        <div>
            <h3 className={cn("text-h3", titleClassName)}>{title}</h3>
            {children}
        </div>
    );
};
