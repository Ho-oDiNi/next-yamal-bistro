import AdvantageList from "./AdvantageList";

const SeoSection = () => {
    return (
        <section className="to-brand-primary font-lighter relative bg-gradient-to-b from-[#007dc6] p-(--space-container) text-xl text-white">
            <div className="container mx-auto">
                <AdvantageList />
                <h2>Попробуй вкус Севера!</h2>
                <div className="flex items-center">
                    <div className="max-w-2xl text-2xl">
                        <p className="mb-12">
                            Откройте для себя неповторимую атмосферу и богатую
                            палитру вкусов в кафе &quot;Ямал-Бистро&quot;, где
                            каждый может насладиться сочетанием северных
                            традиций и современных кулинарных трендов. Мы
                            используем исключительно свежие и качественные
                            продукты.
                        </p>
                        <p>
                            Для вашего удобства мы предлагаем услугу доставки
                            блюд прямо к дому или в офис, а также возможность
                            заказа еды и кофе на вынос. Высокий рейтинг и
                            восторженные отзывы довольных клиентов – лучшая
                            рекомендация и доказательство нашего
                            профессионализма.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoSection;
