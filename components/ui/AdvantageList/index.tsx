import Link from "next/link";

import AdvantageElement, { AdvantageElementProps } from "./AdvantageElement";

const ADVANTAGES: AdvantageElementProps[] = [
    {
        icon: "coffee",
        title: "Сытные завтраки",
        description: "Ежедневно до 10.00",
    },
    {
        icon: "star",
        title: "Вкусно поесть",
        description: (
            <>
                Рейтинг 4.8 баллов в{" "}
                <a
                    href="https://eda.yandex.ru/r/fudkort_salekhard_vd"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Яндекс.Еде
                </a>
            </>
        ),
    },
    {
        icon: "delivery",
        title: "Доставка еды",
        description: (
            <>
                Заказы принимаем <Link href="#section-contacts">ежедневно</Link>
            </>
        ),
    },
];

const AdvantageList = () => {
    return (
        <dl className="relative z-[2] mb-30 grid grid-cols-1 gap-8 md:grid-cols-3">
            {ADVANTAGES.map((item) => (
                <AdvantageElement
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </dl>
    );
};

export default AdvantageList;
