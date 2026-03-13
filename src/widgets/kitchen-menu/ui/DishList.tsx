import { ICategory } from "@/entities/category/model";
import { IDish } from "@/entities/dish/model";
import { Pagenator, usePagination } from "@/shared/lib/pagenator";

import { DishCard } from "./DishCard";

type DishListProps = {
    dishes: IDish[];
    categories: ICategory[];
    activeCategory: number | null;
    page: number;
    perPage: number;
    onPageChange: (page: number) => void;
};

export const DishList = ({
    dishes,
    categories,
    activeCategory,
    page,
    perPage,
    onPageChange,
}: DishListProps) => {
    const activeCategoryData = categories.find(
        (category) => category.id === activeCategory,
    );

    const filteredDishes =
        activeCategory === null
            ? dishes
            : dishes.filter((dish) => dish.categoryId === activeCategory);

    const { totalPages, paginatedItems } = usePagination({
        items: filteredDishes,
        page,
        perPage,
    });

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
                {activeCategoryData?.name || "Все блюда кухни"}
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {paginatedItems.map((dish) => (
                    <DishCard key={dish.id} {...dish} />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagenator
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                    targetId="kitchen-menu"
                />
            )}
        </div>
    );
};
