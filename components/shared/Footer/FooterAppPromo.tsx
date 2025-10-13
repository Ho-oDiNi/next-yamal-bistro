import Image from "next/image";

import StoreBadge from "./StoreBadge";

export default function FooterAppPromo() {
    return (
        <div className="flex max-w-[30%] flex-col">
            <p className="px-2">
                Скачайте наше мобильное приложение и получите скидку на первый
                заказ
            </p>

            <div className="my-auto flex">
                <Image
                    src="/images/mobile_qr_code.png"
                    height={150}
                    width={150}
                    alt="QR-код для скачивания приложения"
                />

                <ul className="mx-auto flex flex-col justify-between py-2">
                    <li>
                        <StoreBadge
                            href=""
                            imgSrc="/icons/mobile_app_store.svg"
                            imgAlt="Загрузить в App Store"
                        />
                    </li>
                    <li>
                        <StoreBadge
                            href=""
                            imgSrc="/icons/mobile_google_play.svg"
                            imgAlt="Доступно в Google Play"
                        />
                    </li>
                    <li>
                        <StoreBadge
                            href=""
                            imgSrc="/icons/mobile_app_gallery.svg"
                            imgAlt="Скачать в AppGallery"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}
