// features/admin-redactor/ui/ui/BackButton.tsx
"use client";

interface BackButtonProps {
    onBack: () => void;
}

export const BackButton = ({ onBack }: BackButtonProps) => (
    <button
        type="button"
        onClick={onBack}
        className="rounded border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
    >
        Назад
    </button>
);
