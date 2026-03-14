// features/admin-redactor/ui/view/ContentView.tsx
"use client";

import { BaseViewProps } from "@/features/admin-redactor/model/adminRedactor.types";

import BackButton from "../ui-test/BackButton";
import InputField from "../ui-test/InputField";
import TextareaField from "../ui-test/TextareaField";
import BackButton from "../ui-test/BackButton";

const ContentView = ({ formData, onChange, onBack }: BaseViewProps) => {
    return (
        <div className="space-y-4">
            <BackButton onBack={onBack} />

            <InputField
                label="Название"
                value={formData.name}
                onChange={(value) => onChange("name", value)}
                required
            />

            <InputField
                label="Slug"
                value={formData.slug}
                onChange={(value) => onChange("slug", value)}
                required
            />

            <TextareaField
                label="Описание"
                value={formData.description}
                onChange={(value) => onChange("description", value)}
                required
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField
                    label="Цена"
                    type="number"
                    min={0}
                    value={formData.price}
                    onChange={(value) => onChange("price", Number(value))}
                    required
                />

                <InputField
                    label="URL изображения"
                    value={formData.imageUrl ?? ""}
                    onChange={(value) =>
                        onChange("imageUrl", value || undefined)
                    }
                />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField
                    label="Вес"
                    type="number"
                    min={0}
                    value={formData.weightValue ?? ""}
                    onChange={(value) =>
                        onChange(
                            "weightValue",
                            value === "" ? undefined : Number(value),
                        )
                    }
                />

                <InputField
                    label="Единица веса"
                    value={formData.weightUnit ?? ""}
                    onChange={(value) =>
                        onChange("weightUnit", value || undefined)
                    }
                    placeholder="г / мл / кг"
                />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField
                    label="ID категории"
                    type="number"
                    min={1}
                    value={formData.categoryId ?? ""}
                    onChange={(value) =>
                        onChange(
                            "categoryId",
                            value === "" ? undefined : Number(value),
                        )
                    }
                />

                <InputField
                    label="ID тега"
                    type="number"
                    min={1}
                    value={formData.tagId ?? ""}
                    onChange={(value) =>
                        onChange(
                            "tagId",
                            value === "" ? undefined : Number(value),
                        )
                    }
                />
            </div>
        </div>
    );
};

export default ContentView;
