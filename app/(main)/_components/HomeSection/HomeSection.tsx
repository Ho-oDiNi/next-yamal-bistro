const HomeSection = () => {
    return (
        <section className="relative h-screen bg-[url(/images/home.png)] bg-cover bg-bottom bg-no-repeat pt-[25vh]">
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-20 max-w-125 text-5xl/tight font-bold">
                    Кафе{" "}
                    <em className="text-brand-primary not-italic">открытой </em>
                    кухни «Ямал Бистро»
                    <em className="text-brand-primary not-italic">
                        {" "}
                        в Салехарде
                    </em>
                </h1>

                <button className="btn btn-secondary mr-20" type="button">
                    Заказать доставку
                </button>
                <button className="btn btn-primary" type="button">
                    Забронировать стол
                </button>
            </div>
        </section>
    );
};
export default HomeSection;
