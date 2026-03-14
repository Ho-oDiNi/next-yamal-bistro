import QuillEditor from "@/shared/lib/react-quill";
import InputField from "../ui/InputField";
import { Service } from "@/entities/service";
import TextareaField from "../ui/TextareaField";
import PriceAbbreviationField from "./PriceAbbreviationField";

interface ContentDataFieldProps {
    formData: {
        title: string;
        shortName: string;
        description: string;
        contentTitle: string;
        contentDescription: string;
        mainText: string;
        price: number;
        priceAbbr: string;
        priceExplanation: string;
        guarantee: string;
        duration: string;
    };
    onChange: (field: keyof Service, value: Service[keyof Service]) => void;
}

const ContentDataField = ({ formData, onChange }: ContentDataFieldProps) => {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <InputField
                    label="Название"
                    type="text"
                    value={formData.title}
                    onChange={(value) => onChange("title", value)}
                    required
                />
                <InputField
                    label="Кнопка услуги"
                    type="text"
                    value={formData.shortName || ""}
                    placeholder={formData.title}
                    onChange={(value) => onChange("shortName", value)}
                />
            </div>

            <TextareaField
                label="Описание"
                value={formData.description}
                onChange={(value) => onChange("description", value)}
                rows={3}
                required
            />

            <InputField
                label="Заголовок контента"
                type="text"
                value={formData.contentTitle}
                placeholder={formData.title}
                onChange={(value) => onChange("contentTitle", value)}
            />

            <InputField
                label="Описание контента"
                type="text"
                value={formData.contentDescription}
                onChange={(value) => onChange("contentDescription", value)}
            />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <InputField
                    label="Цена"
                    type="number"
                    value={formData.price}
                    onChange={(value) => onChange("price", Number(value))}
                    required
                />

                <PriceAbbreviationField
                    label="Аббревиатура"
                    value={formData.priceAbbr}
                    onChange={(abbr, explanation) => {
                        onChange("priceAbbr", abbr);
                        onChange("priceExplanation", explanation);
                    }}
                    required
                />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <InputField
                    label="Гарантия"
                    type="text"
                    value={formData.guarantee}
                    onChange={(value) => onChange("guarantee", value)}
                />
                <InputField
                    label="Срок выполнения"
                    type="text"
                    value={formData.duration}
                    onChange={(value) => onChange("duration", value)}
                />
            </div>

            <span className="block text-sm font-medium">Основной текст</span>
            <QuillEditor
                value={formData.mainText}
                onChange={(value) => onChange("mainText", value)}
                className="rounded border"
            />
        </div>
    );
};

export default ContentDataField;
