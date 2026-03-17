import { ReactNode } from "react";

type InfoGroupProps = {
    title: string;
    description: string;
    children: ReactNode;
};

export const InfoGroup = ({ title, children, description }: InfoGroupProps) => {
    return (
        <div className="xs:gap-8 flex flex-1 flex-col gap-2 lg:max-w-1/2">
            <div className="flex-between text-contrast">
                <h3>{title}</h3>
                <p className="font-light">{description}</p>
            </div>
            <div className="text-accent font-roboto">{children}</div>
        </div>
    );
};
