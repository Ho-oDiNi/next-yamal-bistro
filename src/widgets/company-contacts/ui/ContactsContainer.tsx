import { ReactNode } from "react";

type ContactsContainerProps = {
    children: ReactNode;
};

export const ContactsContainer = ({ children }: ContactsContainerProps) => {
    return (
        <section className="relative px-2 py-6 xl:py-16">
            <div className="container mx-auto rounded-3xl bg-white p-8 xl:p-16">
                {children}
            </div>
        </section>
    );
};
