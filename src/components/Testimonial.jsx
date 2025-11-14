import React, { useEffect, useMemo, useState } from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const AUTOPLAY_INTERVAL_MS = 5000; // 5 seconds

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Group testimonials into slides of 4 cards each
  const slides = useMemo(() => {
  const chunkSize = 6; // 4 reviews at a time (or 6 if you prefer)
  const result = [];

  for (let i = 0; i < testimonials.length; i += chunkSize) {
    result.push(testimonials.slice(i, i + chunkSize));
  }

  return result;
}, [testimonials.length]);


  // Auto-advance the slide
  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(id);
  }, [slides.length]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-24">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why travelers keep coming back to Why Not – for the food, the vibe, and the beachfront sunsets."
      />

      <div className="relative w-full mt-12 overflow-hidden">
        {/* Slider track */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              // IMPORTANT: grid, not flex-row
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 shrink-0"
            >
              {slide.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-xl shadow h-full"
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <p className="font-playfair text-xl">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mt-4">
                    <StarRating value={testimonial.rating} />
                  </div>

                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    “{testimonial.review}”
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Dots */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  idx === activeIndex
                    ? "bg-black"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Prev / Next buttons */}
        {slides.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 items-center justify-center shadow"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 items-center justify-center shadow"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
