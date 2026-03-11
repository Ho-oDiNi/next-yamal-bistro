import { ReactNode } from "react";

type ContactsInfoColumnProps = { children: ReactNode };

export const ContactsInfoColumn = ({ children }: ContactsInfoColumnProps) => {
    return (
        <div className="xs:gap-8 flex flex-1 flex-col justify-between gap-2 md:max-w-1/2">
            {children}
        </div>
    );
};
