import Image from "next/image";

import YandexReviews from "./YandexReviews";

const ReviewsSection = async () => {
    return (
        <section
            id="section-reviews"
            className="flex items-center justify-center bg-gradient-to-b from-[#f7fcfe] to-[#EBEBEB] p-(--space-outside-container-accent)"
        >
            <div className="w-full max-w-420 rounded-[26px] bg-white p-(--space-intside-container)">
                <div className="relative container mx-auto">
                    <h2>Отзывы гостей</h2>
                    <div className="flex justify-between">
                        <YandexReviews />
                        <Image
                            className="relative right-0 -bottom-(--space-inside-y) ml-8 hidden xl:block"
                            src="/images/chef.png"
                            height={607}
                            width={380}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
