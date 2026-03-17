import { ReactNode } from "react";

type ReviewsContainerProps = {
    children: ReactNode;
};

export const ReviewsContainer = ({ children }: ReviewsContainerProps) => {
    return (
        <section className="px-2 py-6 xl:py-16">
            <div className="relative container mx-auto rounded-3xl bg-white p-8 xl:p-16">
                {children}
            </div>
        </section>
    );
};
