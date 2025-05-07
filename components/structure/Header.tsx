import { Icons } from "@/components/ui/Icons";
import Link from "next/link";
import { HeaderNavbar } from "../HeaderNavbar";
import { HeaderContacts } from "../HeaderContacts";

export const Header = () => {
    return (
        <header className="sticky -top-[0px] z-99 py-5 px-48 bg-header headline-secession-bold-22">
            <div className="max-w-256 flex flex-row justify-between items-center mx-auto">
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
