import Link from "next/link";

import { HeaderSocialIcons } from "./HeaderSocialIcons";

export const HeaderContacts = () => {
    return (
        <div className="lg:flex-center hidden h-15 flex-row gap-6">
            <HeaderSocialIcons />
            <div className="flex-center flex-col">
                <a
                    href="tel:+79044755099"
                    className="leading-tight hover:opacity-70"
                >
                    +7 (904) 475-50-99
                </a>
                <Link
                    href="/#contacts"
                    className="text-sm leading-tight font-light hover:opacity-70"
                >
                    ул. Свердлова, 34А
                </Link>
            </div>
        </div>
    );
};
