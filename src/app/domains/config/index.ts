import { domainCityProps } from "../model";

const baseUrl =
    process.env.NODE_ENV === "production"
        ? "yamal-bistro.ru"
        : "localhost:3000";
const baseProtocol = process.env.NODE_ENV === "production" ? "https" : "http";

export const domainCities: domainCityProps[] = [
    {
        id: 1,
        slug: "subdomainYamal",
        name: "Yamal",
        url: `${baseProtocol}://${baseUrl}`,
    },
];

export const DEFAULT_CITY = domainCities[0];
