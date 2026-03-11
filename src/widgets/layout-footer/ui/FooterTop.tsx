import { FOOTER_LEGAL_LINKS, FOOTER_NAVIGATION_LINKS } from "../config";
import { FooterColumn } from "./FooterColumn";
import { FooterContactList } from "./FooterContactList";

export const FooterTop = () => {
    return (
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
            <FooterContactList />
            <FooterColumn items={FOOTER_LEGAL_LINKS} />
            <FooterColumn
                items={FOOTER_NAVIGATION_LINKS}
                className="hidden lg:flex"
            />
        </div>
    );
};
