import AdvantageList from "./AdvantageList";

const SeoSection = () => {
    return (
        <section className="to-brand-primary body-secession-regular-22 font-lighter relative bg-gradient-to-b from-[#007dc6] px-48 py-12 text-xl text-white">
            <div className="container mx-auto">
                <AdvantageList />
                <h2 className="mb-10 text-4xl font-bold">
                    Попробуй вкус Севера!
                </h2>
                <div className="flex items-center">
                    <div className="max-w-160 pr-10">
                        <p className="mb-4">
                            Откройте для себя неповторимую атмосферу и богатую
                            палитру вкусов в кафе{" "}
                            <em className="text-blue-950 not-italic">
                                &quot;Ямал-Бистро&quot;
                            </em>
                            , где каждый может насладиться сочетанием северных
                            традиций и современных кулинарных трендов. Мы
                            используем исключительно свежие и качественные
                            продукты премиального качества.
                        </p>
                        <p>
                            Для вашего удобства мы предлагаем услугу доставки
                            вкуснейших блюд прямо к вашему дому или в офис, а
                            также возможность заказа еды и кофе на вынос.
                            Высокий рейтинг и восторженные отзывы довольных
                            клиентов – лучшая рекомендация и доказательство
                            нашего профессионализма.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoSection;
