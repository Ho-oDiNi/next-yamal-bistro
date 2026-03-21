"use client";

import { useRef, useState } from "react";

import { cn } from "@/shared/lib/cn";
import { StyledButton } from "@/shared/ui/StyledButton";

import { Review } from "../model";
import { ReviewsList } from "./ReviewsList";

export const ReviewsScroller = ({ reviews }: { reviews: Review[] }) => {
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleShowMore = () => {
        setScrollEnabled(true);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                scrollRef.current?.scrollTo({
                    top: 300,
                    behavior: "smooth",
                });
            });
        });
    };

    return (
        <div className="relative xl:max-w-1/2">
            {scrollEnabled && (
                <div className="pointer-events-none absolute top-0 left-0 z-10 h-10 w-full bg-linear-to-b from-white via-white/80 to-transparent" />
            )}

            <div
                ref={scrollRef}
                className={cn(
                    "no-scrollbar h-120 w-full",
                    scrollEnabled
                        ? "overflow-y-auto scroll-smooth"
                        : "overflow-hidden",
                )}
            >
                <ReviewsList reviews={reviews} />
            </div>

            <div
                className={cn(
                    "pointer-events-none absolute bottom-0 left-0 z-10 w-full bg-linear-to-t from-white via-white/90 to-transparent transition-all duration-300",
                    scrollEnabled ? "h-10" : "h-48",
                )}
            />

            {!scrollEnabled && (
                <StyledButton
                    onClick={handleShowMore}
                    className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 backdrop-blur transition"
                    variant="gray"
                >
                    Показать больше
                </StyledButton>
            )}
        </div>
    );
};
