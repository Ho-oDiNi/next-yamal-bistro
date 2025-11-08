import YandexMetrikaContainer from "./YandexMetrikaContainer";

export default function YandexMetrika() {
    const analyticsEnabled = process.env.NODE_ENV === "production";
    return <YandexMetrikaContainer enabled={analyticsEnabled} />;
}
