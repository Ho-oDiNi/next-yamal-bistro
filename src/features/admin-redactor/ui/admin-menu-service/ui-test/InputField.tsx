// features/admin-redactor/ui/ui/InputField.tsx
"use client";

interface InputFieldProps {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: "text" | "number";
    placeholder?: string;
    required?: boolean;
    min?: number;
}

const InputField = ({
    label,
    value,
    onChange,
    type = "text",
    placeholder,
    required,
    min,
}: InputFieldProps) => (
    <label className="block space-y-2">
        <span className="text-sm font-medium text-gray-700">
            {label}
            {required ? " *" : ""}
        </span>

        <input
            type={type}
            value={value}
            min={min}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            className="w-full rounded border border-gray-300 p-2 text-sm"
        />
    </label>
);

export default InputField;
