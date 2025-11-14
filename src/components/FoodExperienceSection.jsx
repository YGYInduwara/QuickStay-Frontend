import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";

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
    <section className="relative flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20 overflow-hidden">
      {/* --- Animated background blobs --- */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/40 via-sky-500/30 to-emerald-300/30 blur-3xl opacity-70 animate-blob" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-rose-400/40 via-orange-400/30 to-amber-300/30 blur-3xl opacity-70 animate-blob-slow" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gradient-to-tr from-white/0 via-white/40 to-white/0 blur-3xl opacity-40" />

      {/* Content wrapper (above blobs) */}
      <div className="relative z-10 w-full max-w-6xl">
        <Title
          title="🐚 RESTAURANT"
          subTitle={
            <>
              Fresh. Local. Delicious. <br />
              Welcome to WhyNot Seafood Restaurant, where every meal comes with a sea breeze. <br />
              Our menu celebrates the ocean’s bounty with daily catches and island-inspired dishes prepared fresh by our chefs.
            </>
          }
        />

        {/* Optional small pills under title to add life */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs md:text-sm">
          <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-white/60 text-gray-700">
            🐟 Daily fresh catch
          </span>
          <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-white/60 text-gray-700">
            🌶️ Sri Lankan flavours
          </span>
          <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-white/60 text-gray-700">
            🌊 Beachfront dining
          </span>
        </div>

        {/* content container */}
        <div className="mt-14 space-y-12">
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

            <div className="relative h-[220px] md:h-[280px] lg:h-[320px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
              {imagesTop.map((src, i) => (
                <img
                  key={src + i}
                  src={src}
                  alt="Restaurant dish"
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
            <div className="relative h-[260px] md:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
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
      </div>
    </section>
  );
}
