import { type FooterColumnLink } from "../model";

export const FOOTER_LEGAL_LINKS: FooterColumnLink[] = [
    {
        href: "/feedback",
        label: (
            <>
                Обратная связь и <br />
                служба поддержки
            </>
        ),
    },
    {
        href: "/privacy",
        label: (
            <>
                Политика <br />
                конфиденциальности
            </>
        ),
    },
    {
        href: "/consent",
        label: (
            <>
                Согласие на обработку <br />
                персональных данных
            </>
        ),
    },
];
