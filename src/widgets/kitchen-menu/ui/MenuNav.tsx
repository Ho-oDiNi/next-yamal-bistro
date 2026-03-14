import Image from "next/image";

import { ICategory } from "@/entities/category/model";
import { cn } from "@/shared/lib/cn";

import downloadIcon from "@icons/download-white.svg";

type MenuNavProps = {
    categories: ICategory[];
    activeCategory: number | null;
    onChange: (categoryId: number | null) => void;
};

export const MenuNav = ({
    categories,
    activeCategory,
    onChange,
}: MenuNavProps) => {
    return (
        <nav className="flex-between font-roboto mb-8 gap-12 border-b-2 border-white">
            <ul className="xs:grid-rows-6 grid w-full grid-flow-col grid-rows-9 gap-x-6 gap-y-2 pb-4 sm:grid-rows-4 md:grid-rows-3 lg:grid-rows-2">
                <li>
                    <button
                        type="button"
                        onClick={() => onChange(null)}
                        className={cn(
                            "text-accent text-white transition",
                            activeCategory === null
                                ? "font-semibold"
                                : "hover:opacity-70",
                        )}
                    >
                        Все
                    </button>
                </li>

                {categories.map((category) => {
                    const isActive = activeCategory === category.id;

                    return (
                        <li key={category.id}>
                            <button
                                type="button"
                                onClick={() => onChange(category.id)}
                                className={cn(
                                    "text-accent text-nowrap text-white transition",
                                    isActive
                                        ? "font-semibold"
                                        : "hover:opacity-70",
                                )}
                            >
                                {category.name}
                            </button>
                        </li>
                    );
                })}
            </ul>

            <a
                href="/documents/ya-menu.jpg"
                download
                className="h-6 w-6 shrink-0"
            >
                <Image
                    src={downloadIcon}
                    alt="Скачать меню"
                    className="w-full object-contain"
                />
            </a>
        </nav>
    );
};
