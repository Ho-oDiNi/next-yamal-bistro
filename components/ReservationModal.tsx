"use client";

import React, { useState } from "react";

export const ReservationModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        guests: 1,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Форма отправлена:", formData);
        // Здесь можно добавить отправку данных на сервер
        setIsOpen(false);
    };

    return (
        <>
            {/* <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
            >
                Забронировать стол
            </button> */}

            {isOpen && (
                <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
                    <div className="relative w-full max-w-md rounded-lg bg-white p-6">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            Х
                        </button>

                        <h2 className="mb-4 text-2xl font-bold">
                            Забронируйте стол
                        </h2>
                        <p className="mb-6">
                            Оставьте контактные данные и<br />
                            наш менеджер сразу свяжется с Вами
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="mb-1 block">Ваше имя</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full rounded border p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-1 block">Телефон</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value,
                                        })
                                    }
                                    className="w-full rounded border p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-1 block">
                                    Дата и время
                                </label>
                                <input
                                    type="datetime-local"
                                    value={formData.date}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            date: e.target.value,
                                        })
                                    }
                                    className="w-full rounded border p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-1 block">
                                    Количество гостей
                                </label>
                                <select
                                    value={formData.guests}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            guests: parseInt(e.target.value),
                                        })
                                    }
                                    className="w-full rounded border p-2"
                                >
                                    {[1, 2, 3, 4, 5, 6].map((num) => (
                                        <option key={num} value={num}>
                                            {num}{" "}
                                            {num === 1 ? "гость" : "гостей"}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-amber-600 py-3 text-white transition hover:bg-amber-700"
                            >
                                Отправить заявку
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
