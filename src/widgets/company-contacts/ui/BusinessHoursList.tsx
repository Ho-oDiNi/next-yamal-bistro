import { WorkTime } from "@/shared/ui/WorkTime";

import { BusinessHour } from "../model";

type BusinessHoursListProps = { hours: BusinessHour[] };

const DAY_URL_BY_LABEL: Record<string, string[]> = {
    "Пн - Чт": [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
    ],
    Пт: ["https://schema.org/Friday"],
    Сб: ["https://schema.org/Saturday"],
    Вс: ["https://schema.org/Sunday"],
};

export const BusinessHoursList = ({ hours }: BusinessHoursListProps) => {
    return (
        <div className="max-w-3xs">
            {hours.map(({ dayLabel, openTime, closeTime }) => (
                <div
                    key={dayLabel}
                    itemProp="hoursAvailable"
                    itemScope
                    itemType="https://schema.org/OpeningHoursSpecification"
                >
                    {DAY_URL_BY_LABEL[dayLabel]?.map((dayUrl) => (
                        <meta key={dayUrl} itemProp="dayOfWeek" content={dayUrl} />
                    ))}
                    <meta itemProp="opens" content={openTime} />
                    <meta itemProp="closes" content={closeTime} />
                    <WorkTime
                        weekDay={dayLabel}
                        timeOpen={openTime}
                        timeClose={closeTime}
                    />
                </div>
            ))}
        </div>
    );
};
