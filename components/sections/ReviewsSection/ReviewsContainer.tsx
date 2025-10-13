import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function ReviewsContainer({ children }: Props) {
    return (
        <section
            id="section-reviews"
            className="bg-gradient-to-b from-[#f7fcfe] to-[#EBEBEB] px-24 py-12"
        >
            <div className="relative container mx-auto rounded-[26px] bg-white px-24 py-20">
                {children}
            </div>
        </section>
    );
}
