export const ContactPage = () => {
    return (
        <section
            id="page_contacts"
            className="relative -top-[6px] bg-gradient-to-b from-white-150 to-white"
        >
            <h2>Наши контакты</h2>
            <address itemScope itemType="https://schema.org/LocalBusiness">
                <div>
                    <h3>Часы работы</h3>
                    <div
                        itemProp="openingHoursSpecification"
                        itemScope
                        itemType="https://schema.org/OpeningHoursSpecification"
                    >
                        <p>
                            <span>
                                <meta
                                    itemProp="dayOfWeek"
                                    content="Monday-Thursday"
                                />
                                Пн-Чт:{" "}
                            </span>
                            <span>
                                <time itemProp="opens" dateTime="07:30">
                                    7:30
                                </time>
                                —
                                <time itemProp="closes" dateTime="21:00">
                                    21:00
                                </time>
                            </span>
                        </p>
                        <p>
                            <span>
                                <meta itemProp="dayOfWeek" content="Friday" />
                                Пт:{" "}
                            </span>
                            <span>
                                <time itemProp="opens" dateTime="07:30">
                                    7:30
                                </time>{" "}
                                —{" "}
                                <time itemProp="closes" dateTime="22:00">
                                    22:00
                                </time>
                            </span>
                        </p>
                        <p>
                            <span>
                                <meta itemProp="dayOfWeek" content="Saturday" />{" "}
                                Сб:{" "}
                            </span>
                            <span>
                                <time itemProp="opens" dateTime="09:00">
                                    9:00
                                </time>{" "}
                                —{" "}
                                <time itemProp="closes" dateTime="22:00">
                                    22:00
                                </time>
                            </span>
                        </p>
                        <p>
                            <span>
                                <meta itemProp="dayOfWeek" content="Sunday" />
                                Вс:{" "}
                            </span>
                            <span>
                                <time itemProp="opens" dateTime="09:00">
                                    9:00
                                </time>{" "}
                                —{" "}
                                <time itemProp="closes" dateTime="21:00">
                                    21:00
                                </time>
                            </span>
                        </p>
                    </div>
                </div>

                <div>
                    <h3>Телефон</h3>
                    <a href="tel:+79044755099" itemProp="telephone">
                        +7 (904) 475-50-99
                    </a>
                    <a href="tel:+79044755099" itemProp="telephone">
                        +7 (904) 475-50-99
                    </a>
                </div>

                <div>
                    <h3>Адрес</h3>
                    <div
                        itemProp="address"
                        itemScope
                        itemType="https://schema.org/PostalAddress"
                    >
                        <span itemProp="addressLocality">г. Салехард</span>,
                        <span itemProp="streetAddress">ул. Свердлова, 34А</span>
                    </div>
                </div>

                <div>
                    <h3>Почта</h3>
                    <a href="mailto:yamdstone@mail.ru" itemProp="email">
                        yamdstone@mail.ru
                    </a>
                </div>
            </address>

            <iframe
                src="https://yandex.ru/map-widget/v1/?from=api-maps&ll=66.600484%2C66.526556&mode=search&oid=95926227579&ol=biz&origin=jsapi_2_1_79&z=16.79"
                aria-label="Карта расположения Ямал Бистро"
                title="Ямал Бистро на карте Салехарда"
            />
        </section>
    );
};
