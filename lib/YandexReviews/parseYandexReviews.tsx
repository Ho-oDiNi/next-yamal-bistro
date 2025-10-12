"use server";
import { parse } from "node-html-parser";

interface Review {
    author: string;
    date: string;
    rating: number;
    text: string;
    photoUrl?: string;
}

interface ReviewData {
    averageRating: string;
    totalReviews: string;
    reviews: Review[];
}

const parseYandexReviews = async (): Promise<ReviewData> => {
    try {
        // In a real scenario, you would fetch this from the URL
        // For this example, we'll use the provided file content
        const apiUrl =
            "https://yandex.ru/maps-reviews-widget/95926227579?comments";
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(
                `API request failed with status ${response.status}`,
            );
        }

        const root = parse(await response.text());

        // Extract establishment information
        const averageRating =
            root.querySelector(".mini-badge__stars-count")?.text.trim() || "";
        const totalReviews =
            root.querySelector(".mini-badge__rating")?.text.trim() || "";

        // Extract all reviews
        const reviews: Review[] = [];
        const reviewElements = root.querySelectorAll(".comment");

        reviewElements.forEach((reviewElement) => {
            const author =
                reviewElement.querySelector(".comment__name")?.text.trim() ||
                "";
            const date =
                reviewElement.querySelector(".comment__date")?.text.trim() ||
                "";
            const text =
                reviewElement.querySelector(".comment__text")?.text.trim() ||
                "";
            const photoUrl =
                reviewElement
                    .querySelector(".comment__photo")
                    ?.getAttribute("src") || "";

            // Count the number of stars to determine rating (assuming all are filled based on the HTML)
            const stars = reviewElement.querySelectorAll(
                ".stars-list__star:not(._empty):not(._half)",
            ).length;

            reviews.push({
                author,
                date,
                rating: stars,
                text: text.replace(/\.\.\..*ещё$/, "").trim(), // Remove "read more" text if present
                photoUrl,
            });
        });

        return {
            averageRating,
            totalReviews,
            reviews,
        };
    } catch (error: unknown) {
        console.error("Parsing Error:", error);
        throw new Error("Failed to parse reviews");
    }
};

export default parseYandexReviews;
