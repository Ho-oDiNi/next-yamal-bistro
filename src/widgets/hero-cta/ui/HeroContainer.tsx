import { ReactNode } from "react";

type HeroContainerProps = {
    children: ReactNode;
    className?: string;
};

export const HeroContainer = ({ children, className }: HeroContainerProps) => {
    return (
        <section className="h-screen bg-[url(/images/home.png)] bg-cover bg-bottom bg-no-repeat">
            <div className={className}>{children}</div>
        </section>
    );
};
