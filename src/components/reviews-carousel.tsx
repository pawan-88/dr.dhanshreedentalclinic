"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { googleReviewsUrl } from "@/lib/site-data";
import type { GoogleReview } from "@/lib/testimonials";

const AUTO_ADVANCE_MS = 6000;

export default function ReviewsCarousel({
  reviews,
}: {
  reviews: ReadonlyArray<GoogleReview>;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length < 2) return;

    const id = setInterval(
      () => setIndex((current) => (current + 1) % reviews.length),
      AUTO_ADVANCE_MS,
    );

    return () => clearInterval(id);
  }, [paused, reviews.length]);

  if (reviews.length === 0) return null;

  const goTo = (next: number) =>
    setIndex(((next % reviews.length) + reviews.length) % reviews.length);

  return (
    <div
      className="reviews-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((review) => (
            <article
              className="carousel-slide"
              key={review.name}
              aria-hidden={reviews[index].name !== review.name}
            >
              <div className="carousel-card">
                <div className="review-card-top">
                  <div className="review-avatar">{review.name.charAt(0)}</div>
                  <div>
                    <strong>{review.name}</strong>
                    <span>
                      {review.context} · {review.timeAgo}
                    </span>
                  </div>
                  <a
                    className="google-badge"
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Read this review on Google"
                  >
                    Google
                  </a>
                </div>
                <div className="stars" aria-label="Five star rating">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>{review.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => goTo(index - 1)}
        >
          <ChevronLeft size={18} />
        </button>
        <div className="carousel-dots" role="tablist" aria-label="Reviews">
          {reviews.map((review, dotIndex) => (
            <button
              type="button"
              key={review.name}
              className={dotIndex === index ? "active" : ""}
              aria-label={`Show review ${dotIndex + 1} of ${reviews.length}`}
              onClick={() => goTo(dotIndex)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => goTo(index + 1)}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
