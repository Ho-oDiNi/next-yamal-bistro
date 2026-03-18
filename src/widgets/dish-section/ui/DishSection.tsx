import Image from "next/image";

import { getSupplements, IDish } from "@/entities/dish";

import mockImage from "@images/qr_code.png";

import { DishSectionContainer } from "./DishSectionContainer";
import { InfoGroup } from "./InfoGroup";
import { SupplementList } from "./SupplementList";

export const DishSection = async ({
    id,
    name,
    price,
    description,
    weightValue,
    weightUnit,
    composition,
    imageUrl,
}: IDish) => {
    const supplements = await getSupplements(id);

    return (
        <DishSectionContainer>
            <h2 className="text-h2">{name}</h2>
            <div className="flex flex-col gap-8 lg:flex-row">
                <div className="flex w-full flex-col gap-8 lg:w-2/3">
                    <p className="text-accent font-roboto">{description}</p>
                    <div className="flex w-full flex-col gap-8 lg:flex-row">
                        <InfoGroup
                            title="Состав"
                            description={`${weightValue} ${weightUnit}`}
                        >
                            {composition}
                        </InfoGroup>

                        <InfoGroup title="Цена" description={`${price} руб`}>
                            <SupplementList supplements={supplements} />
                        </InfoGroup>
                    </div>
                </div>
                <Image
                    src={imageUrl ?? mockImage}
                    className="max-h-80 w-full max-w-80 rounded-2xl object-cover sm:mx-auto"
                    height={400}
                    width={400}
                    alt={name}
                />
            </div>
        </DishSectionContainer>
    );
};
