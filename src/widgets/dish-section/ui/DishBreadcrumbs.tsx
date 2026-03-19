import Link from "next/link";

type DishBreadcrumbsProps = {
    dishName: string;
};

export const DishBreadcrumbs = ({ dishName }: DishBreadcrumbsProps) => {
    return (
        <nav className="mb-4">
            <ul
                className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
            >
                <li
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                >
                    <Link
                        href="/"
                        className="transition hover:opacity-70"
                        itemProp="item"
                    >
                        <span itemProp="name">Главная</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>

                <li className="text-gray-300 select-none">•</li>

                <li
                    className="text-brand-dark- max-w-full truncate font-medium"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                >
                    <span itemProp="name">{dishName}</span>
                    <meta itemProp="position" content="2" />
                </li>
            </ul>
        </nav>
    );
};
