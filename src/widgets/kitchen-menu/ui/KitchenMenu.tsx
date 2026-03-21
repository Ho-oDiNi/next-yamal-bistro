import { getCategories } from "@/entities/category";
import { getDishes } from "@/entities/dish";

import { MenuList } from "./MenuList";
import { DISHES_PER_PAGE } from "../config";

export const KitchenMenu = async () => {
    const [categories, dishes] = await Promise.all([
        getCategories(),
        getDishes(),
    ]);

    return (
        <section
            className="bg-brand-bg"
            itemProp="hasMenu"
            itemScope
            itemType="https://schema.org/Menu"
        >
            <div className="container mx-auto px-4 py-6 xl:py-16">
                <h2
                    className="text-h2 scroll-mt-36 text-white"
                    id="kitchen-menu"
                    itemProp="name"
                >
                    Наше меню
                </h2>

                <MenuList
                    categories={categories}
                    dishes={dishes}
                    perPage={DISHES_PER_PAGE}
                />
            </div>
        </section>
    );
};
