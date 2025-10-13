import Link from "next/link";

const NAV_LINKS = [
    { href: "#section-kitchen_menu", label: "Меню" },
    { href: "#section-reservation", label: "Резерв" },
    { href: "#section-reviews", label: "Отзывы" },
    { href: "#section-contacts", label: "Контакты" },
];

export default function HeaderNavbar() {
    return (
        <nav className="flex flex-auto" aria-label="Основная навигация">
            <ul className="flex flex-auto items-center justify-between gap-8 px-20">
                {NAV_LINKS.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
