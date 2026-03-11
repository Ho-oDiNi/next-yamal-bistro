import { Logo } from "@/shared/ui/Logo";
import { MobileMenuButton } from "@/shared/ui/MobileMenu";

import { HeaderContacts } from "./HeaderContacts";
import { HeaderContainer } from "./HeaderContainer";
import { HeaderMobilePhone } from "./HeaderMobilePhone";
import { HeaderNavbar } from "./HeaderNavbar";

export const Header = () => {
    return (
        <HeaderContainer>
            <MobileMenuButton />
            <Logo />
            <HeaderNavbar />
            <HeaderContacts />
            <HeaderMobilePhone />
        </HeaderContainer>
    );
};
