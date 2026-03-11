import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type FooterContactItemProps = {
    icon?: StaticImageData;
    children: ReactNode;
};

export const FooterContactItem = ({
    icon,
    children,
}: FooterContactItemProps) => {
    return (
        <li className="flex gap-6">
            {icon && <Image src={icon} alt="" className="hidden xl:block" />}
            <p>{children}</p>
        </li>
    );
};
