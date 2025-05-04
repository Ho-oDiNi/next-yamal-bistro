"use client";

import { useState } from "react";

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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            Х
                        </button>

                        <h2 className="text-2xl font-bold mb-4">
                            Забронируйте стол
                        </h2>
                        <p className="mb-6">
                            Оставьте контактные данные и<br />
                            наш менеджер сразу свяжется с Вами
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1">Ваше имя</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1">Телефон</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1">
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
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-1">
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
                                    className="w-full p-2 border rounded"
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
                                className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
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
