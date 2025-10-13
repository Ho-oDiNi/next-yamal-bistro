import { ReactNode } from "react";

type HeroSectionContainerProps = {
    backgroundUrl: string;
    children: ReactNode;
};

export default function HeroSectionContainer({
    backgroundUrl,
    children,
}: HeroSectionContainerProps) {
    return (
        <section
            className="relative h-screen bg-cover bg-bottom bg-no-repeat pt-[25vh]"
            style={{ backgroundImage: `url(${backgroundUrl})` }}
        >
            <div className="container mx-auto max-w-5xl">{children}</div>
        </section>
    );
}
