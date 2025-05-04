import Image from "next/image";

export const HomePage = () => {
    return (
        <section className="h-screen relative">
            <div className="px-24 pt-[20vh]">
                <h1 className="title-secession-bold-55 mb-20 max-w-150">
                    Кафе{" "}
                    <em className="text-brand-200 not-italic">открытой </em>
                    кухни «Ямал Бистро»
                    <em className="text-brand-200 not-italic"> в Салехарде</em>
                </h1>

                <button className="btn btn-secondary mr-20" type="button">
                    Заказать доставку
                </button>
                <button className="btn btn-primary" type="button">
                    Забронировать стол
                </button>
            </div>
            <Image
                className="absolute -z-1 bottom-0 w-full"
                src="/images/home.png"
                width={1440}
                height={575}
                priority
                quality={85}
                alt="SEO"
            />
        </section>
    );
};
