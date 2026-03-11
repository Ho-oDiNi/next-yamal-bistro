import { WorkTime } from "@/shared/ui/WorkTime";

import { BusinessHour } from "../model";

type BusinessHoursListProps = { hours: BusinessHour[] };

export const BusinessHoursList = ({ hours }: BusinessHoursListProps) => {
    return (
        <div className="max-w-3xs">
            {hours.map(({ dayLabel, openTime, closeTime }) => (
                <WorkTime
                    key={dayLabel}
                    weekDay={dayLabel}
                    timeOpen={openTime}
                    timeClose={closeTime}
                />
            ))}
        </div>
    );
};
