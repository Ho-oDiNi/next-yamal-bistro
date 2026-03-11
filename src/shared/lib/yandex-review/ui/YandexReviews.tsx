import { ReviewsList } from "./ReviewsList";
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
            <ReviewsList reviews={reviews} />
        </>
    );
};
