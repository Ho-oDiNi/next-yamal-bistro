import Image from "next/image";
import Link from "next/link";

import { TDishData } from "@/entities/dish";
import { getWeightUnitAbbr } from "@/entities/dish/lib/getWeightUnitAbbr";
import { getWeightUnitLabel } from "@/entities/dish/lib/getWeightUnitLabel";

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
        <Link href={`/dish/${slug}`}>
            <article className="flex h-full w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white">
                <div className="relative h-60 shrink-0">
                    <Image
                        src={imageUrl || mockImage}
                        alt={name}
                        fill
                        className="object-cover"
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
                        <h4 className="text-h4">{name}</h4>
                        <p className="font-roboto text-accent line-clamp-2 font-extralight">
                            {description}
                        </p>
                    </div>

                    <div className="flex-between text-contrast mt-auto pt-4">
                        <p className="font-extralight">
                            {weightValue}{" "}
                            <abbr
                                title={getWeightUnitAbbr(weightUnit)}
                                className="no-underline"
                            >
                                {" "}
                                {getWeightUnitLabel(weightUnit)}
                            </abbr>
                        </p>
                        <p className="font-medium">
                            {price}{" "}
                            <abbr title="рубли" className="no-underline">
                                руб
                            </abbr>
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    );
};
