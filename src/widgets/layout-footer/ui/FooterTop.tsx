import { SITE_NAVIGATION_LINKS } from "@/shared/lib/site-links";

import { FOOTER_LEGAL_LINKS } from "../config";
import { FooterColumn } from "./FooterColumn";
import { FooterContactList } from "./FooterContactList";

export const FooterTop = () => {
    return (
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
            <FooterContactList />
            <FooterColumn items={FOOTER_LEGAL_LINKS} />
            <FooterColumn
                items={SITE_NAVIGATION_LINKS}
                className="hidden lg:flex"
            />
        </div>
    );
};
