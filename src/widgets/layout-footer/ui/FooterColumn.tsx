import Link from "next/link";

import { cn } from "@/shared/lib/cn";

import { type FooterColumnLink } from "../model";

interface FooterColumnProps {
    className?: string;
    items: FooterColumnLink[];
}

export const FooterColumn = ({ items, className }: FooterColumnProps) => {
    return (
        <ul className={cn("flex flex-col gap-6", className)}>
            {items.map(({ label, href }, index) => (
                <li key={index}>
                    <Link href={href} className="hover:opacity-70">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
