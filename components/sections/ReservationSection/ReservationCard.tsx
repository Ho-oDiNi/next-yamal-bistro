import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function ReservationCard({ children }: Props) {
    return (
        <div className="bg-brand-dark/60 container rounded-[26px] px-24 py-30 backdrop-blur-sm">
            {children}
        </div>
    );
}
