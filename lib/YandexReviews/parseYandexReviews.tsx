"use server";
import { parse, type HTMLElement } from "node-html-parser";

export interface Review {
    author: string;
    date: string;
    rating: number;
    text: string;
    photoUrl?: string;
}

export interface ReviewData {
    averageRating: string;
    totalReviews: string;
    reviews: Review[];
}

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

const parseYandexReviews = async (): Promise<ReviewData> => {
    const apiUrl = "https://yandex.ru/maps-reviews-widget/95926227579?comments";
    const response = await fetch(apiUrl, { cache: "no-store" });
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    const html = await response.text();
    const root = parse(html) as HTMLElement;

    const averageRating =
        selectText(root, ".mini-badge__stars-count") ||
        selectText(root, ".business-rating-badge-view__rating-text") ||
        "";

    const totalReviews =
        selectText(root, ".mini-badge__rating") ||
        selectText(root, ".business-rating-badge-view__review-count") ||
        "";

    const reviewElements = root.querySelectorAll(
        COMMENT_SELECTOR,
    ) as HTMLElement[];

    const reviews: Review[] = reviewElements.map((el) => {
        const author =
            selectText(el, ".comment__name") ||
            selectText(el, ".comment__author") ||
            "";

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

    return { averageRating, totalReviews, reviews };
};

export default parseYandexReviews;
