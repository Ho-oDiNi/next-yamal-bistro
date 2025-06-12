import Link from "next/link";

import AdvantageElement from "./AdvantageElement";

const AdvantageList = () => {
    return (
        <dl className="relative z-2 mb-30 flex justify-between">
            <AdvantageElement
                icon="coffee"
                title="Сытные завтраки"
                description="Ежедневно до 10.00"
            />
            <AdvantageElement
                icon="star"
                title="Вкусно поесть"
                description={
                    <>
                        Рейтинг 4.8 баллов в{" "}
                        <Link
                            className="text-blue-950 hover:underline"
                            href="https://eda.yandex.ru/r/fudkort_salekhard_vd"
                        >
                            Яндекс.Еде
                        </Link>
                    </>
                }
            />
            <AdvantageElement
                icon="delivery"
                title="Доставка еды"
                description={
                    <>
                        Заказы принимаем{" "}
                        <Link
                            className="text-blue-950 hover:underline"
                            href="#section-contacts"
                        >
                            ежедневно
                        </Link>
                    </>
                }
            />
        </dl>
    );
};

export default AdvantageList;
