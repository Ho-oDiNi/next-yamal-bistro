import FooterIconItem from "./FooterIconItem";

export default function FooterContactList() {
    return (
        <ul className="max-w-[30%]">
            <FooterIconItem iconSrc="/icons/person.svg">
                <p>
                    ООО “ХХХХ ХХХХХ”, 629007, г. Салехард, ул. Сверлова, д. 34А
                </p>
            </FooterIconItem>

            <FooterIconItem iconSrc="/icons/document.svg">
                <p className="flex flex-col">
                    <span>ИНН ХХХХХХХХХХ</span>
                    <span>ОГРН ХХХХХХХХХХ</span>
                </p>
            </FooterIconItem>

            <FooterIconItem iconSrc="/icons/phone.svg">
                <p className="flex flex-col">
                    <a href="tel:+79044755099">+7 (904) 475-50-99</a>
                    <a href="tel:+79044755099">+7 (904) 475-50-99</a>
                </p>
            </FooterIconItem>
        </ul>
    );
}
