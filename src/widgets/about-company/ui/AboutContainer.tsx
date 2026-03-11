import { ReactNode } from "react";

import { SpinningSun } from "./SpinningSun";

type AboutContainerProps = {
    children: ReactNode;
};

export const AboutContainer = ({ children }: AboutContainerProps) => {
    return (
        <section className="relative overflow-hidden bg-[#007dc6]">
            <div className="container mx-auto flex flex-col gap-30 p-4 py-16 text-white">
                {children}
            </div>
            <SpinningSun isCenter={false} />
        </section>
    );
};
