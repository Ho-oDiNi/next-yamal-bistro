import { ReactNode } from "react";

type InfoGroupProps = { title: string; children: ReactNode };

export default function InfoGroup({ title, children }: InfoGroupProps) {
    return (
        <div>
            <h3 className="my-5 text-2xl font-semibold">{title}</h3>
            {children}
        </div>
    );
}
