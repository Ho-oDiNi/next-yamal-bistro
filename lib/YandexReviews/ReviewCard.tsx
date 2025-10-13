import Image from "next/image";

import type { Review } from "./ReviewsList";
import StarRating from "./StarRating";

export default function ReviewCard({ review }: { review: Review }) {
    return (
        <article className="border-b pb-6">
            <header className="mb-2 flex items-center">
                {review.photoUrl ? (
                    <Image
                        src={review.photoUrl}
                        height={40}
                        width={40}
                        alt={review.author}
                        className="mr-3 h-10 w-10 rounded-full object-cover"
                    />
                ) : (
                    <div
                        className="mr-3 h-10 w-10 rounded-full bg-neutral-200"
                        aria-hidden
                    />
                )}
                <div>
                    <p className="font-medium">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                </div>
            </header>

            <div className="mb-2 flex">
                <StarRating value={review.rating} size="sm" />
            </div>

            <p className="whitespace-pre-line text-gray-800">{review.text}</p>
        </article>
    );
}
