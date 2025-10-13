import Image from "next/image";

type Props = {
    href: string;
    imgSrc: string;
    imgAlt: string;
    width?: number;
    height?: number;
};

export default function StoreBadge({
    href,
    imgSrc,
    imgAlt,
    width = 120,
    height = 40,
}: Props) {
    return (
        <a href={href}>
            <Image src={imgSrc} height={height} width={width} alt={imgAlt} />
        </a>
    );
}
