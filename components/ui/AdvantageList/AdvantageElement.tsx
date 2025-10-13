import Image from "next/image";
import React from "react";

interface AdvantageElementProps {
    icon: string;
    title: string;
    description: string | React.ReactNode;
}

const AdvantageElement = ({
    icon,
    title,
    description,
}: AdvantageElementProps) => {
    return (
        <>
            <dt className="text-2xl font-semibold">
                <span className="flex items-start">
                    <Image
                        src={`/icons/${icon}.svg`}
                        className="mt-1 mr-4"
                        height={20}
                        width={20}
                        alt=""
                        aria-hidden="true"
                    />
                    <span>{title}</span>
                </span>
            </dt>
            <dd className="text-base font-light">{description}</dd>
        </>
    );
};

export default AdvantageElement;
export type { AdvantageElementProps };
