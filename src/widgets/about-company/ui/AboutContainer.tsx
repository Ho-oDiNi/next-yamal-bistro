import { ReactNode } from "react";

import { SpinningSun } from "./SpinningSun";

type AboutContainerProps = {
    children: ReactNode;
};

export const AboutContainer = ({ children }: AboutContainerProps) => {
    return (
        <section className="bg-brand-bg relative overflow-hidden">
            <div className="container mx-auto flex flex-col gap-30 p-4 py-6 text-white md:py-16">
                {children}
            </div>
            <SpinningSun isCenter={false} />
        </section>
    );
};
