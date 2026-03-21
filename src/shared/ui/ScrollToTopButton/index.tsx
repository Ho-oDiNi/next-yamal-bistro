"use client";

import { useEffect, useState } from "react";

import { RoundedButton } from "@/shared/ui/StyledButton";

import arrowTopIcon from "@icons/arrow-top.svg";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <RoundedButton
            icon={arrowTopIcon}
            callback={scrollToTop}
            className="bg-brand-dark fixed bottom-4 left-2 z-99 p-2 shadow-2xl md:left-4"
            alt="Скролл наверх"
        />
    );
};
