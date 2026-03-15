"use client";

import { useState } from "react";

import { ICategory } from "@/entities/category/model";
import { IDish } from "@/entities/dish/model";

import { DishGrid } from "./DishList";
import { MenuNav } from "./MenuNav";

interface MenuListProps {
    categories: ICategory[];
    dishes: IDish[];
    perPage: number;
}

export const MenuList = ({ categories, dishes, perPage }: MenuListProps) => {
    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const [page, setPage] = useState(1);

    const handleCategoryChange = (categoryId: number | null) => {
        setActiveCategory(categoryId);
        setPage(1);
    };

    return (
        <>
            <MenuNav
                categories={categories}
                activeCategory={activeCategory}
                onChange={handleCategoryChange}
            />

            <DishGrid
                dishes={dishes}
                categories={categories}
                activeCategory={activeCategory}
                page={page}
                perPage={perPage}
                onPageChange={setPage}
            />
        </>
    );
};
