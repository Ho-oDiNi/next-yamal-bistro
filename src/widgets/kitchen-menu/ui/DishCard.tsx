import Image from "next/image";
import Link from "next/link";

import {
    getWeightUnitAbbr,
    getWeightUnitLabel,
    TDishData,
} from "@/entities/dish";

import mockImage from "@images/qr_code.png";

export const DishCard = ({
    name,
    slug,
    description,
    imageUrl,
    weightValue,
    weightUnit,
    price,
    tag,
}: TDishData) => {
    return (
        <article
            className="flex h-full w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white"
            itemProp="hasMenuItem"
            itemScope
            itemType="https://schema.org/MenuItem"
        >
            <Link href={`/menu/${slug}`} itemProp="url">
                <div className="relative h-60 shrink-0">
                    <Image
                        src={imageUrl || mockImage}
                        alt={name}
                        fill
                        className="object-cover"
                        itemProp="image"
                    />

                    {tag?.imageUrl && (
                        <div className="absolute top-5 right-5 h-25 w-25">
                            <Image
                                src={tag.imageUrl}
                                alt={tag.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                    <div className="space-y-4">
                        <h4 className="text-h4" itemProp="name">
                            {name}
                        </h4>
                        <p
                            className="font-roboto text-accent line-clamp-2 font-extralight"
                            itemProp="description"
                        >
                            {description}
                        </p>
                    </div>

                    <div className="flex-between text-contrast mt-auto pt-4">
                        <p
                            className="font-extralight"
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
                        <p
                            className="font-medium"
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                        >
                            <meta itemProp="priceCurrency" content="RUB" />
                            <meta itemProp="price" content={String(price)} />
                            {price}{" "}
                            <abbr title="рубли" className="no-underline">
                                руб
                            </abbr>
                        </p>
                    </div>
                </div>
            </Link>
        </article>
    );
};
