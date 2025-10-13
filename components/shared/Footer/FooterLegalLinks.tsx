import Link from "next/link";

export default function FooterLegalLinks() {
    return (
        <ul className="flex max-w-[20%] flex-col justify-between">
            <li className="mb-[25px] flex">
                <Link href="">Обратная связь и служба поддержки</Link>
            </li>
            <li className="mb-[25px] flex">
                <Link href="">Политика конфиденциальности</Link>
            </li>
            <li>
                <Link href="">Согласие на обработку персональных данных</Link>
            </li>
        </ul>
    );
}
