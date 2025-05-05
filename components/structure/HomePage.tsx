export const HomePage = () => {
    return (
        <section className="h-screen relative bg-bottom bg-[url(/images/home.png)] bg-no-repeat px-24 pt-[20vh] bg-cover">
            <h1 className="title-secession-bold-55 mb-20 max-w-150">
                Кафе <em className="text-brand-200 not-italic">открытой </em>
                кухни «Ямал Бистро»
                <em className="text-brand-200 not-italic"> в Салехарде</em>
            </h1>

            <button className="btn btn-secondary mr-20" type="button">
                Заказать доставку
            </button>
            <button className="btn btn-primary" type="button">
                Забронировать стол
            </button>
        </section>
    );
};
