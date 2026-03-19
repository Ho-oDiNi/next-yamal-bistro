type PhoneListProps = {
    numbers: string[];
};

const formatTelHref = (num: string) => `tel:${num.replace(/[^\d+]/g, "")}`;

export const PhoneList = ({ numbers }: PhoneListProps) => {
    if (!numbers.length) return null;
    return (
        <ul className="xs:mb-2 flex flex-col">
            {numbers.map((num) => (
                <li key={num}>
                    <a
                        href={formatTelHref(num)}
                        className="hover:opacity-70"
                        itemProp="telephone"
                    >
                        {num}
                    </a>
                </li>
            ))}
        </ul>
    );
};
