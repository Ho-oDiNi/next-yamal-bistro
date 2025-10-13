import HeaderContacts from "./HeaderContacts";
import HeaderContainer from "./HeaderContainer";
import HeaderLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavbar";

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderLogo />
            <HeaderNavbar />
            <HeaderContacts />
        </HeaderContainer>
    );
}
