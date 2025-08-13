import Image from "next/image";

import WorkTime from "./WorkTime";

const ContactSection = () => {
    return (
        <section
            id="section-contacts"
            className="relative bg-[#EBEBEB] p-(--space-container)"
        >
            <div className="container mx-auto h-auto rounded-[26px] bg-white px-24 py-20">
                <h2>Наши контакты</h2>
                <div className="flex justify-between not-italic">
                    <div className="max-w-[25%] flex-1">
                        <div>
                            <h3 className="my-5 text-2xl font-semibold">
                                Часы работы
                            </h3>
                            <WorkTime
                                weekDay="Пн - Чт"
                                timeOpen="7:30"
                                timeClose="21:00"
                            />
                            <WorkTime
                                weekDay="Пт"
                                timeOpen="7:30"
                                timeClose="22:00"
                            />
                            <WorkTime
                                weekDay="Сб"
                                timeOpen="9:00"
                                timeClose="22:00"
                            />
                            <WorkTime
                                weekDay="Вс"
                                timeOpen="9:00"
                                timeClose="21:00"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="my-3 text-2xl font-semibold">
                                Телефон
                            </h3>
                            <a href="tel:+79044755099" className="my-[7px]">
                                +7 (904) 475-50-99
                            </a>
                            <a href="tel:+79044755099" className="my-[7px]">
                                +7 (904) 475-50-99
                            </a>
                        </div>
                    </div>
                    <div className="max-w-[25%] flex-1">
                        <div>
                            <h3 className="my-5 text-2xl font-semibold">
                                Адрес
                            </h3>
                            <span>г. Салехард, </span>
                            <span>ул. Свердлова, </span>
                            <span>д. 34А</span>
                        </div>

                        <div>
                            <h3 className="my-5 text-2xl font-semibold">
                                Почта
                            </h3>
                            <a href="mailto:yamdstone@mail.ru">
                                yamdstone@mail.ru
                            </a>
                        </div>

                        <div>
                            <h3 className="my-5 text-2xl font-semibold">
                                Социальные сети
                            </h3>
                            <div className="ml-[26px] flex gap-4">
                                <a href="https://t.me/YamalBistro">
                                    <Image
                                        src="/icons/tg.svg"
                                        height={40}
                                        width={40}
                                        alt=""
                                    />
                                </a>
                                <a href="https://vk.com/bistroyamal">
                                    <Image
                                        src="/icons/vk.svg"
                                        height={40}
                                        width={40}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <iframe
                        sandbox="allow-orientation-lock allow-scripts allow-same-origin allow-popups"
                        src="https://yandex.ru/map-widget/v1/?from=api-maps&ll=66.600484%2C66.526556&mode=search&oid=95926227579&ol=biz&origin=jsapi_2_1_79&z=16.79"
                        className="ml-[35px] h-[320px] w-[385px] flex-1 rounded-[26px] shadow-md"
                        title="Ямал Бистро на карте Салехарда"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
