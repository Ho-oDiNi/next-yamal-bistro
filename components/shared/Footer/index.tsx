import FooterAppPromo from "./FooterAppPromo";
import FooterBrandBar from "./FooterBrandBar";
import FooterColumns from "./FooterColumns";
import FooterContactList from "./FooterContactList";
import FooterContainer from "./FooterContainer";
import FooterLegalLinks from "./FooterLegalLinks";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterColumns>
                <FooterContactList />
                <FooterLegalLinks />
                <FooterAppPromo />
            </FooterColumns>

            <FooterBrandBar />
        </FooterContainer>
    );
}
