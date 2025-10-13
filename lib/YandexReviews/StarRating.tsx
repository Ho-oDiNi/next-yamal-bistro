import StarIcon from "./StarIcon";

type Props = {
    value: number;
    size?: "sm" | "md";
};

export default function StarRating({ value, size = "md" }: Props) {
    const filledCount = Math.max(0, Math.min(5, Math.floor(value)));
    return (
        <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                    key={i}
                    filled={i < filledCount}
                    small={size === "sm"}
                />
            ))}
        </div>
    );
}
