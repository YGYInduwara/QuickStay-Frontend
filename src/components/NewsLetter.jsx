import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const NewsLetter = () => {
  return (
    <section className="relative">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-center bg-cover md:bg-fixed"
        style={{ backgroundImage: `url(${assets.regImage || "/src/assets/heroImage.png"})` }}
        aria-hidden="true"
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 text-white">
        <Title
          title="Stay Inspired"
          subTitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full max-w-xl">
          <input
            type="email"
            className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none w-full"
            placeholder="Enter your email"
          />
          <button
            className="flex items-center justify-center gap-2 group bg-black/80 hover:bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all"
            onClick={() =>
              window.open(
                "https://web.facebook.com/profile.php?id=61580964269684&sk=photos",
                "_blank"
              )
            }
          >
            Subscribe
            <img
              src={assets.arrowIcon}
              alt="arrow-icon"
              className="w-3.5 invert group-hover:translate-x-1 transition-all"
            />
          </button>
        </div>

        <p className="text-white/70 mt-6 text-xs text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
