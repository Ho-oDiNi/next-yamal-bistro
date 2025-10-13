import ReviewsChefImage from "./ReviewsChefImage";
import ReviewsContainer from "./ReviewsContainer";
import ReviewsHeader from "./ReviewsHeader";
import ReviewsScroller from "./ReviewsScroller";

import YandexReviews from "@/lib/YandexReviews";

export default async function ReviewsSection() {
    return (
        <ReviewsContainer>
            <ReviewsHeader>Отзывы гостей</ReviewsHeader>
            <ReviewsScroller>
                <YandexReviews />
            </ReviewsScroller>
            <ReviewsChefImage />
        </ReviewsContainer>
    );
}
