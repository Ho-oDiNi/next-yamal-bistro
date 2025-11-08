import { ClassNameValue } from "@/lib/cn/cn.types";

export const cn = (...classes: ClassNameValue[]): string => {
    return classes.filter(Boolean).join(" ");
};
