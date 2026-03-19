import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import logoFullIcon from "@icons/logo-full.svg";
import logoPrimaryIcon from "@icons/logo-main.svg";

interface LogoProps extends ComponentPropsWithoutRef<"div"> {
    isFull?: boolean;
    className?: string;
    imageClassName?: string;
}

export const Logo = ({
    isFull = false,
    className,
    imageClassName,
    ...props
}: LogoProps) => {
    return (
        <Link href="/" className={className}>
            <Image
                src={isFull ? logoFullIcon : logoPrimaryIcon}
                alt={`Логотип "Ямал Бистро"`}
                className={imageClassName}
                priority
                {...props}
            />
        </Link>
    );
};
