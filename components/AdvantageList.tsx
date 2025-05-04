import Link from "next/link";
import { AdvantageElement } from "@/components/AdvantageElement";

export const AdvantageList = () => {
    return (
        <dl className="flex justify-between mb-30">
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
                        Рейтинг 4.9 баллов в{" "}
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
                            href="#page_contacts"
                        >
                            ежедневно
                        </Link>
                    </>
                }
            />
        </dl>
    );
};
