import { useMemo } from "react";

type UsePaginationProps<T> = {
    items: T[];
    page: number;
    perPage: number;
};

export const usePagination = <T>({
    items,
    page,
    perPage,
}: UsePaginationProps<T>) => {
    const totalPages = useMemo(() => {
        return Math.ceil(items.length / perPage);
    }, [items.length, perPage]);

    const paginatedItems = useMemo(() => {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;

        return items.slice(startIndex, endIndex);
    }, [items, page, perPage]);

    return {
        totalPages,
        paginatedItems,
    };
};
