import coffeeIcon from "@icons/coffee-white.svg";
import deliveryIcon from "@icons/delivery-white.svg";
import starIcon from "@icons/star-white.svg";

import { AdvantageElementProps } from "../model";

export const ADVANTAGES_COMPANY: AdvantageElementProps[] = [
    {
        icon: coffeeIcon,
        title: "Сытные завтраки",
        href: "#section-contacts",
        description: "Ежедневно до 10.00",
    },
    {
        icon: deliveryIcon,
        title: "Доставка еды",
        href: "https://eda.yandex.ru/r/fudkort_salekhard_vd",
        description: "Возьми поесть с собой",
    },
    {
        icon: starIcon,
        title: "Вкусно поесть",
        href: "https://eda.yandex.ru/r/fudkort_salekhard_vd",
        description: "Рейтинг 4.8 баллов в Яндекс.Еде",
    },
];
