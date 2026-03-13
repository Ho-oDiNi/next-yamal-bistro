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
        <nav className="flex-between mb-8 gap-6 border-b-2 border-white">
            <ul className="flex-start w-max flex-wrap gap-x-6 pb-4">
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
                                    "text-accent text-white transition",
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
