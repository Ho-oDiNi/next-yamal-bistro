import Image from "next/image";

import YandexReviews from "./YandexReviews";

const ReviewsSection = async () => {
    return (
        <section
            id="section-reviews"
            className="bg-gradient-to-b from-[#f7fcfe] to-[#EBEBEB] p-(--space-outside-container)"
        >
            <div className="relative container mx-auto rounded-[26px] bg-white px-24 py-20">
                <h2>Отзывы гостей</h2>
                <div className="no-scrollbar relative h-120 overflow-y-auto">
                    <YandexReviews />
                </div>
                <Image
                    className="absolute right-(--space-) right-(--space-inside-x) bottom-0 hidden xl:block"
                    src="/images/chef.png"
                    height={607}
                    width={380}
                    alt=""
                />
            </div>
        </section>
    );
};

export default ReviewsSection;
