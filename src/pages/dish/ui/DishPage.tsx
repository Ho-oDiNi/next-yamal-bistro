import { notFound } from "next/navigation";

import { getDishBySlug } from "@/entities/dish";
import { DishMenu } from "@/widgets/dish-menu";

import { DishPageParams } from "../model";

export const DishPage = async ({ params }: DishPageParams) => {
    const { slug } = await params;
    const dish = await getDishBySlug(slug);

    if (!dish) {
        notFound();
    }

    return <DishMenu {...dish} />;
};
