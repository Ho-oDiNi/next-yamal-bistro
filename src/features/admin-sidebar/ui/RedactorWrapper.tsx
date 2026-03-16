"use client";

import { useEffect, useState } from "react";

import { ICategory } from "@/entities/category";
import { IDish } from "@/entities/dish";
import { SpinningLoader } from "@/shared/ui/SpinningLoader";

import { getDataChanged } from "../api";
import { AdminAction } from "../model";
import { CategoryFormSection } from "./CategoryFormSection";
import { DishFormSection } from "./DishFormSection";

interface RedactorWrapperProps {
    mode: AdminAction;
    onClose: () => void;
}

export const RedactorWrapper = ({ mode, onClose }: RedactorWrapperProps) => {
    const [loading, setLoading] = useState(true);

    const [message, setMessage] = useState("");
    const [dishes, setDishes] = useState<IDish[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);

    const handleDataChanged = async () => {
        setLoading(true);

        try {
            const response = await getDataChanged();

            setDishes(response.data.dishes);
            setCategories(response.data.categories);
            setMessage(response.message);
        } catch {
            setMessage("Не удалось обновить данные");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const redactorData = await getDataChanged();

                setDishes(redactorData.data.dishes);
                setCategories(redactorData.data.categories);
                setMessage(redactorData.message);
            } catch {
                setMessage("Не удалось загрузить данные");
            } finally {
                setLoading(false);
            }
        };

        void loadData();
    }, []);

    if (loading) {
        return <SpinningLoader fullScreen />;
    }

    return (
        <section className="space-y-6 p-6 pt-16 lg:p-10 lg:pt-16">
            <DishFormSection
                mode={mode}
                dishes={dishes}
                categories={categories}
                loading={loading}
                setLoading={setLoading}
                setMessage={setMessage}
                onDataChanged={handleDataChanged}
            />

            <CategoryFormSection
                mode={mode}
                dishes={dishes}
                categories={categories}
                loading={loading}
                setLoading={setLoading}
                setMessage={setMessage}
                onDataChanged={handleDataChanged}
            />

            {message ? <p className="text-sm">{message}</p> : null}
        </section>
    );
};
