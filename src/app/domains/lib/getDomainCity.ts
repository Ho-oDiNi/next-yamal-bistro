import { headers } from "next/headers";

import { DEFAULT_CITY, domainCities } from "@/app/domains/config";

import { domainCityProps } from "../model";

const extractSubdomain = (host: string): string => {
    if (!host) return "";

    const normalizedHost = host.trim().toLowerCase().split(":")[0];
    const [subdomain] = normalizedHost.split(".");
    return subdomain;
};

export const getDomainCity = async (): Promise<domainCityProps> => {
    const headersList = await headers();
    const host = headersList.get("host") ?? "";
    const subdomain = extractSubdomain(host);

    return domainCities.find((c) => c.slug === subdomain) ?? DEFAULT_CITY;
};
