import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: {
            default: `Стандартное название страницы`,
            template: `%s | Дополнительная информация`,
        },
        description: `Описание страницы для поисковых систем`,
    };
};
