import Image from "next/image";
import Link from "next/link";

import { AdvantageElementProps } from "../model";

export const AdvantageElement = ({
    icon,
    title,
    description,
    href,
}: AdvantageElementProps) => {
    return (
        <div className="flex-start gap-6">
            <Image src={icon} alt="" />

            <Link href={href} className="hover:opacity-70">
                <p className="text-h3">{title}</p>
                <p className="text-h3__desc">{description}</p>
            </Link>
        </div>
    );
};
