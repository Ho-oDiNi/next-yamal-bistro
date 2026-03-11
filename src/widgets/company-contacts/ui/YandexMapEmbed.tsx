export const YandexMapEmbed = () => {
    return (
        <iframe
            sandbox="allow-orientation-lock allow-scripts allow-same-origin allow-popups"
            src="https://yandex.ru/map-widget/v1/?from=api-maps&ll=66.600484%2C66.526556&mode=search&oid=95926227579&ol=biz&origin=jsapi_2_1_79&z=16.79"
            className="w-full flex-1 rounded-3xl shadow-md"
            title="Ямал Бистро на карте Салехарда"
            loading="lazy"
        />
    );
};
