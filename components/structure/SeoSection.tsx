import { AdvantageList } from "@/components/AdvantageList";
// import { Slider } from "@/components/ui/Slider";

export const SeoSection = () => {
    // const seoSlides = [
    //     {
    //         id: 1,
    //         image: "/images/slide-1.png",
    //         width: 213,
    //         height: 206,
    //         alt: "SEO",
    //     },
    //     {
    //         id: 2,
    //         image: "/images/slide-2.png",
    //         width: 213,
    //         height: 206,
    //         alt: "SEO",
    //     },
    //     {
    //         id: 3,
    //         image: "/images/slide-3.png",
    //         width: 213,
    //         height: 206,
    //         alt: "SEO",
    //     },
    // ];
    return (
        <section className="from-brand-150 to-brand-200 body-secession-regular-22 after-image after-image-deer relative bg-gradient-to-b px-48 py-12 text-white">
            <div className="mr-auto ml-auto max-w-256">
                <AdvantageList />
                <h2 className="title-secession-bold-40 mb-10">
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
                    {/* <div className="max-w-[350px] max-h-[300px] mx-auto z-2">
                        <Slider slides={seoSlides} />
                    </div> */}
                </div>
            </div>
        </section>
    );
};
