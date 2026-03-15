import { ICategory } from "@/entities/category/model";
import { IDish } from "@/entities/dish/model";
import { Pagenator, usePagination } from "@/shared/lib/pagenator";

import { DishCard } from "./DishCard";

type DishGridProps = {
    dishes: IDish[];
    categories: ICategory[];
    activeCategory: number | null;
    page: number;
    perPage: number;
    onPageChange: (page: number) => void;
};

export const DishGrid = ({
    dishes,
    categories,
    activeCategory,
    page,
    perPage,
    onPageChange,
}: DishGridProps) => {
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
            <h3 className="text-h3 text-white">
                {activeCategoryData?.name || "Все блюда кухни"}
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {paginatedItems.map(({ id, ...dish }) => (
                    <DishCard key={id} {...dish} />
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
