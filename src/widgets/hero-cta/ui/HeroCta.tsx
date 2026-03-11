import { CtaLinks } from "./CtaLinks";
import { CtaTitle } from "./CtaTitle";
import { HeroContainer } from "./HeroContainer";

export const HeroCta = () => {
    return (
        <HeroContainer className="absolute-center container mx-auto flex flex-col gap-20 p-4">
            <CtaTitle />
            <CtaLinks />
        </HeroContainer>
    );
};
