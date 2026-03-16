import { SupplementItem } from "../model";

interface SupplementListProps {
    supplements: SupplementItem[];
}

export const SupplementList = ({ supplements }: SupplementListProps) => {
    return (
        <div className="space-y-1">
            {supplements.map(({ name, price }, index) => {
                return (
                    <p key={index} className="flex justify-between gap-4">
                        <span className="text-nowrap tabular-nums">{name}</span>
                        <span className="text-nowrap tabular-nums">
                            + {price} руб
                        </span>
                    </p>
                );
            })}
        </div>
    );
};
