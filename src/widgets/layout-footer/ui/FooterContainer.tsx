import { ReactNode } from "react";

type FooterContainerProps = {
    children: ReactNode;
};

export const FooterContainer = ({ children }: FooterContainerProps) => {
    return (
        <footer
            className="font-roboto text-accent-sm px-2 py-6 md:py-16"
            itemScope
            itemType="https://schema.org/WPFooter"
        >
            <div className="container mx-auto rounded-3xl bg-white p-8 xl:p-16">
                {children}
            </div>
        </footer>
    );
};
