const HomeSection = () => {
    return (
        <section className="relative h-screen bg-[url(/images/home.png)] bg-cover bg-bottom bg-no-repeat px-(--space-edge-screen) pt-[25vh]">
            <div className="container mx-auto">
                <div className="max-w-[800px]">
                    <h1 className="mb-20 text-[3.5rem]/tight font-bold">
                        Кафе{" "}
                        <em className="text-brand-primary not-italic">
                            открытой{" "}
                        </em>
                        кухни «Ямал&nbsp;Бистро»
                        <em className="text-brand-primary not-italic">
                            {" "}
                            в Салехарде
                        </em>
                    </h1>

                    <div className="flex justify-between">
                        <button className="btn btn-secondary" type="button">
                            Заказать доставку
                        </button>
                        <button className="btn btn-primary" type="button">
                            Забронировать стол
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeSection;
