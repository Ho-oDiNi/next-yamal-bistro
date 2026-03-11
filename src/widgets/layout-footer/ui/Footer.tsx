import { FooterBottom } from "./FooterBottom";
import { FooterContainer } from "./FooterContainer";
import { FooterTop } from "./FooterTop";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterTop />
            <hr className="my-6 rounded-3xl border border-gray-200" />
            <FooterBottom />
        </FooterContainer>
    );
};
