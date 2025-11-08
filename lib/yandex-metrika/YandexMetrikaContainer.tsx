"use client";

import { YM_COUNTER_ID } from "@/constants";
import { usePathname } from "next/navigation";
import { useEffect, type FC } from "react";

import YandexMetrikaInitializer from "./YandexMetrikaInitializer";
import { getYandexMetrika } from "./YandexMetrikaContainer.utils";
import { YandexMetrikaContainerProps } from "./YandexMetrikaContainer.types";

const YandexMetrikaContainer: FC<YandexMetrikaContainerProps> = ({
    enabled,
}) => {
    const pathname = usePathname();

    useEffect(() => {
        const metrika = getYandexMetrika();

        if (pathname && enabled && metrika) {
            metrika(YM_COUNTER_ID, "hit", pathname);
        }
    }, [pathname, enabled]);

    if (!enabled) return null;

    return (
        <YandexMetrikaInitializer
            id={YM_COUNTER_ID}
            initParameters={{
                ssr: true,
                webvisor: true,
                clickmap: true,
                ecommerce: "dataLayer",
                accurateTrackBounce: true,
                trackLinks: true,
                defer: true,
            }}
        />
    );
};

export default YandexMetrikaContainer;
