import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="body-secession-bold-22 relative bg-[#EBEBEB] px-24 py-12">
            <div className="container mx-auto h-auto rounded-[26px] bg-white px-24 py-12">
                <div className="flex justify-between">
                    <ul className="max-w-[30%]">
                        <li className="mb-[25px] flex">
                            <Image
                                src="/icons/person.svg"
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

                        <li className="mb-[25px] flex">
                            <Image
                                src="/icons/document.svg"
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
                            <Image
                                src="/icons/phone.svg"
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
                    <ul className="flex max-w-[20%] flex-col justify-between">
                        <li className="mb-[25px] flex">
                            <a href="">Обратная связь и служба поддержки</a>
                        </li>
                        <li className="mb-[25px] flex">
                            <a href="">Политика конфиденциальности</a>
                        </li>
                        <li>
                            <a href="">
                                Согласие на обработку персональных данных
                            </a>
                        </li>
                    </ul>

                    <div className="flex max-w-[30%] flex-col">
                        <p className="px-2">
                            Скачайте наше мобильное приложение и получите скидку
                            на первый заказ
                        </p>
                        <div className="my-auto flex">
                            <Image
                                src="/images/mobile_qr_code.png"
                                height="150"
                                width="150"
                                alt="SEO"
                            />
                            <ul className="mx-auto flex flex-col justify-between py-2">
                                <li>
                                    <a href="">
                                        <Image
                                            src="/icons/mobile_app_store.svg"
                                            height="40"
                                            width="120"
                                            alt="SEO"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Image
                                            src="/icons/mobile_google_play.svg"
                                            height="40"
                                            width="120"
                                            alt="SEO"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Image
                                            src="/icons/mobile_app_gallery.svg"
                                            height="40"
                                            width="120"
                                            alt="SEO"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-[25px] rounded-[26px] border-1 border-[#EBEBEB]" />
                <div className="flex items-center justify-between">
                    <Image
                        src="/icons/logo_full.svg"
                        width={117}
                        height={68}
                        alt="SEO"
                    />
                    <span className="h-[30px]">
                        © 2025 ООО &quot;ХХХХ ХХХХХ&quot;
                    </span>
                </div>
            </div>
        </footer>
    );
};
