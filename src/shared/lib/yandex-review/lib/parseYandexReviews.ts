"use server";

import { type HTMLElement, parse } from "node-html-parser";

import { DEFAULT_REVIEW_DATA } from "../config";
import { Review, ReviewData } from "../model";

const selectText = (root: HTMLElement, selector: string): string => {
    const el = root.querySelector(selector) as HTMLElement | null;
    return el?.text.trim() ?? "";
};

const selectAttr = (
    root: HTMLElement,
    selector: string,
    attr: string,
): string => {
    const el = root.querySelector(selector) as HTMLElement | null;
    const val = el?.getAttribute(attr);
    return val ?? "";
};

const STAR_SELECTOR = ".stars-list__star:not(._empty):not(._half)";
const COMMENT_SELECTOR = ".comment";

const cleanReviewText = (text: string): string =>
    text.replace(/\.\.\..*ещё$/i, "").trim();

export const parseYandexReviews = async (): Promise<ReviewData> => {
    const apiUrl = "https://yandex.ru/maps-reviews-widget/95926227579?comments";

    try {
        const response = await fetch(apiUrl, {
            cache: "force-cache",
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            return DEFAULT_REVIEW_DATA;
        }

        const html = await response.text();
        const root = parse(html) as HTMLElement;

        const averageRating =
            selectText(root, ".mini-badge__stars-count") ||
            selectText(root, ".business-rating-badge-view__rating-text") ||
            DEFAULT_REVIEW_DATA.averageRating;

        const totalReviews =
            selectText(root, ".mini-badge__rating") ||
            selectText(root, ".business-rating-badge-view__review-count") ||
            DEFAULT_REVIEW_DATA.totalReviews;

        const reviewElements = root.querySelectorAll(
            COMMENT_SELECTOR,
        ) as HTMLElement[];

        const reviews: Review[] = reviewElements.map((el) => {
            const author =
                selectText(el, ".comment__name") ||
                selectText(el, ".comment__author") ||
                "Аноним";

            const date =
                selectText(el, ".comment__date") ||
                selectText(el, ".comment__time") ||
                "";

            const text =
                selectText(el, ".comment__text") ||
                selectText(el, ".comment__description") ||
                "";

            const photoUrl =
                selectAttr(el, ".comment__photo", "src") ||
                selectAttr(el, ".comment__avatar img", "src") ||
                "";

            const rating = (el.querySelectorAll(STAR_SELECTOR) as HTMLElement[])
                .length;

            return {
                author,
                date,
                rating,
                text: cleanReviewText(text),
                photoUrl: photoUrl || undefined,
            };
        });

        return {
            averageRating,
            totalReviews,
            reviews,
        };
    } catch {
        return DEFAULT_REVIEW_DATA;
    }
};
