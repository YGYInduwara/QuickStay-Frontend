import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const OWNER_WHATSAPP = "+94777636173"; // Owner's WhatsApp number

export default function About() {
  const whatsapp = `https://wa.me/${OWNER_WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello! I'd like to know more about Why Not Beachfront Resort."
  )}`;

  return (
    <main className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50">
      {/* Hero */}
      <section className="w-full max-w-6xl py-32">
        <Title
          title="🌴 ABOUT US"
          subTitle="At WhyNot, we believe in simple pleasures — sunshine, sea breeze, and good company.
"
        />
      </section>

      {/* Story */}
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-10">
        <div className="text-gray-600 leading-7">
          <h3 className="font-playfair text-2xl md:text-3xl mb-3">Our Story</h3>
          <p className="mb-4">
            We’re a locally run guest house and seafood restaurant built around warmth, comfort, and connection.
Whether you’re a surfer chasing waves, a couple seeking a romantic getaway, or travellers exploring Sri Lanka’s south coast, WhyNot is your place to rest, relax, and reconnect with the ocean.
“Perfect location right on the beach. The restaurant is such a nice place to chill, and the staff are so friendly.” — Guest review on Booking.com
          </p>
          <p>
            Whether you&apos;re here to surf, slow down, or spend time with the
            people who matter, our team is here to make it effortless.
          </p>
        </div>
        <img
          src={assets.regImage || "/src/assets/heroImage.png"}
          alt="Why Not beachfront"
          className="w-full h-[280px] md:h-[360px] object-cover rounded-2xl shadow-lg"
        />
      </section>

      {/* Highlights */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
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
            className="bg-white rounded-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-3">
              <img src={card.icon} alt="" className="h-6" />
              <h4 className="font-medium">{card.title}</h4>
            </div>
            <p className="text-gray-600 mt-2">{card.text}</p>
          </div>
        ))}
      </section>

      {/* Location / CTA */}
      <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-20">
        <div className="bg-white rounded-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.08)]">
          <h3 className="font-playfair text-2xl md:text-3xl mb-3">Where We Are</h3>
          <p className="text-gray-600">
            44G4+9J6, Wewala, Hikkaduwa, Sri Lanka. Easy tuk rides, cafés and
            surf schools all around, and our own Why Not restaurant next door.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-md bg-black text-white"
          >
            Chat on WhatsApp
            <img src={assets.arrowIcon} className="invert h-4" alt="" />
          </a>
        </div>

        <iframe
          title="map"
          className="w-full h-[260px] md:h-[320px] rounded-2xl border-0 shadow-lg"
          loading="lazy"
          src="https://www.google.com/maps?q=6.1409,80.1019&z=15&output=embed"
        />
      </section>
    </main>
  );
}
