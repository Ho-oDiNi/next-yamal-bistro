import Link from "next/link";

import { cn } from "@/shared/lib/cn";

import { StyledLinkProps } from "../model";
import styles from "./StyledLink.module.css";

export const StyledLink = (props: StyledLinkProps) => {
    const {
        href,
        className = "",
        variant = "primary",
        size = "lg",
        children,
        scroll = true,
        ...restProps
    } = props;

    const linkClasses = cn(
        styles.base,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        className,
    );

    const isExternalProtocol =
        href.startsWith("tel:") || href.startsWith("mailto:");

    if (isExternalProtocol) {
        return (
            <a href={href} className={linkClasses} {...restProps}>
                {children}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={linkClasses}
            scroll={scroll}
            {...restProps}
        >
            {children}
        </Link>
    );
};
