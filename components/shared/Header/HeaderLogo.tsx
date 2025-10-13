import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
    return (
        <Link href="#" aria-label="Перейти на главную">
            <Image
                className="pb-2"
                src="/icons/logo.svg"
                height={40}
                width={117}
                alt="Ямал Бистро — логотип"
                priority
            />
        </Link>
    );
}
