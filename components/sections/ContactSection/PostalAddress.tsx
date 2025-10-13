type PostalAddressProps = { city: string; street: string; house: string };

export default function PostalAddress({
    city,
    street,
    house,
}: PostalAddressProps) {
    return (
        <address className="not-italic">
            <span>{city}, </span>
            <span>{street}, </span>
            <span>{house}</span>
        </address>
    );
}
//  return (
