interface AdvantageElementProps {
    icon: string;
    title: string;
    description: string | React.ReactNode;
}

export const AdvantageElement = (props: AdvantageElementProps) => {
    return (
        <div className={`before-icon before-icon-${props.icon}`}>
            <dt className="subhead-secession-demi-26">{props.title}</dt>
            <dd className="accent-secession-light-16">{props.description}</dd>
        </div>
    );
};
