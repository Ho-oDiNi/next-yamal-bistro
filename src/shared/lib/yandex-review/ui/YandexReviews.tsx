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
            <div className="relative xl:max-w-1/2">
                <div className="pointer-events-none absolute top-0 left-0 z-10 h-8 w-full bg-linear-to-b from-white to-transparent" />
                <div className="no-scrollbar h-120 w-full overflow-y-auto">
                    <ReviewsList reviews={reviews} />
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-linear-to-t from-white to-transparent" />
            </div>
        </>
    );
};
