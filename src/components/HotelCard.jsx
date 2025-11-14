import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

// Preload cover images using Vite's import.meta.glob
const coverEntries = Object.entries(
  import.meta.glob("../assets/rooms/*/1.{png,jpg,jpeg,webp,avif}", {
    eager: true,
  })
);

const coverMap = coverEntries.reduce((acc, [path, mod]) => {
  const m = path.match(/\/rooms\/([^/]+)\/1\./); // match slug folder name
  if (m && m[1]) acc[m[1]] = mod.default;
  return acc;
}, {});

const HotelCard = ({ room, index }) => {
  const slug = (room.slug || room.name || room.roomType || "")
    .toLowerCase()
    .split(" ")[0];

  const coverSrc = coverMap[slug] || room.images?.[0] || assets.regImage;

  return (
    <Link
      to={"/rooms/" + room._id}
      onClick={() => window.scrollTo(0, 0)}
      className="group relative max-w-70 w-full rounded-2xl overflow-hidden bg-white/80 backdrop-blur border border-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.20)] cursor-pointer"
    >
      {/* Glow halo */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-200/40 via-blue-200/30 to-emerald-200/40 blur-xl" />
      </div>

      {/* Room cover image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={coverSrc}
          alt={`${room.name} cover`}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Top fade overlay */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

        {/* Best Seller tag */}
        {index % 2 === 0 && (
          <span className="absolute top-3 left-3 px-3 py-1 text-xs bg-white/90 text-gray-900 rounded-full shadow">
            Best Seller
          </span>
        )}

        {/* Rating pill */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/60 text-white px-2 py-1 text-xs backdrop-blur">
          <img src={assets.starIconFilled} alt="⭐" className="h-3.5 w-3.5" />
          <span className="font-semibold">4.5</span>
        </div>
      </div>

      {/* Bottom content */}
      <div className="p-4 pt-5">
        <div className="flex items-start justify-between">
          <h3 className="font-playfair text-xl font-semibold text-gray-900">
            {room.name}
          </h3>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          <img src={assets.locationIcon} alt="location" className="h-4 w-4" />
          <span className="truncate">{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-2xl font-semibold text-gray-900">
              ${room.pricePerNight}
            </span>
            <span className="text-sm text-gray-500"> /night</span>
          </p>

          <button className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 bg-white hover:bg-gray-900 hover:text-white transition-all">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
