export const PostalAddress = () => {
    return (
        <div
            className="not-italic"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
        >
            <meta itemProp="addressCountry" content="RU" />
            <span itemProp="addressLocality">г.&nbsp;Салехард</span>
            {", "}
            <span itemProp="streetAddress">
                ул.&nbsp;Свердлова, д.&nbsp;34А
            </span>
        </div>
    );
};
