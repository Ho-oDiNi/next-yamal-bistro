import Image from "next/image";

export default function ReviewsChefImage() {
    return (
        <Image
            className="absolute right-24 bottom-0"
            src="/images/chef.png"
            width={380}
            height={607}
            priority={false}
            quality={85}
            alt=""
            aria-hidden="true"
        />
    );
}
