import Image from "next/image";

import telegramIcon from "@icons/social-tg.svg";
import whatsappIcon from "@icons/social-wa.svg";

export const HeaderSocialIcons = () => {
    return (
        <div className="flex-between h-full flex-col">
            <a
                href="https://t.me/YamalBistro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Открыть Telegram"
                className="block"
            >
                <Image className="h-6 w-6" src={telegramIcon} alt="Telegram" />
            </a>

            <a
                href="https://wa.me/+79044755099"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Открыть WhatsApp"
                className="block"
            >
                <Image className="h-6 w-6" src={whatsappIcon} alt="WhatsApp" />
            </a>
        </div>
    );
};
