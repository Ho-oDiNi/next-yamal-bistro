import Image from "next/image";

import { cn } from "@/shared/lib/cn";

import deerIcon from "@icons/deer-white.svg";
import centerImage from "@images/sun-center.png";

type SpinningSunProps = {
    isCenter?: boolean;
};

export const SpinningSun = ({ isCenter = true }: SpinningSunProps) => {
    return (
        <div
            className={
                isCenter ? "relative hidden md:block" : "block md:hidden"
            }
        >
            {isCenter && (
                <>
                    <Image
                        src={centerImage}
                        alt=""
                        className="absolute-center w-40 object-cover lg:w-60"
                    />
                    <div className="absolute-center w-60 lg:w-80">
                        <Image
                            src={deerIcon}
                            alt=""
                            className="animate-spin [animation-duration:180s]"
                        />
                    </div>
                </>
            )}

            <div
                className={cn(
                    "w-80 lg:w-100",
                    isCenter
                        ? "absolute-center"
                        : "absolute-right 2xs:translate-x-9/12 xs:translate-x-8/12 translate-x-10/12 sm:translate-x-7/12",
                )}
            >
                <Image
                    src={deerIcon}
                    alt=""
                    className="animate-spin [animation-direction:reverse] [animation-duration:180s]"
                />
            </div>
        </div>
    );
};
