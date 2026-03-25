import Image from "next/image";

import {
    getSupplements,
    getWeightUnitAbbr,
    getWeightUnitLabel,
    IDish,
} from "@/entities/dish";
import { StyledLink } from "@/shared/ui/StyledLink";

import mockImage from "@images/qr_code.png";

import { DishBreadcrumbs } from "./DishBreadcrumbs";
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
            <DishBreadcrumbs dishName={name} />
            <h2 className="text-h2" itemProp="name">
                {name}
            </h2>
            <div className="flex flex-col-reverse gap-8 lg:flex-row">
                <div className="flex w-full flex-col gap-8 lg:w-2/3">
                    <p
                        className="text-accent font-roboto"
                        itemProp="description"
                    >
                        {description}
                    </p>
                    <div className="flex w-full flex-col gap-8 lg:flex-row">
                        <InfoGroup
                            title="Состав"
                            description={
                                <p
                                    className="font-light"
                                    itemProp="nutrition"
                                    itemScope
                                    itemType="https://schema.org/NutritionInformation"
                                >
                                    <meta
                                        itemProp="servingSize"
                                        content={`${weightValue} ${getWeightUnitLabel(weightUnit)}`}
                                    />
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
                            <p>{composition}</p>
                        </InfoGroup>

                        <InfoGroup
                            title="Цена"
                            description={
                                <p
                                    className="font-light"
                                    itemProp="offers"
                                    itemScope
                                    itemType="https://schema.org/Offer"
                                >
                                    <meta
                                        itemProp="priceCurrency"
                                        content="RUB"
                                    />
                                    <meta
                                        itemProp="price"
                                        content={String(price)}
                                    />
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
                <div className="relative max-h-80 min-h-80 w-full max-w-80 overflow-hidden rounded-2xl sm:mx-auto">
                    <Image
                        src={imageUrl ?? mockImage}
                        className="object-cover"
                        fill
                        alt={name}
                        itemProp="image"
                        loading="lazy"
                    />
                </div>
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
