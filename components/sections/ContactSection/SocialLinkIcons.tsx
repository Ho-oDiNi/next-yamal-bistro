import Image from "next/image";

type SocialLink = { href: string; icon: string; label: string };
type SocialLinkIconsProps = { links: SocialLink[] };

export default function SocialLinkIcons({ links }: SocialLinkIconsProps) {
    if (!links.length) return null;
    return (
        <div className="ml-[26px] flex gap-4">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                >
                    <Image
                        src={link.icon}
                        height={40}
                        width={40}
                        alt={link.label}
                    />
                </a>
            ))}
        </div>
    );
}
