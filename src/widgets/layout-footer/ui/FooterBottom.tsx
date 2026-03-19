import { Logo } from "@/shared/ui/Logo";

export const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex-between">
            <Logo isFull itemProp="image" />

            <span itemProp="copyrightNotice">© 2025 — {currentYear}</span>
        </div>
    );
};
