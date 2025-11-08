import { YandexMetrikaFunction } from "./YandexMetrikaContainer.types";

export const getYandexMetrika = (): YandexMetrikaFunction | undefined => {
    if (typeof window === "undefined") {
        return undefined;
    }

    const { ym } = window as typeof window & {
        ym?: (id: number, method: string, ...params: unknown[]) => void;
    };

    if (typeof ym !== "function") {
        return undefined;
    }

    return (id: number, method: "hit", url: string) => ym(id, method, url);
};
