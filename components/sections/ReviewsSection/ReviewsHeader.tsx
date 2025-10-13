import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function ReviewsHeader({ children }: Props) {
    return <h2 className="mb-10 text-4xl font-bold">{children}</h2>;
}
