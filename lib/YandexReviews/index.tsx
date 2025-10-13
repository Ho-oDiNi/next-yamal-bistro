import ReviewsList from "./ReviewsList";
import ReviewsSummary from "./ReviewsSummary";

import parseYandexReviews from "@/lib/YandexReviews/parseYandexReviews";

export default async function YandexReviews() {
    const reviewData = await parseYandexReviews();

    return (
        <>
            <ReviewsSummary
                averageRating={reviewData.averageRating}
                totalReviews={reviewData.totalReviews}
            />
            <ReviewsList reviews={reviewData.reviews} />
        </>
    );
}
