const HomeSection = () => {
    return (
        <section className="relative h-screen bg-[url(/images/home.png)] bg-cover bg-bottom bg-no-repeat px-(--space-edge-screen) pt-[25vh]">
            <div className="container mx-auto">
                <h1>
                    Кафе{" "}
                    <em className="text-brand-primary not-italic">открытой </em>
                    кухни «Ямал&nbsp;Бистро»
                    <em className="text-brand-primary not-italic">
                        {" "}
                        в Салехарде
                    </em>
                </h1>

                <div className="flex flex-col sm:flex-row">
                    <button
                        className="btn btn-secondary mr-8 mb-8 md:mr-16 lg:mr-40"
                        type="button"
                    >
                        Заказать доставку
                    </button>
                    <button className="btn btn-primary" type="button">
                        Забронировать стол
                    </button>
                </div>
            </div>
        </section>
    );
};
export default HomeSection;
