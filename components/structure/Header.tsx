import { Icons } from "@/components/ui/Icons";
import Link from "next/link";
import { HeaderNavbar } from "../HeaderNavbar";
import { HeaderContacts } from "../HeaderContacts";

export const Header = () => {
    return (
        <header className="bg-opacity-10 headline-secession-bold-22 sticky -top-[0px] z-99 bg-white/90 px-48 py-5 text-(--color-brand-300) backdrop-blur-md">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <Link href="#">
                    <Icons
                        className="pb-[8px]"
                        src="logo"
                        height={40}
                        width={117}
                        alt="SEO"
                    />
                </Link>
                <HeaderNavbar />
                <HeaderContacts />
            </div>
        </header>
    );
};
