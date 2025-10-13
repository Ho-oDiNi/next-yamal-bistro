import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function SeoSectionContainer({ children }: Props) {
    return (
        <section className="to-brand-primary relative bg-gradient-to-b from-[#007dc6] py-12 text-xl font-light text-white">
            {children}
        </section>
    );
}
