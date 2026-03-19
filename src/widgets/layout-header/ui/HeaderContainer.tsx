import { ReactNode } from "react";

type HeaderContainerProps = { children: ReactNode };

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
    return (
        <header
            className="text-brand-dark text-h4 sticky top-0 z-99 bg-white/90 backdrop-blur-md"
            itemScope
            itemType="https://schema.org/WPHeader"
        >
            <div className="flex-between container mx-auto p-4">{children}</div>
        </header>
    );
};
