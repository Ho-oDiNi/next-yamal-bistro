import { ReactNode } from "react";

import { NavigationLinkItem } from "@/shared/lib/site-links";
import { Override } from "@/shared/lib/ts-utility";

export type FooterColumnLink = Override<
    NavigationLinkItem,
    { label: ReactNode }
>;
