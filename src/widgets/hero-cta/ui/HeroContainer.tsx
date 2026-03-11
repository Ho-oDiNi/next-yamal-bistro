import Image from "next/image";
import { ReactNode } from "react";

import homeImg from "@images/home.png";

type HeroContainerProps = {
    children: ReactNode;
    className?: string;
};

export const HeroContainer = ({ children, className }: HeroContainerProps) => {
    return (
        <section className="h-screen">
            <Image
                src={homeImg}
                alt=""
                className="absolute -z-1 h-full w-full object-cover"
            />
            <div className={className}>{children}</div>
        </section>
    );
};
