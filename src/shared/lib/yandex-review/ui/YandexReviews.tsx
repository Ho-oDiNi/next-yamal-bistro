import { ReviewsScroller } from "./ReviewsScroller";
import { ReviewsSummary } from "./ReviewsSummary";
import { parseYandexReviews } from "../lib/parseYandexReviews";

export const YandexReviews = async () => {
    const { averageRating, totalReviews, reviews } = await parseYandexReviews();

    return (
        <>
            <ReviewsSummary
                averageRating={averageRating}
                totalReviews={totalReviews}
            />
            <ReviewsScroller reviews={reviews} />
        </>
    );
};
