const HomeSection = () => {
    return (
        <section className="relative h-screen bg-[url(/images/home.png)] bg-cover bg-bottom bg-no-repeat px-48 pt-[25vh]">
            <div className="container mx-auto">
                <h1 className="title-secession-bold-55 mb-20 max-w-145">
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
        </section>
    );
};
export default HomeSection;
