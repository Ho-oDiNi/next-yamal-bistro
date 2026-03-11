import Image from "next/image";

import starGrayIcon from "@icons/star-gray.svg";
import starYellowIcon from "@icons/star-yellow.svg";

interface StarObj {
    filled: boolean;
    small?: boolean;
}

export const StarIcon = ({ filled, small = false }: StarObj) => {
    return (
        <Image
            src={filled ? starYellowIcon : starGrayIcon}
            alt=""
            className={small ? "h-4 w-4" : "h-5 w-5"}
        />
    );
};
