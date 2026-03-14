// features/admin-redactor/ui/view/MenuView.tsx
"use client";

import { AdminRedactorView } from "../model/adminRedactor.types";

interface MenuViewProps {
    onViewChange: (view: AdminRedactorView) => void;
    isPending: boolean;
}

const MenuView = ({ onViewChange, isPending }: MenuViewProps) => (
    <div className="space-y-6">
        <div className="grid gap-3">
            <button
                type="button"
                onClick={() => onViewChange("content")}
                className="rounded border border-gray-300 p-4 text-left hover:bg-gray-50"
            >
                Основные данные блюда
            </button>

            <button
                type="button"
                onClick={() => onViewChange("category")}
                className="rounded border border-gray-300 p-4 text-left hover:bg-gray-50"
            >
                Категории
            </button>
        </div>

        <div className="pt-3">
            <button
                type="submit"
                disabled={isPending}
                className="w-full rounded bg-blue-600 p-3 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
                {isPending ? "Сохранение..." : "Сохранить изменения"}
            </button>
        </div>
    </div>
);

export default MenuView;
