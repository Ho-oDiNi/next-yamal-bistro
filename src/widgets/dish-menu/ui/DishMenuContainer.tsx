import { ReactNode } from "react";

type DishMenuContainerProps = {
    children: ReactNode;
};

export const DishMenuContainer = ({ children }: DishMenuContainerProps) => {
    return (
        <section id="section-contacts" className="relative px-2 py-16">
            <div className="container mx-auto space-y-8 rounded-3xl bg-white p-8">
                {children}
            </div>
        </section>
    );
};
