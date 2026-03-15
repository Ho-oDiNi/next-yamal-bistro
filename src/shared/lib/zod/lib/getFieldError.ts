import z, { ZodError } from "zod";

export const getFieldError = (error: ZodError) => {
    const fieldErrors: Record<string, string[] | undefined> =
        z.flattenError(error).fieldErrors;

    return (key: string): string => fieldErrors[key]?.[0] ?? "";
};
