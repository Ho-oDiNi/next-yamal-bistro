import { AdvantageList } from "@/shared/ui/AdvantageList/ui/AdvantageList";

import { AboutContainer } from "./AboutContainer";
import { SpinningSun } from "./SpinningSun";

export const AboutCompany = () => {
    return (
        <AboutContainer>
            <AdvantageList />

            <div>
                <h2 className="text-h2">Попробуй вкус Севера!</h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex-start font-roboto text-accent flex-col gap-6 text-justify">
                        <p>
                            Откройте для себя неповторимую атмосферу и богатую
                            палитру вкусов в кафе &quot;Ямал-Бистро&quot;, где
                            каждый может насладиться сочетанием северных
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
                    <SpinningSun />
                </div>
            </div>
        </AboutContainer>
    );
};
