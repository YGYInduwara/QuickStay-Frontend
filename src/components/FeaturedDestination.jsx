import React from "react";
import { roomsDummyData, assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import sandCover from "../assets/rooms/sand/1.jpeg";
import coralCover from "../assets/rooms/coral/1.jpeg";
import pearlCover from "../assets/rooms/pearl/1.jpeg";

 const coverMap = {
        "Sand Room": sandCover,
        "Coral Room": coralCover,
        "Pearl Room": pearlCover,
      };

const featureMap = {
  "Sand Room": [
    "Air Conditioning",
    "Spacious bathroom with hot water",
    "Handcrafted furniture",
    "Garden view sitting area",
    "Wi-Fi",
    "Daily room cleaning",
    "Surfboard storage",
  ],
  "Coral Room": [
    "Cozy double bed with fresh linens",
    "Air Conditioning",
    "Hot water shower",
    "Private balcony / sitting corner",
    "Wi-Fi",
    "Towels & toiletries included",
    "Daily room cleaning",
  ],
  "Pearl Room": [
    "Upper-floor room with partial sea view",
    "Air Conditioning",
    "Hot water shower",
    "Shared terrace with seating",
    "Wi-Fi",
    "Daily room cleaning",
    "Surfboard storage",
  ],
};

const defaultFeatures = [
  "Comfortable bed & linens",
  "Air Conditioning or fan",
  "Hot water shower",
  "Wi-Fi",
  "Daily room cleaning",
];

const FeaturedDestination = () => {
  const navigate = useNavigate();

  // Use only the first 3 rooms for the large cards
  const featuredRooms = roomsDummyData.slice(0, 4);


  return (
    <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      {/* Title + subtitle (sky blue) */}
      
      <h2 className="font-playfair text-3xl md:text-5xl font-extrabold text-sky-600 text-center leading-tight">
        Accommodation Options
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mt-4 leading-relaxed">
        Choose between our shared dorms for a social vibe or private rooms for
        added comfort and privacy. All options are just steps from the waves and
        designed for relaxation after a day in the surf.
      </p>


      {/* Big glassy cards container */}
      <div className="w-full max-w-6xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room, index) => {
            const features = featureMap[room.name] || defaultFeatures;
            const imgSrc = coverMap[room.name] || room.images?.[0] || assets.regImage;


            return (
              <div
                key={room._id}
                className="relative flex flex-col rounded-[28px] border border-sky-100/80 bg-white/75 backdrop-blur-md shadow-[0_26px_80px_rgba(15,23,42,0.12)] overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 md:h-56 lg:h-60 w-full overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {index === 0 && (
                    <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                      Best Seller
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="px-6 pt-6 pb-5 flex flex-col h-full">
                  {/* Room title + rating */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-playfair text-xl text-gray-900">
                      {room.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm">
                      <img
                        src={assets.starIconFilled}
                        alt="rating"
                        className="h-4 w-4"
                      />
                      <span>4.5</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <img
                      src={assets.locationIcon}
                      alt="location"
                      className="h-4 w-4"
                    />
                    <span className="line-clamp-1">
                      {room.hotel?.address || "Hikkaduwa, Sri Lanka"}
                    </span>
                  </div>

                  {/* Feature bullet list */}
                  <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-1">
                    {features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-[2px] text-sky-500">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price + Book button */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <p>
                      <span className="text-xl font-semibold text-gray-900">
                        ${room.pricePerNight}
                      </span>
                      <span className="text-sm text-gray-500"> /night</span>
                    </p>
                    <button
                      onClick={() => {
                        navigate(`/rooms/${room._id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-sky-500 text-white hover:bg-sky-600 shadow-sm transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View more button (same logic) */}
      <button
        onClick={() => {
          navigate("/rooms");
          window.scrollTo(0, 0);
        }}
        className="mt-10 px-5 py-2.5 text-sm font-medium border border-sky-100 rounded-full bg-white shadow-sm hover:bg-slate-50 transition-all cursor-pointer"
      >
        View More
      </button>
    </section>
  );
};

export default FeaturedDestination;
