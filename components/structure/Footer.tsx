import { Icons } from "../ui/Icons";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-[#EBEBEB] relative px-24 py-[15vh] body-secession-regular-22">
            <div className="bg-white rounded-[26px] h-auto px-[100px] py-[50px]">
                <div className="flex justify-between">
                    <ul className="max-w-[30%]">
                        <li className="flex mb-[25px]">
                            <Icons
                                src="person"
                                className="mr-[32px]"
                                height={28}
                                width={28}
                                alt="SEO"
                            />
                            <p>
                                ООО “ХХХХ ХХХХХ”, 629007, г. Салехард, ул.
                                Сверлова, д. 34А
                            </p>
                        </li>

                        <li className="flex mb-[25px]">
                            <Icons
                                src="document"
                                className="mr-[32px]"
                                height={28}
                                width={28}
                                alt="SEO"
                            />
                            <p className="flex flex-col">
                                <span>ИНН ХХХХХХХХХХ</span>
                                <span>ОГРН ХХХХХХХХХХ</span>
                            </p>
                        </li>

                        <li className="flex">
                            <Icons
                                src="phone"
                                className="mr-[32px]"
                                height={28}
                                width={28}
                                alt="SEO"
                            />
                            <p className="flex flex-col">
                                <a href="tel:+79044755099">
                                    +7 (904) 475-50-99
                                </a>
                                <a href="tel:+79044755099">
                                    +7 (904) 475-50-99
                                </a>
                            </p>
                        </li>
                    </ul>
                    <ul className="max-w-[20%]">
                        <li className="flex mb-[25px]">
                            <a href="">Обратная связь и служба поддержки</a>
                        </li>
                        <li className="flex mb-[25px]">
                            <a href="">Политика конфиденциальности</a>
                        </li>
                        <li>
                            <a href="">
                                Согласие на обработку персональных данных
                            </a>
                        </li>
                    </ul>

                    <div className="max-w-[30%]">
                        <p className="p-2">
                            Скачайте наше мобильное приложение и получите скидку
                        </p>
                        <div className="flex">
                            <Image
                                src="/images/mobile_qr_code.png"
                                height="150"
                                width="150"
                                alt="SEO"
                            />
                            <ul className="flex flex-col mx-auto justify-between py-2">
                                <li>
                                    <Image
                                        src="/icons/mobile_app_store.svg"
                                        height="40"
                                        width="120"
                                        alt="SEO"
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/icons/mobile_google_play.svg"
                                        height="40"
                                        width="120"
                                        alt="SEO"
                                    />
                                </li>
                                <li>
                                    <Image
                                        src="/icons/mobile_app_gallery.svg"
                                        height="40"
                                        width="120"
                                        alt="SEO"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border-[#EBEBEB] border-1 rounded-[26px] my-[25px]" />
                <div className="flex justify-between items-center">
                    <Icons src="logo_full" width={117} height={68} alt="SEO" />
                    <span className="h-[30px]">
                        © 2025 ООО &quot;ХХХХ ХХХХХ&quot;
                    </span>
                </div>
            </div>
        </footer>
    );
};
