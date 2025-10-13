type ContactsSectionTitleProps = { text: string };

export default function ContactsSectionTitle({
    text,
}: ContactsSectionTitleProps) {
    return <h2 className="mb-10 text-4xl font-bold">{text}</h2>;
}
