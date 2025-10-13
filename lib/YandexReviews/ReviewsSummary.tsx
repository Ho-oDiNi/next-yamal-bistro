import StarRating from "./StarRating";
import { normalizeRating } from "./utils";

export default function ReviewsSummary({
    averageRating,
    totalReviews,
}: {
    averageRating: string;
    totalReviews: string;
}) {
    const avg = normalizeRating(averageRating);

    return (
        <div className="mb-6 flex items-center">
            <span className="mr-2 text-3xl font-bold tabular-nums">
                {averageRating}
            </span>
            <StarRating value={avg} size="md" />
            <span className="ml-2 text-gray-600">{totalReviews}</span>
        </div>
    );
}
