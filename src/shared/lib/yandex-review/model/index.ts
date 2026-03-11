import { StaticImageData } from "next/image";

export interface Review {
    author: string;
    date: string;
    rating: number;
    text: string;
    photoUrl?: string | StaticImageData;
}

export interface ReviewData {
    averageRating: string;
    totalReviews: string;
    reviews: Review[];
}
