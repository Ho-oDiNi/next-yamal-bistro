import Image from "next/image";
import React from "react";

interface AdvantageElementProps {
    icon: string;
    title: string;
    description: string | React.ReactNode;
}

const AdvantageElement = (props: AdvantageElementProps) => {
    return (
        <div className="flex">
            <Image
                src={`/icons/${props.icon}.svg`}
                className="mr-4"
                height={20}
                width={20}
                alt=""
            />
            <div>
                <dt className="text-2xl font-semibold">{props.title}</dt>
                <dd className="text-base font-light">{props.description}</dd>
            </div>
        </div>
    );
};

export default AdvantageElement;
