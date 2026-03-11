import Image from "next/image";
import Link from "next/link";

import logoPrimaryIcon from "@icons/logo-main.svg";

interface LogoProps {
    className?: string;
    imageClassName?: string;
}

export const Logo = ({ className, imageClassName }: LogoProps) => {
    return (
        <Link href="/" className={className}>
            <Image
                src={logoPrimaryIcon}
                alt={`Логотип "Ямал Бистро"`}
                className={imageClassName}
                priority
            />
        </Link>
    );
};
