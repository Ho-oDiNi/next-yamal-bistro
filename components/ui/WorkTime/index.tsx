interface WorkTimeProps {
    weekDay: string;
    timeOpen: string;
    timeClose: string;
    className?: string;
}

const WorkTime = ({
    weekDay,
    timeOpen,
    timeClose,
    className = "",
}: WorkTimeProps) => {
    const toIsoTime = (t: string) => {
        const [h = "00", m = "00"] = t.split(":");
        const hh = h.padStart(2, "0");
        const mm = m.padStart(2, "0");
        return `${hh}:${mm}:00`;
    };

    return (
        <p
            className={`my-[7px] mr-[75px] flex justify-between ${className}`}
            aria-label={`${weekDay}: ${timeOpen} — ${timeClose}`}
        >
            <span className="tabular-nums">{weekDay}:</span>
            <span className="tabular-nums">
                <time dateTime={toIsoTime(timeOpen)}>{timeOpen}</time>
                {" — "}
                <time dateTime={toIsoTime(timeClose)}>{timeClose}</time>
            </span>
        </p>
    );
};

export default WorkTime;
