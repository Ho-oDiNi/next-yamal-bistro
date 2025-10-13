import SeoContainer from "./SeoContainer";
import SeoContent from "./SeoContent";
import SeoHeader from "./SeoHeader";
import SeoTextColumn from "./SeoTextColumn";

import AdvantageList from "@/components/ui/AdvantageList";

export default function Seo() {
    return (
        <SeoContainer>
            <div className="container mx-auto">
                <AdvantageList />

                <SeoHeader>Попробуй вкус Севера!</SeoHeader>

                <SeoContent>
                    <SeoTextColumn>
                        <p className="mb-4">
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
                    </SeoTextColumn>
                </SeoContent>
            </div>
        </SeoContainer>
    );
}
