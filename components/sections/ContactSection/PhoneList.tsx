type PhoneListProps = { numbers: string[] };

const formatTelHref = (num: string) => `tel:${num.replace(/[^\d+]/g, "")}`;

export default function PhoneList({ numbers }: PhoneListProps) {
    if (!numbers.length) return null;
    return (
        <ul className="flex flex-col">
            {numbers.map((num) => (
                <li key={num} className="my-[7px]">
                    <a
                        href={formatTelHref(num)}
                        aria-label={`Позвонить по номеру ${num}`}
                    >
                        {num}
                    </a>
                </li>
            ))}
        </ul>
    );
}
