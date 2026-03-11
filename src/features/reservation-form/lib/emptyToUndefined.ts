export const emptyToUndefined = (value: unknown) => {
    if (value === "" || value === null || value === undefined) {
        return undefined;
    }

    return value;
};
