import documentIcon from "@icons/document-blue.svg";
import personIcon from "@icons/person-blue.svg";
import phoneIcon from "@icons/phone-blue-solid.svg";

import { FooterContactItem } from "./FooterContactItem";

export const FooterContactList = () => {
    return (
        <ul className="flex flex-col gap-6">
            <FooterContactItem icon={personIcon}>
                ИП &quot;XXXX XXXX&quot; <br />
                ИНН XXXXXXXXXX
            </FooterContactItem>

            <FooterContactItem icon={documentIcon}>
                629007, г.&nbsp;Салехард, <br />
                ул.&nbsp;Сверлова, д.&nbsp;34A
            </FooterContactItem>

            <FooterContactItem icon={phoneIcon}>
                <a href="tel:+79044755099" className="hover:opacity-70">
                    +7 (904) 475-50-99
                </a>{" "}
                <br />
                <a href="tel:+79044755099" className="hover:opacity-70">
                    +7 (904) 475-50-99
                </a>
            </FooterContactItem>
        </ul>
    );
};
