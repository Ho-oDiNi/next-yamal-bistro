"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface SlideItem {
    id: number;
    image: string;
    width: number;
    height: number;
    alt?: string;
}

interface SliderProps {
    slides: SlideItem[];
}

export const Slider = ({ slides }: SliderProps) => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            initialSlide={2}
            loop
            centeredSlides={true}
            slidesPerView={1.5}
            spaceBetween={5}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <Image
                        src={slide.image}
                        width={slide.width}
                        height={slide.height}
                        alt={slide.alt || ""}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
