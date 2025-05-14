import Image from "next/image";
import Link from "next/link";

export const HeaderContacts = () => {
    return (
        <div className="flex flex-row">
            <div className="mr-[20px] flex flex-col justify-between">
                <Link href="https://t.me/YamalBistro">
                    <Image
                        src="/icons/tg_small.svg"
                        height={20}
                        width={20}
                        alt="SEO"
                    />
                </Link>
                <Link href="https://wa.me/+79044755099">
                    <Image
                        src="/icons/wa_small.svg"
                        height={20}
                        width={20}
                        alt="SEO"
                    />
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <a href="tel:+79044755099" aria-label="SEO">
                    +7 (904) 475-50-99
                </a>
                <span className="accent-secession-demi-15">
                    ул. Свердлова, 34А
                </span>
            </div>
        </div>
    );
};
