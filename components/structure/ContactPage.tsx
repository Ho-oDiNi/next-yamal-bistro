export const ContactPage = () => {
    return (
        <section
            id="page_contacts"
            className="relative bg-gradient-to-b from-white-150 to-[#F5F5F5] px-24"
        >
            <h2 className="title-secession-bold-40 mb-10">Наши контакты</h2>
            <address>
                <h3>Часы работы</h3>
                <p>
                    <span>Пн-Чт: </span>
                    <span>
                        <time>7:30</time>—<time>21:00</time>
                    </span>
                </p>
                <p>
                    <span>Пт: </span>
                    <span>
                        <time>7:30</time> — <time>22:00</time>
                    </span>
                </p>
                <p>
                    <span>Сб: </span>
                    <span>
                        <time>9:00</time> — <time>22:00</time>
                    </span>
                </p>
                <p>
                    <span>Вс: </span>
                    <span>
                        <time>9:00</time> — <time>21:00</time>
                    </span>
                </p>

                <div>
                    <h3>Телефон</h3>
                    <a href="tel:+79044755099">+7 (904) 475-50-99</a>
                    <a href="tel:+79044755099">+7 (904) 475-50-99</a>
                </div>

                <div>
                    <h3>Адрес</h3>
                    <div>
                        <span>г. Салехард</span>,<span>ул. Свердлова, 34А</span>
                    </div>
                </div>

                <div>
                    <h3>Почта</h3>
                    <a href="mailto:yamdstone@mail.ru">yamdstone@mail.ru</a>
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
