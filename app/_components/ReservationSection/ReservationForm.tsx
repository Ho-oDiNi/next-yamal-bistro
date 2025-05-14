import Form from "next/form";
import React from "react";

export function ReservationForm() {
    return (
        <Form action="/" className="space-y-12">
            <div className="grid grid-cols-3 gap-10">
                <input
                    type="number"
                    placeholder="Количество человек"
                    min="1"
                    required
                />
                <input type="date" placeholder="Дата" required />
                <input type="time" placeholder="Время" required />
            </div>

            <div className="grid grid-cols-2 gap-10">
                <input type="text" placeholder="Ваше имя" required />
                <input type="tel" placeholder="Ваш телефон" required />
            </div>

            <div className="flex justify-between">
                <label className="accent-secession-demi-15 flex max-w-1/5 items-center">
                    <input
                        type="checkbox"
                        className="mr-3 h-10 w-10 border-gray-300"
                        required
                    />
                    Заполняя форму, я даю согласие на обработку персональных
                    данных
                </label>

                <button type="submit" className="btn btn-primary">
                    Забронировать
                </button>
            </div>
        </Form>
    );
}
