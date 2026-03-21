import Link from "next/link";

import { cn } from "@/shared/lib/cn";
import { isExternalLink } from "@/shared/lib/site-links";

import { type FooterColumnLink } from "../model";

interface FooterColumnProps {
    className?: string;
    items: FooterColumnLink[];
}

export const FooterColumn = ({ items, className }: FooterColumnProps) => {
    return (
        <nav>
            <ul className={cn("flex flex-col gap-6", className)}>
                {items.map(({ label, href }, index) => {
                    const isExternal = isExternalLink(href);

                    return (
                        <li key={index}>
                            <Link
                                href={href}
                                className="hover:opacity-70"
                                rel={
                                    isExternal
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                target={isExternal ? "_blank" : undefined}
                            >
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
