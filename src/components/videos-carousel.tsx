"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import type { VideoTestimonial } from "@/lib/testimonials";

/**
 * Manual video slider — one video per slide with arrows and dots.
 * No auto-advance (unlike the reviews carousel): sliding away mid-playback
 * would be hostile. Any playing video is paused when the user changes slide.
 */
export default function VideosCarousel({
  videos,
}: {
  videos: ReadonlyArray<VideoTestimonial>;
}) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  if (videos.length === 0) return null;

  const goTo = (next: number) => {
    const target = ((next % videos.length) + videos.length) % videos.length;
    containerRef.current
      ?.querySelectorAll("video")
      .forEach((video) => video.pause());
    setIndex(target);
  };

  return (
    <div className="videos-carousel" ref={containerRef}>
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {videos.map((video, videoIndex) => (
            <div
              className="carousel-slide"
              key={video.src}
              aria-hidden={videoIndex !== index}
            >
              <figure className="video-card">
                <video
                  controls
                  preload={video.poster ? "none" : "metadata"}
                  poster={video.poster}
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <figcaption>
                  <strong>{video.name}</strong>
                  <span>{video.treatment}</span>
                  <p>{video.caption}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {videos.length > 1 ? (
        <div className="carousel-controls">
          <button
            type="button"
            aria-label="Previous video"
            onClick={() => goTo(index - 1)}
          >
            <ChevronLeft size={18} />
          </button>
          <div className="carousel-dots" role="tablist" aria-label="Videos">
            {videos.map((video, dotIndex) => (
              <button
                type="button"
                key={video.src}
                className={dotIndex === index ? "active" : ""}
                aria-label={`Show video ${dotIndex + 1} of ${videos.length}`}
                onClick={() => goTo(dotIndex)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next video"
            onClick={() => goTo(index + 1)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
