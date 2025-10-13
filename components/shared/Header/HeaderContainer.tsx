import { ReactNode } from "react";

export default function HeaderContainer({ children }: { children: ReactNode }) {
    return (
        <header className="sticky top-0 z-[99] bg-white/90 text-xl font-bold text-[var(--color-brand-dark)] backdrop-blur-md">
            <div className="container mx-auto flex max-w-5xl items-center justify-between py-5">
                {children}
            </div>
        </header>
    );
}
