import { StarRating } from "./StarRating";
import { normalizeRating } from "../lib/normalizeRating";

type ReviewsSummaryProps = {
    averageRating: string;
    totalReviews: string;
};

export const ReviewsSummary = ({
    averageRating,
    totalReviews,
}: ReviewsSummaryProps) => {
    const avg = normalizeRating(averageRating);

    return (
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex items-center">
                <span className="mr-2 text-3xl font-bold tabular-nums">
                    {averageRating}
                </span>
                <StarRating value={avg} size="md" />
            </div>
            <span className="text-gray-600">{totalReviews}</span>
        </div>
    );
};
