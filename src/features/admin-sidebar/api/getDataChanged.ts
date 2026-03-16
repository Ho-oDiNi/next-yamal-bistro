"use server";

import { isAdminServerSide } from "@/app/auth";
import { getCategories } from "@/entities/category/api/getCategories";
import { getDishes } from "@/entities/dish/api/getDishes";

interface RedactorDataResponse {
    success: boolean;
    message: string;
    data: {
        dishes: Awaited<ReturnType<typeof getDishes>>;
        categories: Awaited<ReturnType<typeof getCategories>>;
    };
}

export const getDataChanged = async (): Promise<RedactorDataResponse> => {
    const isAdmin = await isAdminServerSide();

    if (!isAdmin) {
        return {
            success: false,
            message: "Ошибка авторизации",
            data: {
                dishes: [],
                categories: [],
            },
        };
    }

    const [dishes, categories] = await Promise.all([
        getDishes(),
        getCategories(),
    ]);

    return {
        success: true,
        message: "",
        data: {
            dishes,
            categories,
        },
    };
};
