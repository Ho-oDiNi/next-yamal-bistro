import Image from "next/image";

import { IDish } from "@/entities/dish/model";

import mockImage from "@images/qr_code.png";

export const DishCard = ({
    name,
    description,
    imageUrl,
    weightValue,
    weightUnit,
    price,
}: IDish) => {
    return (
        <article className="h-105 w-full max-w-xl overflow-hidden rounded-3xl bg-white">
            <div className="h-7/12">
                <Image
                    src={imageUrl || mockImage}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="space-y-4 p-6">
                <h4 className="text-main font-bold">{name}</h4>
                <p className="line-clamp-2">{description}</p>
                <div className="flex-between">
                    <p>
                        {weightValue} {weightUnit}
                    </p>
                    <p>
                        {price}{" "}
                        <abbr title="рублей" className="no-underline">
                            руб
                        </abbr>
                    </p>
                </div>
            </div>
        </article>
    );
};
