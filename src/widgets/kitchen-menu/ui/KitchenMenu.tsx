import { getCategories } from "@/entities/category/api/getCategories";
import { getDishes } from "@/entities/dish/api/getDishes";

import { MenuList } from "./MenuList";
import { DISHES_PER_PAGE } from "../config";

export const KitchenMenu = async () => {
    const [categories, dishes] = await Promise.all([
        getCategories(),
        getDishes(),
    ]);

    return (
        <section className="bg-brand-bg" id="kitchen-menu">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-h2 text-white">Наше меню</h2>

                <MenuList
                    categories={categories}
                    dishes={dishes}
                    perPage={DISHES_PER_PAGE}
                />
            </div>
        </section>
    );
};
