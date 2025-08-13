import Link from "next/link";

const HeaderNavbar = () => {
    return (
        <nav className="hidden max-w-4xl flex-auto gap-8 px-20 lg:flex">
            <ul className="flex flex-auto justify-between">
                <li>
                    <Link href="#section-kitchen_menu">Меню</Link>
                </li>
                <li>
                    <Link href="#section-reservation">Резерв</Link>
                </li>
                <li>
                    <Link href="#section-reviews">Отзывы</Link>
                </li>
                <li>
                    <Link href="#section-contacts">Контакты</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavbar;
