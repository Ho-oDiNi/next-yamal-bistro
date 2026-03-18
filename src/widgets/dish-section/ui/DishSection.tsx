import Image from "next/image";

import { getSupplements, IDish } from "@/entities/dish";
import { getWeightUnitAbbr } from "@/entities/dish/lib/getWeightUnitAbbr";
import { getWeightUnitLabel } from "@/entities/dish/lib/getWeightUnitLabel";
import { StyledLink } from "@/shared/ui/StyledLink";

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
                            description={
                                <p className="font-light">
                                    {weightValue}{" "}
                                    <abbr
                                        title={getWeightUnitAbbr(weightUnit)}
                                        className="no-underline"
                                    >
                                        {" "}
                                        {getWeightUnitLabel(weightUnit)}
                                    </abbr>
                                </p>
                            }
                        >
                            {composition}
                        </InfoGroup>

                        <InfoGroup
                            title="Цена"
                            description={
                                <p className="font-light">
                                    {price}{" "}
                                    <abbr
                                        title="рубли"
                                        className="no-underline"
                                    >
                                        руб
                                    </abbr>
                                </p>
                            }
                        >
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
            <div className="flex-between xs:flex-row flex flex-col gap-6 lg:flex-none">
                <StyledLink href="tel:+79044755099" variant="gray" size="lg">
                    Заказать доставку
                </StyledLink>
                <StyledLink href="/#reservation" variant="primary" size="lg">
                    Забронировать стол
                </StyledLink>
            </div>
        </DishSectionContainer>
    );
};
