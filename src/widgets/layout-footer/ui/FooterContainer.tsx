import { ReactNode } from "react";

type FooterContainerProps = {
    children: ReactNode;
};

export const FooterContainer = ({ children }: FooterContainerProps) => {
    return (
        <footer className="font-roboto text-xs font-light sm:text-sm md:text-xl">
            <div className="container mx-auto rounded-3xl bg-white p-8">
                {children}
            </div>
        </footer>
    );
};
