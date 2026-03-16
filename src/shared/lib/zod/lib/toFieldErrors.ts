import z, { ZodError } from "zod";

export const toFieldErrors = (error: ZodError): Record<string, string> => {
    const { fieldErrors } = z.flattenError(error);
    type fieldErrorsType = Array<[string, string[] | undefined]>;

    return Object.fromEntries(
        (Object.entries(fieldErrors) as fieldErrorsType).map(([key, value]) => [
            key,
            value?.[0] ?? "",
        ]),
    );
};
