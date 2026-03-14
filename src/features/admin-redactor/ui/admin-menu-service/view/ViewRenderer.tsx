// features/admin-redactor/ui/view/ViewRenderer.tsx
"use client";

import CategoryCreateView from "./CategoryCreateView";
import CategoryView from "./CategoryView";
import ContentView from "./ContentView";
import DeleteView from "./DeleteView";
import MenuView from "./MenuView";
import { ViewRendererProps } from "../model/adminRedactor.types";

const ViewRenderer = ({
    currentView,
    formData,
    onViewChange,
    onChange,
    isPending,
    deleteProps,
    categoryViewProps,
    categoryCreateViewProps,
}: ViewRendererProps) => {
    const handleBack = () => onViewChange("menu");

    switch (currentView) {
        case "category":
            return categoryViewProps ? (
                <CategoryView {...categoryViewProps} onBack={handleBack} />
            ) : null;

        case "categoryCreate":
            return categoryCreateViewProps ? (
                <CategoryCreateView
                    {...categoryCreateViewProps}
                    onBack={() => onViewChange("category")}
                />
            ) : null;

        case "content":
            return (
                <ContentView
                    formData={formData}
                    onChange={onChange}
                    onBack={handleBack}
                />
            );

        case "delete":
            return deleteProps ? <DeleteView {...deleteProps} /> : null;

        default:
            return (
                <MenuView onViewChange={onViewChange} isPending={isPending} />
            );
    }
};

export default ViewRenderer;
