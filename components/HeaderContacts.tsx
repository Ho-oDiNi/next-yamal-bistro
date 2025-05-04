import { Icons } from "@/components/ui/Icons";
import Link from "next/link";

export const HeaderContacts = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-between mr-[20px]">
                <Link href="https://t.me/YamalBistro">
                    <Icons
                        className=""
                        src="tg_small"
                        height={20}
                        width={20}
                        alt="SEO"
                    />
                </Link>
                <Link href="https://wa.me/+79044755099">
                    <Icons
                        className=""
                        src="wa_small"
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
                <span className="accent-secession-demi-15">ул. Свердлова, 34А</span>
            </div>
        </div>
    );
};
