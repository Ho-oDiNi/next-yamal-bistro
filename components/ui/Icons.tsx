"use server"
import Image from "next/image"

interface IconsProps {
    src: string;
    width: number;
    height: number;
    className?: string;
    alt?: string;
}

export const Icons = async (props: IconsProps) => {
    return (
        <Image
            src={`../../icons/${props.src}.svg`}
            width={props.width}
            height={props.height}
            className={props.className || ""}
            alt={props.alt || ""}
        />
    );
}