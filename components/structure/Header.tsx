import { Icons } from "@/components/ui/Icons";
import Link from "next/link";
import { HeaderNavbar } from "../HeaderNavbar";
import { HeaderContacts } from "../HeaderContacts";

export const Header = () => {
    return (
        <header className="bg-header headline-secession-bold-22 sticky -top-[0px] z-99 px-48 py-5">
            <div className="mx-auto flex max-w-256 flex-row items-center justify-between">
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
