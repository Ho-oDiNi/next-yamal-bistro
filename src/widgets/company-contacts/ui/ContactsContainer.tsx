import { ReactNode } from "react";

type ContactsContainerProps = {
    children: ReactNode;
};

export const ContactsContainer = ({ children }: ContactsContainerProps) => {
    return (
        <section id="section-contacts" className="relative p-2">
            <div className="container mx-auto rounded-3xl bg-white p-8">
                {children}
            </div>
        </section>
    );
};
