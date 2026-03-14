"use client";

import { useFormStatus } from "react-dom";
import StatusMessage from "@/shared/ui/StatusMessage";
import { DeleteViewProps } from "@/features/admin-redactor/model/adminRedactor.types";

const DeleteView = ({
    dishTitle,
    onCancel,
    deleteState,
    dishSlug,
}: DeleteViewProps) => {
    const { pending } = useFormStatus();

    return (
        <div className="space-y-6">
            <input type="hidden" name="dishSlug" value={dishSlug} />

            <StatusMessage
                message={deleteState?.message}
                success={deleteState?.success}
            />

            <p className="text-main">
                Вы точно хотите удалить{" "}
                <span className="font-semibold italic">{dishTitle}</span>?
                Данное действие невозможно будет отменить
            </p>

            <div className="flex flex-wrap gap-4">
                <button
                    type="submit"
                    disabled={pending}
                    className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                >
                    Удалить
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={pending}
                    className="rounded-lg border border-slate-900 px-4 py-2 font-semibold transition hover:bg-slate-200 disabled:opacity-50"
                >
                    Отмена
                </button>
            </div>
        </div>
    );
};

export default DeleteView;
