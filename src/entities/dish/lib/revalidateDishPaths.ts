import { revalidatePath } from "next/cache";

export const revalidateDishPaths = async (
    dishes: Array<{ categorySlug: string; dishSlug: string }>,
) => {
    const paths = new Set<string>(["/dishes"]);

    for (const { categorySlug, dishSlug } of dishes) {
        paths.add(`/dishes/${categorySlug}/${dishSlug}`);
    }

    await Promise.all(Array.from(paths).map((path) => revalidatePath(path)));
};
