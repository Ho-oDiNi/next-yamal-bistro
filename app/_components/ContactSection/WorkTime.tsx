interface WorkTimeProps {
    weekDay: string;
    timeOpen: string;
    timeClose: string;
}

export const WorkTime = (props: WorkTimeProps) => {
    return (
        <p className="my-[7px] mr-[75px] flex justify-between">
            <span>{props.weekDay}: </span>
            <span>
                <time>{props.timeOpen}</time> — <time>{props.timeClose}</time>
            </span>
        </p>
    );
};
