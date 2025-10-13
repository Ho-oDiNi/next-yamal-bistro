import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function FooterColumns({ children }: Props) {
    return (
        <>
            <div className="flex justify-between">{children}</div>
            <hr className="my-[25px] rounded-[26px] border-1 border-[#EBEBEB]" />
        </>
    );
}
