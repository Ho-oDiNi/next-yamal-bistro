import Image from "next/image";
import { ReactNode } from "react";

type Props = {
    iconSrc: string;
    children: ReactNode;
};

export default function FooterIconItem({ iconSrc, children }: Props) {
    return (
        <li className="mb-[25px] flex">
            <Image
                src={iconSrc}
                className="mr-[32px]"
                height={28}
                width={28}
                alt=""
                aria-hidden="true"
            />
            <div>{children}</div>
        </li>
    );
}
