import { SITE_NAVIGATION_LINKS } from "@/shared/lib/site-links";

import { HeaderNavbarLink } from "./HeaderNavbarLink";

export const HeaderNavbar = () => {
    return (
        <nav className="hidden flex-auto lg:flex">
            <ul className="flex-between flex-auto gap-8 px-30">
                {SITE_NAVIGATION_LINKS.map((link) => (
                    <HeaderNavbarLink
                        key={link.href ?? link.label}
                        link={link}
                    />
                ))}
            </ul>
        </nav>
    );
};
