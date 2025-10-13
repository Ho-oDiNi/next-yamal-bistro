type YandexMapEmbedProps = { embedSrc: string; title: string };

export default function YandexMapEmbed({
    embedSrc,
    title,
}: YandexMapEmbedProps) {
    return (
        <iframe
            sandbox="allow-orientation-lock allow-scripts allow-same-origin allow-popups"
            src={embedSrc}
            className="ml-[35px] h-[320px] w-[385px] flex-1 rounded-[26px] shadow-md"
            title={title}
            loading="lazy"
        />
    );
}
