import { YandexMetrikaContainer } from "./YandexMetrikaContainer";
import { isAnalyticsEnabled } from "../lib/isAnalyticsEnabled";

export const YandexMetrika = () => {
    if (!isAnalyticsEnabled()) return;

    return <YandexMetrikaContainer />;
};
