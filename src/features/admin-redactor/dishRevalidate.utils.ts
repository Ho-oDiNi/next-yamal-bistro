import { revalidatePath } from "next/cache";

export const revalidateDishPaths = async (
    dishes: Array<{ categorySlug?: string | null; slug: string }>,
) => {
    const paths = new Set<string>(["/dishes"]);

    for (const { categorySlug, slug } of dishes) {
        if (categorySlug) {
            paths.add(`/dishes/${categorySlug}/${slug}`);
        }
    }

    await Promise.all(Array.from(paths).map((path) => revalidatePath(path)));
};
