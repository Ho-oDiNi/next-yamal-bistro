import { ReactNode } from "react";

type ContactsSectionLayoutProps = {
    id?: string;
    children: ReactNode;
};

export default function ContactsSectionLayout({
    id = "section-contacts",
    children,
}: ContactsSectionLayoutProps) {
    return (
        <section id={id} className="relative bg-[#EBEBEB] px-24 py-12">
            <div className="container mx-auto h-auto rounded-[26px] bg-white px-24 py-20">
                {children}
            </div>
        </section>
    );
}
