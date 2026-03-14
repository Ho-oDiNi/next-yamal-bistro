// features/admin-redactor/lib/normalizeDishPayload.ts
import { StaticImageData } from "next/image";

import { IDish } from "@/entities/dish/model";

import { adminRedactorSchema } from "../model/adminRedactor.schema";

const resolveImageUrl = (
    value: string | StaticImageData | undefined,
): string | undefined => {
    if (typeof value === "string") {
        const trimmed = value.trim();
        return trimmed || undefined;
    }

    if (value && typeof value === "object" && "src" in value) {
        const src = value.src;
        return typeof src === "string" ? src.trim() || undefined : undefined;
    }

    return undefined;
};

export const normalizeDishPayload = (payload: IDish): IDish => {
    return adminRedactorSchema.parse({
        ...payload,
        name: payload.name.trim(),
        description: payload.description.trim(),
        slug: payload.slug.trim(),
        weightUnit: payload.weightUnit?.trim() || undefined,
        imageUrl: resolveImageUrl(payload.imageUrl),
    });
};
