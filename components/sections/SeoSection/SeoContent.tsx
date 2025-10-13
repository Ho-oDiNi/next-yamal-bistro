import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function SeoContent({ children }: Props) {
    return <div className="flex items-center">{children}</div>;
}
