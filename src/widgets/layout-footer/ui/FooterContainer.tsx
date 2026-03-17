import { ReactNode } from "react";

type FooterContainerProps = {
    children: ReactNode;
};

export const FooterContainer = ({ children }: FooterContainerProps) => {
    return (
        <footer className="font-roboto px-2 py-6 text-xs font-light sm:text-sm md:py-16 md:text-xl">
            <div className="container mx-auto rounded-3xl bg-white p-8 xl:p-16">
                {children}
            </div>
        </footer>
    );
};
