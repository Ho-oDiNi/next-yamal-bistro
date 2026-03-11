"use client";

import Link from "next/link";

type ObjectPDFProps = {
    href: string;
};

export const ObjectPDF = ({ href }: ObjectPDFProps) => {
    return (
        <object
            type="application/pdf"
            data={href}
            width="700"
            height="600"
            className="w-full rounded-lg p-10"
        >
            <Link href={href} download className="text-sm hover:opacity-70">
                Скачать файл
            </Link>
        </object>
    );
};
