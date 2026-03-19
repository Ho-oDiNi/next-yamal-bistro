"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { StyledButton } from "../../StyledButton";
import { COOKIE_CONSENT_TIME } from "../config";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const savedConsent = localStorage.getItem("cookie-consent");

        // if (savedConsent) {
        //     return;
        // }

        const timer = window.setTimeout(() => {
            setIsVisible(true);
        }, COOKIE_CONSENT_TIME);

        return () => {
            window.clearTimeout(timer);
        };
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed right-4 bottom-4 z-99 m-2 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="font-roboto text-brand-dark flex flex-col gap-4 text-sm leading-6">
                <p>
                    Мы используем cookies, чтобы сделать использование сайта
                    удобнее. Подробнее — в{" "}
                    <Link
                        href="/privacy"
                        className="transition hover:opacity-70"
                    >
                        политике конфиденциальности
                    </Link>
                    .
                </p>

                <StyledButton
                    onClick={handleAccept}
                    variant="primary"
                    size="max"
                >
                    Хорошо
                </StyledButton>
            </div>
        </div>
    );
};
