type EmptyMode = "null" | "undefined";
type ValueMode = "string" | "number" | "raw";

interface PreprocessOptions {
    emptyAs?: EmptyMode;
    valueAs?: ValueMode;
    trim?: boolean;
}

export const createPreprocess = ({
    emptyAs = "undefined",
    valueAs = "raw",
    trim = true,
}: PreprocessOptions = {}) => {
    return (value: unknown) => {
        if (value === null || value === undefined) {
            return emptyAs === "null" ? null : undefined;
        }

        if (typeof value === "string") {
            const normalized = trim ? value.trim() : value;

            if (normalized === "") {
                return emptyAs === "null" ? null : undefined;
            }

            if (valueAs === "string") {
                return normalized;
            }

            if (valueAs === "number") {
                const parsed = Number(normalized);
                return Number.isNaN(parsed) ? value : parsed;
            }

            return normalized;
        }

        if (valueAs === "number" && typeof value === "number") {
            return Number.isNaN(value) ? value : value;
        }

        return value;
    };
};
