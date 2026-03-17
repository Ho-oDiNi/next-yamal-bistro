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
            <h3 className={cn("text-contrast mb-2 md:mb-6", titleClassName)}>
                {title}
            </h3>
            <div className="text-accent font-roboto">{children}</div>
        </div>
    );
};
