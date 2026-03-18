import { TSupplementData } from "@/entities/dish/model";

interface SupplementListProps {
    supplements: TSupplementData[];
}

export const SupplementList = ({ supplements }: SupplementListProps) => {
    return (
        <div className="space-y-1">
            {supplements.map(({ name, price }, index) => {
                return (
                    <p key={index} className="flex justify-between gap-4">
                        <span className="text-nowrap tabular-nums">{name}</span>
                        <span className="text-accent font-secession font-light text-nowrap tabular-nums">
                            +{price}{" "}
                            <abbr title="рубли" className="no-underline">
                                руб
                            </abbr>
                        </span>
                    </p>
                );
            })}
        </div>
    );
};
