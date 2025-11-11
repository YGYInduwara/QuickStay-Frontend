import React, { useEffect, useRef, useState } from "react";
import Title from "./Title"; // ⬅ uses the same Title component as other sections

/**
 * props:
 *  - imagesTop: string[]
 *  - imagesBottom: string[]
 *  - intervalMs: number (default 2000ms)
 */
export default function FoodExperienceSection({
  imagesTop = [],
  imagesBottom = [],
  intervalMs = 2000,
}) {
  const [topIdx, setTopIdx] = useState(0);
  const [bottomIdx, setBottomIdx] = useState(0);
  const tRef = useRef(null);
  const bRef = useRef(null);

  useEffect(() => {
    if (imagesTop.length > 1) {
      tRef.current = setInterval(
        () => setTopIdx((i) => (i + 1) % imagesTop.length),
        intervalMs
      );
    }
    if (imagesBottom.length > 1) {
      bRef.current = setInterval(
        () => setBottomIdx((i) => (i + 1) % imagesBottom.length),
        intervalMs
      );
    }
    return () => {
      clearInterval(tRef.current);
      clearInterval(bRef.current);
    };
  }, [imagesTop.length, imagesBottom.length, intervalMs]);

  return (
    // ⬇︎ same wrapper look/feel as FeaturedDestination: bg, px, py, centered
    <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      {/* Title matches old section style */}
      <Title
        title="The Food Experience at the Beach"
        subTitle="Eat like a local. Our daily spreads rotate through authentic Sri Lankan flavors and international comforts perfect after a surf session or just to chill by the beach."
      />

      {/* content container width aligned with other sections */}
      <div className="w-full max-w-6xl mt-14 space-y-12">
        {/* Row 1: text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-gray-600 leading-7">
            <p>
              Get ready to eat like a local! From creamy curries and spicy sambols
              to fresh tropical fruits, there’s always something new to try.
              Whether you’re fueling up after a surf session or just here for the
              food, you’re in for a delicious ride.
            </p>
          </div>

          <div className="relative h-[220px] md:h-[280px] lg:h-[320px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            {imagesTop.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt="Food experience"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === topIdx ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Row 2: image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[260px] md:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            {imagesBottom.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt="Dining vibes"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === bottomIdx ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
              />
            ))}
          </div>

          <div className="text-gray-600 leading-7">
            <p>
              Craving something beyond rice and curry? Why Not restaurant serves
              international favorites, fresh seafood, and comfort food. Our café is
              your spot for smoothie bowls, proper coffee, and tropical drinks that
              taste like vacation in a cup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
