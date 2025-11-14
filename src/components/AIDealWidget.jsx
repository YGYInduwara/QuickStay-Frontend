import React, { useState } from "react";

const AIDealWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deal, setDeal] = useState(null);

  const DEALS = [
    {
      title: "Sunset Dinner Special",
      text: "Book a table after 6.30 PM and get 12% off your total food bill for today.",
      code: "SUNSET12",
    },
    {
      title: "Beachfront Room Saver",
      text: "Stay 2 nights and get the 3rd night 50% off for direct bookings via WhatsApp.",
      code: "WHYNOTSTAY3",
    },
    {
      title: "Seafood Platter Deal",
      text: "Order any seafood platter and get a complimentary fresh juice per guest.",
      code: "PLATTERJUICE",
    },
    {
      title: "Birthday Surprise",
      text: "Celebrating a birthday? Mention this code and get a free dessert platter.",
      code: "BIRTHDAYTREAT",
    },
  ];

  const openWithRandomDeal = () => {
    const random = DEALS[Math.floor(Math.random() * DEALS.length)];
    setDeal(random);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <>
      {/*  ROUND FLOATING BUTTON */}
      <button
        onClick={openWithRandomDeal}
        className="
          fixed bottom-6 right-6 z-40 
          w-14 h-14 rounded-full 
          bg-black text-white 
          shadow-xl flex items-center justify-center 
          text-2xl 
          active:scale-95 transition-all 
          hover:bg-gray-900
        "
      >
        🤖
      </button>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={close}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl leading-none"
            >
              ×
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center text-lg">
                🤖
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Why Not • AI Concierge
                </p>
                <h3 className="font-playfair text-xl">
                  Today’s Special Recommendation
                </h3>
              </div>
            </div>

            {deal && (
              <>
                <h4 className="font-semibold text-gray-900 mt-2">
                  {deal.title}
                </h4>
                <p className="text-sm text-gray-700 mt-2">{deal.text}</p>

                <div className="mt-4 bg-slate-100 rounded-lg px-3 py-2 text-sm flex items-center justify-between">
                  <span className="text-gray-600">Mention this code:</span>
                  <span className="font-mono font-semibold text-black">
                    {deal.code}
                  </span>
                </div>
              </>
            )}

            <p className="text-[11px] text-gray-400 mt-3">
              * Subject to availability. Please confirm when booking or ordering.
            </p>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={close}
                className="text-sm px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50"
              >
                Close
              </button>

              <button className="text-sm px-3 py-2 rounded-md bg-black text-white hover:bg-gray-900">
                Ask on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIDealWidget;
