import React from "react";

interface AdvantageElementProps {
    icon: string;
    title: string;
    description: string | React.ReactNode;
}

const AdvantageElement = (props: AdvantageElementProps) => {
    return (
        <div className={`before-icon before-icon-${props.icon}`}>
            <dt className="font-demi text-2xl">{props.title}</dt>
            <dd className="text-base font-light">{props.description}</dd>
        </div>
    );
};

export default AdvantageElement;
