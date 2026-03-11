import Image from "next/image";

import { SocialLink } from "../model";

type SocialLinkIconsProps = { links: SocialLink[] };

export const SocialLinkIcons = ({ links }: SocialLinkIconsProps) => {
    if (!links.length) return null;
    return (
        <div className="flex-center xs:flex-none gap-4">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="hover:opacity-70"
                >
                    <Image
                        src={link.icon}
                        className="h-10 w-10"
                        alt={link.label}
                    />
                </a>
            ))}
        </div>
    );
};
