import { BusinessHour } from "./contacts.data";

import WorkTime from "@/components/ui/WorkTime";

type BusinessHoursListProps = { hours: BusinessHour[] };

export default function BusinessHoursList({ hours }: BusinessHoursListProps) {
    return (
        <div aria-label="Часы работы">
            {hours.map((h) => (
                <WorkTime
                    key={h.dayLabel}
                    weekDay={h.dayLabel}
                    timeOpen={h.openTime}
                    timeClose={h.closeTime}
                />
            ))}
        </div>
    );
}
