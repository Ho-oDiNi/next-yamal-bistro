import HeaderSocialIcons from "./HeaderSocialIcons";

export default function HeaderContacts() {
    return (
        <div className="flex flex-row items-center">
            <HeaderSocialIcons />
            <div className="flex flex-col items-center">
                <a
                    href="tel:+79044755099"
                    aria-label="Позвонить: +7 (904) 475-50-99"
                    className="leading-tight"
                >
                    +7 (904) 475-50-99
                </a>
                <span className="text-sm leading-tight font-light">
                    ул. Свердлова, 34А
                </span>
            </div>
        </div>
    );
}
