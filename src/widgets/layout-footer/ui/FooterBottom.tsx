import Image from "next/image";

import logoIcon from "@icons/logo-full.svg";

export const FooterBottom = () => {
    return (
        <div className="flex-between">
            <Image src={logoIcon} alt="Логотип «Ямал Бистро»" />
            <span>© 2012 — 2025</span>
        </div>
    );
};
