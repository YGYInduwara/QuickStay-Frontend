import React, { useState } from "react";
import Title from "../components/Title";
import {
  experienceImages, // we'll export this array from assets.js
} from "../assets/assets";

export default function Experience() {
  const [active, setActive] = useState(null);

  return (
    <main className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50">
      <section className="w-full max-w-6xl py-24">
        <Title
          title="📸 GALLERY"
          subTitle="Include a mix of real photos — your rooms, restaurant, food, sea view, and sunsets. Use bright tropical colours — turquoise, coral, and gold — to match your beachfront vibe."
        />
      </section>

      {/* Gallery Grid */}
      <section className="w-full max-w-6xl pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {experienceImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className="group relative rounded-xl overflow-hidden shadow-[0_0_16px_rgba(0,0,0,0.08)] focus:outline-none"
            >
              <img
                src={src}
                alt={`Experience ${i + 1}`}
                className="w-full h-40 md:h-48 lg:h-52 object-cover group-hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <img
            src={active}
            alt="Preview"
            className="max-h-[85vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}
