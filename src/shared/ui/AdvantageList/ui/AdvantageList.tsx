import { AdvantageElement } from "./AdvantageElement";
import { ADVANTAGES_COMPANY } from "../config";

export const AdvantageList = () => {
    return (
        <ul className="z-2 grid grid-cols-1 gap-8 md:grid-cols-3">
            {ADVANTAGES_COMPANY.map(
                ({ title, icon, description, href }, index) => (
                    <AdvantageElement
                        key={index}
                        icon={icon}
                        title={title}
                        description={description}
                        href={href}
                    />
                ),
            )}
        </ul>
    );
};
