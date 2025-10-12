import Image from "next/image";

import YandexReviews from "../../../lib/YandexReviews";

const ReviewsSection = async () => {
    return (
        <section
            id="section-reviews"
            className="bg-gradient-to-b from-[#f7fcfe] to-[#EBEBEB] px-24 py-12"
        >
            <div className="relative container mx-auto rounded-[26px] bg-white px-24 py-20">
                <h2 className="mb-10 text-4xl font-bold">Отзывы гостей</h2>
                <div className="no-scrollbar relative h-120 overflow-y-auto">
                    <YandexReviews />
                </div>
                <Image
                    className="absolute right-24 bottom-0"
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
