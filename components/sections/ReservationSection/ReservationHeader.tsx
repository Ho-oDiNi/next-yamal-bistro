type Props = { title: string; subtitle?: string };

export default function ReservationHeader({ title, subtitle }: Props) {
    return (
        <div className="mb-10 border-b-[3px] border-white/20 pb-10">
            <h2 id="reservation-title" className="mb-6 text-4xl font-bold">
                {title}
            </h2>
            {subtitle && (
                <p className="max-w-xl text-xl leading-snug font-light">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
