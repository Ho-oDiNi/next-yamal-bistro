import { Review } from "../model";
import { ReviewCard } from "./ReviewCard";

export const ReviewsList = ({ reviews }: { reviews: Review[] }) => {
    return (
        <div className="my-2 w-full space-y-6 xl:max-w-160">
            {reviews.map((review, idx) => (
                <ReviewCard
                    key={`${review.author}-${review.date}-${idx}`}
                    review={review}
                />
            ))}
        </div>
    );
};
