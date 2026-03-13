import { NEIGHBOR_COUNT } from "../config";

type VisibleItem = number | "...";

export const getVisiblePages = (
    currentPage: number,
    totalPages: number,
): VisibleItem[] => {
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages = new Set<number>();

    pages.add(1);
    pages.add(totalPages);

    for (
        let page = currentPage - NEIGHBOR_COUNT;
        page <= currentPage + NEIGHBOR_COUNT;
        page++
    ) {
        if (page > 1 && page < totalPages) {
            pages.add(page);
        }
    }

    if (currentPage <= 2) {
        pages.add(2);
        pages.add(3);
        pages.add(4);
    }

    if (currentPage >= totalPages - 1) {
        pages.add(totalPages - 1);
        pages.add(totalPages - 2);
        pages.add(totalPages - 3);
    }

    const sortedPages = Array.from(pages)
        .filter((page) => page >= 1 && page <= totalPages)
        .sort((a, b) => a - b);

    const result: VisibleItem[] = [];

    for (let index = 0; index < sortedPages.length; index++) {
        const page = sortedPages[index];
        const previousPage = sortedPages[index - 1];

        if (index > 0 && page - previousPage > 1) {
            result.push("...");
        }

        result.push(page);
    }

    return result;
};
