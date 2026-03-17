import { BurgerButton } from "@/shared/ui/BurgerMenu";
import { Logo } from "@/shared/ui/Logo";

import { HeaderContacts } from "./HeaderContacts";
import { HeaderContainer } from "./HeaderContainer";
import { HeaderMobilePhone } from "./HeaderMobilePhone";
import { HeaderNavbar } from "./HeaderNavbar";

export const Header = () => {
    return (
        <HeaderContainer>
            <BurgerButton />
            <Logo />
            <HeaderNavbar />
            <HeaderContacts />
            <HeaderMobilePhone />
        </HeaderContainer>
    );
};
