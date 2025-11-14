import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  // form state
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const r = roomsDummyData.find((rr) => rr._id === id);
    if (!r) return;

    // 1) Try folder-based images by slug (Vite)
    const allImgs = import.meta.glob('../assets/rooms/**/*.{png,jpg,jpeg,webp,avif}', { eager: true });
    const slug = r.slug || (r.name || r.roomType || '').toLowerCase().split(' ')[0];

    const imgs = Object.entries(allImgs)
      .filter(([path]) => path.includes(`/rooms/${slug}/`))
      .map(([, mod]) => mod.default)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    // 2) Fallback to existing room.images if folder is empty
    const finalImages = imgs.length ? imgs : (r.images || []);

    setRoom({ ...r, images: finalImages });
    if (finalImages.length) setMainImage(finalImages[0]);
  }, [id]);

  if (!room) return null;

  // normalize hotel phone to WhatsApp format (digits only, no '+') with fallback
  const ownerPhone =
    (room.hotel?.contact || '').replace(/\D/g, '') || '94777336173';

  const handleWhatsApp = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut || !guests) {
      alert('Please fill Check-In, Check-Out and Guests.');
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      alert('Check-Out must be after Check-In.');
      return;
    }

    const msg = `Hello! I'd like to check availability.

🏨 Hotel: ${room.hotel.name}
🛏️ Room: ${room.name || room.roomType}
📍 Address: ${room.hotel.address}

📅 Check-In: ${checkIn}
📅 Check-Out: ${checkOut}
👥 Guests: ${guests}

Please let me know if this room is available and the total price.`;

    const url = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleContactNow = () => {
    const msg = `Hello! I'd like to inquire about ${room.name || room.roomType} at ${room.hotel.name}.`;
    const url = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Room Details */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {room.name || room.roomType}
          <span className="block md:ml-3 font-inter text-sm text-gray-500">
            {room.hotel.name}
          </span>
        </h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">20% OFF</p>
      </div>

      {/* Room Rating */}
      <div className="flex items-center gap-1 mt-2">
        <StarRating />
        <p className="ml-2">200+ reviews</p>
      </div>

      {/* Room Address */}
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Room Images */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt="Room"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room?.images.length > 0 &&
            room.images.map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                key={image + index}
                src={image}
                alt="Room"
                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                  mainImage === image ? 'outline outline-2 outline-orange-500' : ''
                }`}
              />
            ))}
        </div>
      </div>

      {/* Room Highlights */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">Experience Luxury Like Never Before</h1>
          <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
            {room.amenities.map((item, index) => (
              <div key={item + index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                <img
                  src={facilityIcons[item] || assets.roomServiceIcon}
                  alt={item}
                  className="w-5 h-5"
                />
                <p className="text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Room Price */}
        <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
      </div>

      {/* CheckIn CheckOut Form -> WhatsApp */}
      <form
        onSubmit={handleWhatsApp}
        className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl"
      >
        <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="font-medium">Check-In</label>
            <input
              type="date"
              id="checkInDate"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="font-medium">Check-Out</label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">Guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value || '1', 10))}
              className="max-w-[5rem] rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
        >
          Check Availability (WhatsApp)
        </button>
      </form>

      {/* Common Specifications */}
      <div className="mt-25 space-y-4">
        {roomCommonData.map((spec, index) => (
          <div key={spec.title + index} className="flex items-start gap-2">
            <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6.5" />
            <div>
              <p className="text-base">{spec.title}</p>
              <p className="text-gray-500">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hosted by */}
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4">
          <img src={room.hotel.owner.image} alt="Host" className="h-14 w-14 md:h-18 md:w-18 rounded-full" />
          <div>
            <p className="text-lg md:text-xl">Hosted by {room.hotel.owner.username || room.hotel.name}</p>
            <div className="flex items-center mt-1">
              <StarRating />
              <p className="ml-2">200+ reviews</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleContactNow}
          className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer"
        >
          Contact Now (WhatsApp)
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
