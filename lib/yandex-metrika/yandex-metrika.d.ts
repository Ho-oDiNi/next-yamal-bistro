import type { YandexMetrikaMethod } from "@/types/shared/yandexMetrika.types";

declare const ym: (
    id: number,
    method: YandexMetrikaMethod,
    ...params: unknown[]
) => void;
