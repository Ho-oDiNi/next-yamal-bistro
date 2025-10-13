import Image from "next/image";

export default function HeaderSocialIcons() {
    return (
        <div className="mr-5 flex flex-col justify-between">
            <a
                href="https://t.me/YamalBistro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Открыть Telegram"
                className="block"
            >
                <Image
                    src="/icons/tg_small.svg"
                    height={20}
                    width={20}
                    alt="Telegram"
                />
            </a>

            <a
                href="https://wa.me/+79044755099"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Открыть WhatsApp"
                className="block"
            >
                <Image
                    src="/icons/wa_small.svg"
                    height={20}
                    width={20}
                    alt="WhatsApp"
                />
            </a>
        </div>
    );
}
