"use client";

import { useMemo, useState } from "react";

import { DishList } from "./DishList";
import { MenuNav } from "./MenuNav";
import { dishes, MENU_CATEGORIES } from "../config";

const DISHES_PER_PAGE = 6;

export const KitchenMenu = () => {
    const parentCategories = useMemo(
        () =>
            MENU_CATEGORIES.filter(
                (category) => category.parentId === undefined,
            ),
        [],
    );

    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const [page, setPage] = useState(1);

    const handleCategoryChange = (categoryId: number | null) => {
        setActiveCategory(categoryId);
        setPage(1);
    };

    return (
        <section className="bg-brand-bg" id="kitchen-menu">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-h2 text-white">Наше меню</h2>

                <MenuNav
                    categories={parentCategories}
                    activeCategory={activeCategory}
                    onChange={handleCategoryChange}
                />

                <DishList
                    dishes={dishes}
                    categories={MENU_CATEGORIES}
                    activeCategory={activeCategory}
                    page={page}
                    perPage={DISHES_PER_PAGE}
                    onPageChange={setPage}
                />
            </div>
        </section>
    );
};
