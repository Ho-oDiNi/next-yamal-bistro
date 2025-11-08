export type YandexMetrikaFunction = (
    id: number,
    method: "hit",
    url: string,
) => void;

export type YandexMetrikaContainerProps = {
    enabled: boolean;
};
