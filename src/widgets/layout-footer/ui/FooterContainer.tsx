import { ReactNode } from "react";

type FooterContainerProps = {
    children: ReactNode;
};

export const FooterContainer = ({ children }: FooterContainerProps) => {
    return (
        <footer className="text-main px-2 py-16">
            <div className="container mx-auto rounded-3xl bg-white p-8">
                {children}
            </div>
        </footer>
    );
};
