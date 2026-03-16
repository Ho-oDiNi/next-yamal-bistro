import { notFound } from "next/navigation";

import { getDishBySlug } from "@/entities/dish";
import { DishMenu } from "@/widgets/dish-menu";

interface DishPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export const DishPage = async ({ params }: DishPageProps) => {
    const { slug } = await params;
    const dish = await getDishBySlug(slug);

    if (!dish) {
        notFound();
    }

    return <DishMenu {...dish} />;
};
