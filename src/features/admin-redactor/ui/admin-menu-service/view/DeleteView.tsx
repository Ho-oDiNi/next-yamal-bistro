"use client";

import StatusMessage from "./StatusMessage";
import { DeleteViewProps } from "../model/adminRedactor.types";

const DeleteView = ({
    dishTitle,
    dishSlug,
    onCancel,
    deleteState,
}: DeleteViewProps) => {
    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-xl font-semibold">Удаление блюда</h2>
                <p className="text-sm text-gray-600">
                    Вы действительно хотите удалить «{dishTitle}»?
                </p>
            </div>

            <StatusMessage
                message={deleteState?.message}
                success={deleteState?.success}
            />

            <input type="hidden" name="dishSlug" value={dishSlug} />

            <div className="flex flex-wrap gap-2">
                <button
                    type="submit"
                    className="rounded bg-red-600 px-4 py-2 text-sm text-white"
                >
                    Удалить
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="rounded border border-gray-300 px-4 py-2 text-sm"
                >
                    Отмена
                </button>
            </div>
        </div>
    );
};

export default DeleteView;
