import HeroActions from "./HeroActions";
import HeroSectionContainer from "./HeroSectionContainer";
import HeroTitle from "./HeroTitle";
import { HERO_BG_URL, HERO_CTAS } from "./home.data";

const HeroSection = () => {
    return (
        <HeroSectionContainer backgroundUrl={HERO_BG_URL}>
            <HeroTitle />
            <HeroActions
                delivery={HERO_CTAS.delivery}
                reserve={HERO_CTAS.reserve}
            />
        </HeroSectionContainer>
    );
};

export default HeroSection;
