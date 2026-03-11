import Image from "next/image";

import phoneIcon from "@icons/phone-blue-fill.svg";

export const HeaderMobilePhone = () => {
    return (
        <a href="tel:+79044755099" className="block lg:hidden">
            <Image src={phoneIcon} alt="Позвонить" className="h-6 w-6" />
        </a>
    );
};
