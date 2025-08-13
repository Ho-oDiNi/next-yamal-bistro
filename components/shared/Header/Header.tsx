import Image from "next/image";
import Link from "next/link";

import HeaderContacts from "./HeaderContacts";
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
    return (
        <header className="bg-opacity-10 sticky top-[0px] z-99 bg-white/90 px-(--space-edge-screen) py-5 text-xl font-bold text-(--color-brand-dark) backdrop-blur-md">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <button className="block lg:hidden">
                    <Image
                        src="/icons/burger.svg"
                        height={16}
                        width={25}
                        alt="SEO"
                    />
                </button>
                <Link href="#">
                    <Image
                        className="pb-[8px]"
                        src="/icons/logo.svg"
                        height={40}
                        width={117}
                        alt="SEO"
                    />
                </Link>
                <HeaderNavbar />
                <HeaderContacts />
                <button className="block lg:hidden">
                    <Image
                        src="/icons/burger.svg"
                        height={16}
                        width={25}
                        alt="SEO"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
