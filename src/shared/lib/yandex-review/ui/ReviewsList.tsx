import { Review } from "../model";
import { ReviewCard } from "./ReviewCard";

export const ReviewsList = ({ reviews }: { reviews: Review[] }) => {
    return (
        <div className="max-w-160 space-y-6">
            {reviews.map((review, idx) => (
                <ReviewCard
                    key={`${review.author}-${review.date}-${idx}`}
                    review={review}
                />
            ))}
        </div>
    );
};
