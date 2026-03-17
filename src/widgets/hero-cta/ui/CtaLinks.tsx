import { StyledLink } from "@/shared/ui/StyledLink";

export const CtaLinks = () => {
    return (
        <div className="flex flex-col gap-8 md:flex-row md:gap-20">
            <StyledLink href="tel:+79044755099" variant="secondary" size="lg">
                Заказать доставку
            </StyledLink>
            <StyledLink href="/#reservation" variant="primary" size="lg">
                Забронировать стол
            </StyledLink>
        </div>
    );
};
