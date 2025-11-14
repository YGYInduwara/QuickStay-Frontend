import React, { useEffect, useRef, useState } from "react";

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

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-6xl">

        {/* ====================== CUSTOM RESTAURANT TITLE ====================== */}
        <div className="w-full text-left mb-8">
          <h2 className="font-playfair text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The{" "}
            <span className="text-sky-600">
              Restaurant Experience
            </span>{" "}
            at WhyNot
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Fresh. Local. Delicious. Welcome to WhyNot Seafood Restaurant, where every 
            meal comes with a sea breeze. Our menu celebrates the ocean’s bounty with 
            daily catches and island-inspired dishes prepared fresh by our chefs.
          </p>
        </div>
        {/* ===================================================================== */}

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mt-4 text-xs md:text-sm">
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

        {/* Content Container */}
        <div className="mt-14 space-y-12">

          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-gray-600 leading-7">
              <p>
                Get ready to eat like a local! From creamy curries and spicy sambols 
                to fresh tropical fruits, there’s always something new to try. 
                Whether you're fueling up after a surf session or just here for the 
                food, you're in for a delicious ride.
              </p>
            </div>

            {/* Top Image */}
            <div className="relative group">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br 
                  from-cyan-200/50 via-sky-200/40 to-emerald-200/50 blur-2xl opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-[200px] md:h-[260px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 
                  transform group-hover:scale-[1.02] transition-transform duration-500">
                {imagesTop.map((src, i) => (
                  <img
                    key={src + i}
                    src={src}
                    alt="Restaurant dish"
                    className={`absolute inset-0 w-full h-full object-cover 
                      transition-opacity duration-700 ${
                        i === topIdx ? "opacity-100" : "opacity-0"
                      }`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Bottom Image */}
            <div className="relative group">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr 
                  from-amber-200/50 via-rose-200/40 to-orange-200/50 blur-2xl opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-[230px] md:h-[300px] lg:h-[360px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 
                  transform group-hover:scale-[1.02] transition-transform duration-500">
                {imagesBottom.map((src, i) => (
                  <img
                    key={src + i}
                    src={src}
                    alt="Dining vibes"
                    className={`absolute inset-0 w-full h-full object-cover 
                      transition-opacity duration-700 ${
                        i === bottomIdx ? "opacity-100" : "opacity-0"
                      }`}
                    loading="lazy"
                  />
                ))}
              </div>
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
