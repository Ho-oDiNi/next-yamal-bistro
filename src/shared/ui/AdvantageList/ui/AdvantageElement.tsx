import Image from "next/image";
import Link from "next/link";

import { isExternalLink } from "@/shared/lib/site-links";

import { AdvantageElementProps } from "../model";

export const AdvantageElement = ({
    icon,
    title,
    description,
    href,
}: AdvantageElementProps) => {
    const isExternal = isExternalLink(href);

    return (
        <li className="flex-start gap-6">
            <Image src={icon} alt="" />

            <Link
                href={href}
                className="hover:opacity-70"
                rel={isExternal ? "noopener noreferrer" : undefined}
                target={isExternal ? "_blank" : undefined}
            >
                <p className="text-contrast">{title}</p>
                <p className="font-roboto text-base font-extralight">
                    {description}
                </p>
            </Link>
        </li>
    );
};
