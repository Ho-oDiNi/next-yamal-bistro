import Image from "next/image";

import { cn } from "@/shared/lib/cn";

import leftIcon from "@icons/arrow-left.svg";
import rightIcon from "@icons/arrow-right.svg";

import { getVisiblePages } from "../lib/getVisiblePages";
import { scrollToTarget } from "../lib/scrollToTarget";

type PagenatorProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    targetId?: string;
};

export const Pagenator = ({
    currentPage,
    totalPages,
    onPageChange,
    targetId,
}: PagenatorProps) => {
    const visiblePages = getVisiblePages(currentPage, totalPages);

    const handlePageChange = async (page: number) => {
        await scrollToTarget(targetId);
        onPageChange(page);
    };

    return (
        <nav className="flex-center flex-wrap gap-2 pt-2">
            <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={cn(
                    "flex-center h-10 w-10 rounded-full border border-white text-white transition",
                    currentPage === 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:opacity-70",
                )}
            >
                <Image src={leftIcon} alt="Назад" />
            </button>

            {visiblePages.map((page, index) => {
                if (page === "...") {
                    return (
                        <span
                            key={`ellipsis-${index}`}
                            className="flex-center h-10 w-10 text-base text-white"
                        >
                            ...
                        </span>
                    );
                }

                const isActive = page === currentPage;

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={cn(
                            "h-10 w-10 rounded-full border text-base transition",
                            isActive
                                ? "text-brand-dark border-white bg-white"
                                : "hover:text-brand-dark border-white text-white hover:bg-white",
                        )}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={cn(
                    "flex-center h-10 w-10 rounded-full border border-white text-white transition",
                    currentPage === totalPages
                        ? "cursor-not-allowed opacity-50"
                        : "hover:opacity-70",
                )}
            >
                <Image src={rightIcon} alt="Вперед" />
            </button>
        </nav>
    );
};
