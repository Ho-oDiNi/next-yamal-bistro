"use client";

import Link from "next/link";

import { SITE_NAVIGATION_LINKS } from "@/shared/lib/site-links";
import { RoundedButton } from "@/shared/ui/StyledButton";

import closeIcon from "@icons/close-blue.svg";

interface BurgerMenuProps {
    onClose: () => void;
}

export const BurgerMenu = ({ onClose }: BurgerMenuProps) => {
    return (
        <div className="ontainer relative w-full rounded-2xl bg-white p-8 shadow-lg">
            <RoundedButton
                icon={closeIcon}
                callback={onClose}
                className="absolute top-5 right-5 max-h-5 max-w-5"
            />

            <nav>
                <ul className="flex flex-col gap-4">
                    {SITE_NAVIGATION_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={onClose}
                                className="text-h4 transition hover:opacity-70"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
