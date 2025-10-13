import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function FooterContainer({ children }: Props) {
    return (
        <footer className="relative bg-[#EBEBEB] px-24 py-12 text-xl font-normal">
            <div className="container mx-auto h-auto rounded-[26px] bg-white px-24 py-12">
                {children}
            </div>
        </footer>
    );
}
