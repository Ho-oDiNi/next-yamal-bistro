"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/shared/lib/cn";
import { NavigationLinkItem } from "@/shared/lib/site-links";

interface HeaderNavbarLinkProps {
    link: NavigationLinkItem;
    onClose?: () => void;
}

export const HeaderNavbarLink = ({ link, onClose }: HeaderNavbarLinkProps) => {
    const currentPath = usePathname();
    const { href, label } = link;

    const isActive = currentPath === href;

    return (
        <li>
            <Link
                href={href || ""}
                className={cn(
                    isActive ? "font-bold text-blue-900" : "hover:opacity-70",
                )}
                onClick={onClose}
            >
                {label}
            </Link>
        </li>
    );
};
