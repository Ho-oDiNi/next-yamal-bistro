import { ReactNode } from "react";

type DishSectionContainerProps = {
    children: ReactNode;
};

export const DishSectionContainer = ({
    children,
}: DishSectionContainerProps) => {
    return (
        <section
            id="section-contacts"
            className="relative px-2 py-6 xl:py-16"
            itemScope
            itemType="https://schema.org/MenuItem"
        >
            <div className="container mx-auto space-y-8 rounded-3xl bg-white p-8 xl:p-16">
                {children}
            </div>
        </section>
    );
};
