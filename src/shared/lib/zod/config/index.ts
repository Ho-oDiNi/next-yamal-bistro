import { createPreprocess } from "../lib/createPreprocess";

export const nullableString = createPreprocess({
    emptyAs: "null",
    valueAs: "string",
});

export const nullableNumber = createPreprocess({
    emptyAs: "null",
    valueAs: "number",
});

export const optionalString = createPreprocess({
    emptyAs: "undefined",
    valueAs: "string",
});

export const optionalNumber = createPreprocess({
    emptyAs: "undefined",
    valueAs: "number",
});
