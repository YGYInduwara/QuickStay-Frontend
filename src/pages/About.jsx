import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const OWNER_WHATSAPP = "+94777636173";

export default function About() {
  const whatsapp = `https://wa.me/${OWNER_WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello! I'd like to know more about Why Not Beachfront Resort."
  )}`;

  return (
    <main className="relative w-full bg-slate-50 overflow-hidden">
      {/* soft background gradient / blobs */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-300/40 via-sky-400/30 to-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-200/40 via-rose-200/30 to-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[28rem] rounded-[40%] bg-white/40 blur-3xl" />

      {/* central content container */}
      <div className="relative z-10 flex flex-col items-center px-6 md:px-16 lg:px-24">
        {/* ---------------- HERO ---------------- */}
        <section className="w-full max-w-6xl pt-24 pb-16 md:pt-32 md:pb-20 text-center">
          <Title
            title="ABOUT US"
            subTitle="At WhyNot, we believe in simple pleasures — sunshine, sea breeze, and good company."
          />
        </section>

        {/* ---------------- STORY ---------------- */}
        <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-10 items-center pb-16">
          <div className="text-gray-600 leading-7 bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8 shadow-[0_22px_70px_rgba(15,23,42,0.12)]">
            <h3 className="font-playfair text-2xl md:text-3xl mb-3 text-gray-900">
              Our Story
            </h3>
            <p className="mb-4">
              We’re a locally run guest house and seafood restaurant built around
              warmth, comfort, and connection. Whether you’re a surfer chasing
              waves, a couple seeking a romantic getaway, or travellers exploring
              Sri Lanka’s south coast, WhyNot is your place to rest, relax, and
              reconnect with the ocean.
            </p>
            <p>
              Whether you're here to surf, slow down, or spend time with the
              people who matter, our team is here to make it effortless.
            </p>
          </div>

          <img
            src={assets.regImage || "/src/assets/heroImage.png"}
            alt="Why Not beachfront"
            className="w-full h-[260px] md:h-[360px] object-cover rounded-3xl shadow-[0_22px_70px_rgba(15,23,42,0.18)]"
          />
        </section>

        {/* thin divider */}
        <div className="w-full max-w-6xl border-t border-slate-200/70 mb-12" />

        {/* ---------------- HIGHLIGHTS ---------------- */}
        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
          {[
            {
              icon: assets.freeBreakfastIcon,
              title: "Tasty & Local",
              text: "Daily spreads with Sri Lankan flavors and international comfort food.",
            },
            {
              icon: assets.poolIcon,
              title: "Steps to the Sea",
              text: "Wake up to the sound of waves—beach is literally at your door.",
            },
            {
              icon: assets.badgeIcon,
              title: "Guest-Loved",
              text: "Clean rooms, smooth check-in, and a team that actually cares.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/85 backdrop-blur rounded-2xl p-6 shadow-[0_18px_55px_rgba(15,23,42,0.12)] flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <img src={card.icon} alt="" className="h-6" />
                <h4 className="font-medium text-gray-900">{card.title}</h4>
              </div>
              <p className="text-gray-600 text-sm md:text-[15px]">
                {card.text}
              </p>
            </div>
          ))}
        </section>

        {/* ------------- WHERE WE ARE + GLASS CONTACT CARDS ------------- */}
        <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.15fr,1fr] gap-10 items-start pb-24">
          {/* LEFT COLUMN: Where we are + contact glass cards */}
          <div className="space-y-6">
            {/* Where We Are card */}
            <div className="bg-white/90 backdrop-blur rounded-2xl p-6 md:p-7 shadow-[0_22px_70px_rgba(15,23,42,0.12)]">
              <h3 className="font-playfair text-2xl md:text-3xl mb-3 text-gray-900">
                Where We Are
              </h3>
              <p className="text-gray-600 text-sm md:text-[15px]">
                101A Galle Road, Narigama, Hikkaduwa, Sri Lanka, Sri Lanka. Easy
                tuk rides, cafés and surf schools all around, and our own Why Not
                restaurant next door.
              </p>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
              >
                Chat on WhatsApp
                <img src={assets.arrowIcon} className="invert h-4" alt="" />
              </a>
            </div>

            {/* Glassmorphism contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl bg-white/18 border border-white/50 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.18)] p-5">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-500/90 to-blue-600/90 flex items-center justify-center text-white text-xl">
                  ✉️
                </div>
                <div>
                  <p className="text-gray-500 text-xs md:text-sm">Email Us</p>
                  <p className="font-medium text-gray-900 text-sm md:text-[15px]">
                    info@whynothikka.com
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-4 rounded-2xl bg-white/18 border border-white/50 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.18)] p-5">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500/90 to-pink-500/90 flex items-center justify-center text-white text-xl">
                  🌐
                </div>
                <div>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Visit Website
                  </p>
                  <p className="font-medium text-gray-900 text-sm md:text-[15px]">
                    www.whynothikka.com
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 rounded-2xl bg-white/18 border border-white/50 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.18)] p-5">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400/95 to-green-500/95 flex items-center justify-center text-white text-xl">
                  💬
                </div>
                <div>
                  <p className="text-gray-500 text-xs md:text-sm">WhatsApp</p>
                  <p className="font-medium text-gray-900 text-sm md:text-[15px]">
                    +94 777 636 173
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl bg-white/18 border border-white/50 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.18)] p-5">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-400/95 to-red-500/95 flex items-center justify-center text-white text-xl">
                  📍
                </div>
                <div>
                  <p className="text-gray-500 text-xs md:text-sm">Location</p>
                  <p className="font-medium text-gray-900 text-sm md:text-[15px]">
                    101A Galle Road, Narigama, Hikkaduwa, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: map */}
          <div className="rounded-3xl overflow-hidden bg-white/80 backdrop-blur shadow-[0_22px_70px_rgba(15,23,42,0.12)]">
            <iframe
              title="map"
              className="w-full h-[260px] md:h-[340px] border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=6.1409,80.1019&z=15&output=embed"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
