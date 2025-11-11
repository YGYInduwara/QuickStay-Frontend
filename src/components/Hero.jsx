import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>Down South Best Beachfront Living</p>
      <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Why Not Stay and Play on the Sand?</h1>
      <p className='max-w-130 mt-2 text-sm md:text-base'>Fall asleep to the sound of the waves, wake up on the beach, and enjoy the best cocktails and local adventures right from your door.</p>

      <form
  onSubmit={(e) => {
    e.preventDefault();

    const checkIn = e.target.checkIn.value;
    const checkOut = e.target.checkOut.value;
    const guests = e.target.guests.value;

    // Validation: prevent older dates or same date
    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);

    if (outDate <= inDate) {
      alert("Check-out date must be later than check-in date.");
      return;
    }

    // ✅ Owner WhatsApp number
    const ownerPhone = "+94777336173"; // change if needed

    const message = `Hello! I would like to check availability.

📅 Check-in: ${checkIn}
📅 Check-out: ${checkOut}
👥 Guests: ${guests}

Please confirm availability.`;

    const whatsappUrl = `https://wa.me/${ownerPhone.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  }}
  className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto"
>
  <div>
    <div className="flex items-center gap-2">
      <img src={assets.calenderIcon} alt="calendar" className="h-4" />
      <label htmlFor="checkIn">Check in</label>
    </div>
    <input
      id="checkIn"
      name="checkIn"
      type="date"
      className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
      required
    />
  </div>

  <div>
    <div className="flex items-center gap-2">
      <img src={assets.calenderIcon} alt="calendar" className="h-4" />
      <label htmlFor="checkOut">Check out</label>
    </div>
    <input
      id="checkOut"
      name="checkOut"
      type="date"
      className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
      required
    />
  </div>

  <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
    <label htmlFor="guests">Guests</label>
    <input
      id="guests"
      name="guests"
      min={1}
      max={10}
      type="number"
      className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
      placeholder="1"
      required
    />
  </div>

  <button
    type="submit"
    className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
  >
    <img src={assets.searchIcon} alt="searchIcon" className="h-7" />
    <span>Search</span>
  </button>
</form>

    </div>
  )
}

export default Hero
