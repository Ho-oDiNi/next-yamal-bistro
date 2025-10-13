import Link from "next/link";
import { ReactNode } from "react";

type CtaVariant = "primary" | "secondary";

type CtaButtonProps = {
    href: string;
    children: ReactNode;
    variant?: CtaVariant;
    className?: string;
};

const variantToClass: Record<CtaVariant, string> = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
};

export default function CtaButton({
    href,
    children,
    variant = "primary",
    className = "",
}: CtaButtonProps) {
    return (
        <Link
            href={href}
            className={`${variantToClass[variant]} ${className} flex items-center justify-center`}
            aria-label={`${children}`}
        >
            {children}
        </Link>
    );
}
