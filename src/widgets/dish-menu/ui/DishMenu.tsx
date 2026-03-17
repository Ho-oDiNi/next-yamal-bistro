import Image from "next/image";

import { TDishData } from "@/entities/dish";

import mockImage from "@images/qr_code.png";

import { DishMenuContainer } from "./DishMenuContainer";
import { InfoGroup } from "./InfoGroup";
import { COMPOSITION, SUPPLEMENTS } from "../config";
import { SupplementList } from "./SupplementList";

// TODO: не забыть исправить
export const DishMenu = ({
    name,
    price,
    description,
    weightValue,
    weightUnit,
    // composition,
    // supplements
    imageUrl,
}: TDishData) => {
    return (
        <DishMenuContainer>
            <h2 className="text-h2">{name}</h2>
            <div className="flex flex-col gap-8 lg:flex-row">
                <div className="flex w-full flex-col gap-8 lg:w-2/3">
                    <p className="text-accent font-roboto">{description}</p>
                    <div className="flex w-full flex-col gap-8 lg:flex-row">
                        <InfoGroup
                            title="Состав"
                            description={`${weightValue} ${weightUnit}`}
                        >
                            {COMPOSITION}
                        </InfoGroup>

                        <InfoGroup title="Цена" description={`${price} руб`}>
                            <SupplementList supplements={SUPPLEMENTS} />
                        </InfoGroup>
                    </div>
                </div>
                <Image
                    src={imageUrl ?? mockImage}
                    className="max-h-80 w-full max-w-80 object-cover sm:mx-auto"
                    height={400}
                    width={400}
                    alt={name}
                />
            </div>
        </DishMenuContainer>
    );
};
