import { ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

export interface StyledSectionProps {
    sectionClassName?: string;
    divClassName?: string;
    children: ReactNode;
}

export const StyledSection = ({
    sectionClassName = "",
    divClassName = "flex-center flex-col",
    children,
}: StyledSectionProps) => {
    return (
        <section
            className={cn(sectionClassName, "px-4 py-12 md:py-6 xl:py-16")}
        >
            <div className={cn(divClassName, "container mx-auto gap-10")}>
                {children}
            </div>
        </section>
    );
};
