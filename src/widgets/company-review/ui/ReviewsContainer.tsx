import { ReactNode } from "react";

type ReviewsContainerProps = {
    children: ReactNode;
};

export const ReviewsContainer = ({ children }: ReviewsContainerProps) => {
    return (
        <section id="section-reviews" className="p-2">
            <div className="relative container mx-auto rounded-3xl bg-white p-8">
                {children}
            </div>
        </section>
    );
};
