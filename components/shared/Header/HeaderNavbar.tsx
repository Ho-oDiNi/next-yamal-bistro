import Link from "next/link";

const HeaderNavbar = () => {
    return (
        <nav className="flex flex-auto">
            <ul className="flex flex-auto justify-between px-20">
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
