import { type FooterColumnLink } from "../model";

export const FOOTER_LEGAL_LINKS: FooterColumnLink[] = [
    {
        href: "https://vk.com/im/convo/-112791961?entrypoint=community_page&tab=all",
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
        href: "https://codecompode.tilda.ws/",
        label: (
            <>
                Разработано студией <br />
                &quot;Код Компод&quot;
            </>
        ),
    },
];
