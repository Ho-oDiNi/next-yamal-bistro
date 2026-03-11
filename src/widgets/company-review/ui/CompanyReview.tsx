import Image from "next/image";

import { YandexReviews } from "@/shared/lib/yandex-review";

import chefImage from "@images/chef.png";

import { ReviewsContainer } from "./ReviewsContainer";

export const CompanyReview = async () => {
    return (
        <ReviewsContainer>
            <h2 className="text-h2">Отзывы гостей</h2>
            <div className="no-scrollbar relative h-120 w-full overflow-y-auto xl:max-w-1/2">
                <YandexReviews />
            </div>
            <Image
                className="absolute right-24 bottom-0 hidden xl:block"
                src={chefImage}
                alt=""
            />
        </ReviewsContainer>
    );
};
