import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function SeoTextColumn({ children }: Props) {
    return <div className="max-w-160 pr-10">{children}</div>;
}
