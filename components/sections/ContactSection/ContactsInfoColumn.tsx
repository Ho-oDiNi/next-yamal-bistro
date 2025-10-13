import { ReactNode } from "react";

type ContactsInfoColumnProps = { children: ReactNode };

export default function ContactsInfoColumn({
    children,
}: ContactsInfoColumnProps) {
    return <div className="max-w-[25%] flex-1">{children}</div>;
}
