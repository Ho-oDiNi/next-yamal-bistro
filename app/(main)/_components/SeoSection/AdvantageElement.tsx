import Image from "next/image";
import React from "react";

interface AdvantageElementProps {
    icon: string;
    title: string;
    description: string | React.ReactNode;
}

const AdvantageElement = (props: AdvantageElementProps) => {
    return (
        <div className="flex items-center">
            <Image
                src={`/icons/${props.icon}.svg`}
                className="mr-4 lg:mr-8"
                height={24}
                width={24}
                alt=""
            />
            <div>
                <dt className="text-lg font-semibold lg:text-2xl">
                    {props.title}
                </dt>
                <dd className="text-sm font-light lg:text-base">
                    {props.description}
                </dd>
            </div>
        </div>
    );
};

export default AdvantageElement;
