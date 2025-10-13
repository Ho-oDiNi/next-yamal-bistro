import CtaButton from "./CtaButton";

type HeroActionsProps = {
    delivery: { label: string; href: string };
    reserve: { label: string; href: string };
};

export default function HeroActions({ delivery, reserve }: HeroActionsProps) {
    return (
        <div className="flex items-center">
            <CtaButton
                href={delivery.href}
                variant="secondary"
                className="mr-20"
            >
                {delivery.label}
            </CtaButton>
            <CtaButton href={reserve.href} variant="primary">
                {reserve.label}
            </CtaButton>
        </div>
    );
}
