import ReviewCard from "./ReviewCard";

export type Review = {
    author: string;
    date: string;
    rating: number;
    text: string;
    photoUrl?: string;
};

export default function ReviewsList({ reviews }: { reviews: Review[] }) {
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
}
