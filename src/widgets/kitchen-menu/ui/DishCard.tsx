import Image from "next/image";
import Link from "next/link";

import { TDishData } from "@/entities/dish";

import mockImage from "@images/qr_code.png";

export const DishCard = ({
    name,
    slug,
    description,
    imageUrl,
    weightValue,
    weightUnit,
    price,
}: TDishData) => {
    return (
        <Link href={`/dish/${slug}`}>
            <article className="flex h-105 w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white">
                <div className="h-7/12 shrink-0">
                    <Image
                        src={imageUrl || mockImage}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col p-6">
                    <div className="space-y-4">
                        <h4 className="text-h4">{name}</h4>
                        <p className="font-roboto line-clamp-2 font-extralight">
                            {description}
                        </p>
                    </div>

                    <div className="flex-between text-accent mt-auto pt-4">
                        <p className="font-extralight">
                            {weightValue} {weightUnit}
                        </p>
                        <p className="font-medium">
                            {price}{" "}
                            <abbr title="рублей" className="no-underline">
                                руб
                            </abbr>
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    );
};
