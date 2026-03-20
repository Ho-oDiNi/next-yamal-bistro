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

                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="rounded-full bg-white px-5 py-3 text-sm font-medium shadow">
                            Открыть карту
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
