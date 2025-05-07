import { WorkTime } from "../WorkTime";
import { Icons } from "@/components/ui/Icons";

export const ContactPage = () => {
    return (
        <section
            id="page_contacts"
            className="relative bg-gradient-to-b from-white-150 to-[#EBEBEB] px-24 py-[15vh]"
        >
            <div className="bg-white rounded-[26px] p-[100px] h-auto">
                <h2 className="title-secession-bold-40 mb-10">Наши контакты</h2>
                <div className="flex not-italic justify-between">
                    <div className="flex-1 max-w-[25%]">
                        <div>
                            <h3 className="subhead-secession-demi-22 my-5">
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
                            <h3 className="subhead-secession-demi-22 my-3">
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
                    <div className="flex-1 max-w-[25%]">
                        <div>
                            <h3 className="subhead-secession-demi-22 my-5">
                                Адрес
                            </h3>
                            <span>г. Салехард, </span>
                            <span>ул. Свердлова, </span>
                            <span>д. 34А</span>
                        </div>

                        <div>
                            <h3 className="subhead-secession-demi-22 my-5">
                                Почта
                            </h3>
                            <a href="mailto:yamdstone@mail.ru">
                                yamdstone@mail.ru
                            </a>
                        </div>

                        <div>
                            <h3 className="subhead-secession-demi-22 my-5">
                                Социальные сети
                            </h3>
                            <div className="flex gap-4 ml-[26px]">
                                <a href="https://t.me/YamalBistro">
                                    <Icons
                                        src="tg"
                                        height={40}
                                        width={40}
                                        alt=""
                                    />
                                </a>
                                <a href="https://vk.com/bistroyamal">
                                    <Icons
                                        src="vk"
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
                        className="rounded-[26px] w-[385px] h-[320px] shadow-md ml-[35px] flex-1"
                        title="Ямал Бистро на карте Салехарда"
                    />
                </div>
            </div>
        </section>
    );
};
