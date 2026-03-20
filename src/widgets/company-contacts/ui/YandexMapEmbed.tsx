"use client";

import Image from "next/image";
import { useState } from "react";

import mapPreview from "@images/map-preview.jpg";

export const YandexMapEmbed = () => {
    const [isMapVisible, setIsMapVisible] = useState(false);

    return (
        <div className="2xs:min-w-75 relative min-h-80 w-full flex-1 overflow-hidden rounded-3xl shadow-md">
            {!isMapVisible ? (
                <button
                    type="button"
                    onClick={() => setIsMapVisible(true)}
                    className="group relative block h-full min-h-80 w-full"
                    aria-label="Показать карту"
                >
                    <Image
                        src={mapPreview}
                        alt="Ямал Бистро на карте Салехарда"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="group-hover:bg-brand-dark/10 absolute inset-0 transition-opacity" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-brand-dark rounded-xl bg-white px-4 py-2 text-sm font-bold shadow">
                            Посмотреть на карте
                        </span>
                    </div>
                </button>
            ) : (
                <iframe
                    sandbox="allow-orientation-lock allow-scripts allow-same-origin allow-popups"
                    src="https://yandex.ru/map-widget/v1/?from=api-maps&ll=66.600484%2C66.526556&mode=search&oid=95926227579&ol=biz&origin=jsapi_2_1_79&z=16.79"
                    className="h-full min-h-80 w-full"
                    title="Ямал Бистро на карте Салехарда"
                />
            )}
        </div>
    );
};
