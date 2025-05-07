import Link from "next/link";

export const HeaderNavbar = () => {
    return (
        <nav className="flex flex-auto">
            <ul className="flex flex-auto justify-between px-20">
                <li>
                    <Link href="#page_kitchen_menu">Меню</Link>
                </li>
                <li>
                    <Link href="#page_reservation">Резерв</Link>
                </li>
                <li>
                    <Link href="#page_feedback">Отзывы</Link>
                </li>
                <li>
                    <Link href="#page_contacts">Контакты</Link>
                </li>
            </ul>
        </nav>
    );
};
