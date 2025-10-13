import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function ReviewsScroller({ children }: Props) {
    return (
        <div
            className="no-scrollbar relative h-120 overflow-y-auto"
            aria-label="Листаем отзывы гостей"
        >
            {children}
        </div>
    );
}
