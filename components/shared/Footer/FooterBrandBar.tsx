import Image from "next/image";

export default function FooterBrandBar() {
    return (
        <div className="flex items-center justify-between">
            <Image
                src="/icons/logo_full.svg"
                width={117}
                height={68}
                alt="Логотип «Ямал Бистро»"
            />
            <span className="h-[30px]">© 2025 ООО &quot;ХХХХ ХХХХХ&quot;</span>
        </div>
    );
}
