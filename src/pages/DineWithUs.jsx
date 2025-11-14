import React, { useMemo, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import menuHero from "../assets/menupage.png";

const OWNER_PHONE = "+94777336173";

import menu1 from "../assets/menu/1.png";
import menu2 from "../assets/menu/2.png";
import menu3 from "../assets/menu/3.png";
import menu4 from "../assets/menu/4.png";
import menu5 from "../assets/menu/5.png";
import menu6 from "../assets/menu/6.png";
import menu7 from "../assets/menu/7.png";
import menu8 from "../assets/menu/8.png";
import menu9 from "../assets/menu/9.png";
import menu10 from "../assets/menu/10.png";

import menu11 from "../assets/menu/11.png";
import menu12 from "../assets/menu/12.png";
import menu13 from "../assets/menu/13.png";
import menu14 from "../assets/menu/14.png";
import menu15 from "../assets/menu/15.png";
import menu16 from "../assets/menu/16.png";
import menu17 from "../assets/menu/17.png";
import menu18 from "../assets/menu/18.png";
import menu19 from "../assets/menu/19.png";
import menu20 from "../assets/menu/20.png";

import menu21 from "../assets/menu/21.png";
import menu22 from "../assets/menu/22.png";
import menu23 from "../assets/menu/23.png";
import menu24 from "../assets/menu/24.png";
import menu25 from "../assets/menu/25.png";
import menu26 from "../assets/menu/26.png";
import menu27 from "../assets/menu/27.png";
import menu28 from "../assets/menu/28.png";
import menu29 from "../assets/menu/29.png";
import menu30 from "../assets/menu/30.png";

import menu31 from "../assets/menu/31.png";
import menu32 from "../assets/menu/32.png";
import menu33 from "../assets/menu/33.png";
import menu34 from "../assets/menu/34.png";
import menu35 from "../assets/menu/35.png";
import menu36 from "../assets/menu/36.png";
import menu37 from "../assets/menu/37.png";
import menu38 from "../assets/menu/38.png";
import menu39 from "../assets/menu/39.png";
import menu40 from "../assets/menu/40.png";

import menu41 from "../assets/menu/41.png";
import menu42 from "../assets/menu/42.png";
import menu43 from "../assets/menu/43.png";
import menu44 from "../assets/menu/44.png";
import menu45 from "../assets/menu/45.png";
import menu46 from "../assets/menu/46.png";

const MENU_IMAGES = [
  menu1, menu2, menu3, menu4, menu5,
  menu6, menu7, menu8, menu9, menu10,
  menu11, menu12, menu13, menu14, menu15,
  menu16, menu17, menu18, menu19, menu20,
  menu21, menu22, menu23, menu24, menu25,
  menu26, menu27, menu28, menu29, menu30,
  menu31, menu32, menu33, menu34, menu35,
  menu36, menu37, menu38, menu39, menu40,
  menu41, menu42, menu43, menu44, menu45,
  menu46,
];


/* ---------- CATEGORIES (as requested) ---------- */
const categories = [
  "All",
  "Grilled & Light Options",
  "Main Courses",
  "Sri Lankan Beach Cocktails",
  "Drinks",
];

/* ---------- MENU DATA (your structure, no prices) ---------- */
const MENU_SECTIONS = [
  {
    category: "Grilled & Light Options",
    items: [
      {
        name: "Catch of the Day",
        description:
          "Fresh fish served with salad, chips & lime chili sauce (or served whole with fries & salad)",
        tag: "Seafood",
      },
      {
        name: "Tiger Prawn Skewers",
        description: "Char-grilled prawns with garlic butter dip",
        tag: "Seafood",
      },
      {
        name: "Grilled Tiger Prawns",
        description: "Skewered prawns brushed with garlic butter",
        tag: "Seafood",
      },
      {
        name: "Seafood Mixed Platter",
        description:
          "Lobster, jumbo prawns, crabs, fish, squid, cuttlefish served with rice or fries",
        tag: "Platter",
      },
    ],
  },

  {
    category: "Main Courses",
    items: [
      {
        name: "Rice & Curry (Seafood)",
        description:
          "Steamed rice with 4-5 vegetable curries, sambol, papadam & your choice of fish, prawns, or crab curry",
        tag: "Sri Lankan",
      },
      {
        name: "Vegetarian Rice & Curry",
        description: "Dhal, jackfruit curry, coconut sambol, fried brinjal & papadam",
        tag: "Veg",
      },
      {
        name: "Fish Ambul Thiyal (Sour Curry)",
        description: "Southern sour tuna curry with goraka & spices, served with red rice",
        tag: "Sri Lankan",
      },
      {
        name: "Coconut Milk Prawn Curry",
        description: "Juicy prawns in a creamy coconut sauce with curry leaves",
        tag: "Sri Lankan",
      },
      {
        name: "Negombo Lagoon Crab Curry",
        description: "Spicy crab cooked in coconut milk & roasted curry spices",
        tag: "Sri Lankan",
      },
      {
        name: "Devilled Prawns",
        description: "Stir fried with onions, peppers & a sweet-spicy sauce",
        tag: "Sri Lankan",
      },
      {
        name: "Spicy Squid Curry",
        description: "Squid simmered with chili, curry leaves & coconut",
        tag: "Sri Lankan",
      },
      {
        name: "Seafood Rice Bowl",
        description:
          "Stir fried prawns & squid over rice with veggies & soy-ginger sauce",
        tag: "Bowl",
      },
      {
        name: "Sri Lankan Fried Rice with Prawns",
        description: "Wok-fried rice with prawns, egg & vegetables",
        tag: "Rice",
      },
      {
        name: "Seafood Kottu Roti",
        description: "Chopped flatbread stir fried with vegetables, egg & seafood",
        tag: "Kottu",
      },
      {
        name: "Mac and Cheese",
        description: "Creamy or tomato sauce, with coleslaw & chips",
        tag: "Comfort",
      },
      {
        name: "Seafood Pasta",
        description: "Mixed seafood in a creamy or tomato sauce",
        tag: "Pasta",
      },
      {
        name: "Spaghetti",
        description: "Served with seafood or chicken",
        tag: "Pasta",
      },
      {
        name: "Burger",
        description: "Chicken or beef with chips",
        tag: "Grill",
      },
      {
        name: "Fish & Chips",
        description: "Crispy battered fish with tartar sauce & fries",
        tag: "Classic",
      },
    ],
  },

  {
    category: "Sri Lankan Beach Cocktails",
    items: [
      { name: "Arrack Sour", description: "Sri Lankan arrack, lime, palm treacle, bitters", tag: "Cocktail" },
      { name: "Ceylon Sunset", description: "Passionfruit, mango, arrack, grenadine, soda", tag: "Cocktail" },
      { name: "Bael Breeze", description: "Arrack, bael fruit syrup, ginger beer, lime", tag: "Cocktail" },
      { name: "Lemongrass Cooler", description: "Gin, lemongrass syrup, tonic, lime leaf", tag: "Cocktail" },
      { name: "Pineapple Arrack Mojito", description: "Fresh pineapple, mint, arrack, soda", tag: "Mojito" },
      { name: "Coconut Colada", description: "Coconut cream, pineapple juice, white rum (or arrack)", tag: "Colada" },
      { name: "Papaya Margarita", description: "Tequila, papaya puree, lime, triple sec", tag: "Margarita" },
      { name: "Mango Daiquiri", description: "Rum, mango, lime", tag: "Daiquiri" },
    ],
  },

  {
    category: "Drinks",
    items: [
      { name: "Coca-Cola", tag: "Soft Drink" },
      { name: "Sprite", tag: "Soft Drink" },
      { name: "Soda", tag: "Soft Drink" },
      { name: "Tonic", tag: "Soft Drink" },
      { name: "Fanta", tag: "Soft Drink" },
      { name: "Ginger Beer", tag: "Soft Drink" },
      { name: "Mango Juice", tag: "Juice" },
      { name: "Passionfruit Juice", tag: "Juice" },
      { name: "Pineapple Juice", tag: "Juice" },
      { name: "Watermelon Juice", tag: "Juice" },
      { name: "Banana Juice", tag: "Juice" },
      { name: "Mixed Fruit Juice", tag: "Juice" },
      { name: "Papaya Milkshake", tag: "Milkshake" },
      { name: "Banana Milkshake", tag: "Milkshake" },
      { name: "Mango Milkshake", tag: "Milkshake" },
      { name: "Passion Milkshake", tag: "Milkshake" },
      { name: "Mineral Water", tag: "Water" },
      { name: "Pot of Tea", tag: "Hot" },
      { name: "Pot of Coffee", tag: "Hot" },
    ],
  },
];

/* ---------- assign an image to every item (cycle existing images) ---------- */
// remove IMG_POOL

let autoId = 1;
let imgIndex = 0;

const FLAT_MENU = MENU_SECTIONS.flatMap((sec) =>
  sec.items.map((it) => {
    const img = MENU_IMAGES[imgIndex] || MENU_IMAGES[0]; // fallback if needed
    imgIndex += 1;

    return {
      id: autoId++,
      name: it.name,
      description: it.description || "",
      category: sec.category,
      tag: it.tag || sec.category.split(" ")[0],
      img,
    };
  })
);



export default function DineWithUs() {
  const [active, setActive] = useState("All");

  const menu = useMemo(() => {
    if (active === "All") return FLAT_MENU;
    return FLAT_MENU.filter((m) => m.category === active);
  }, [active]);

  return (
    <main className="bg-slate-50">
      {/* HERO (subtle parallax) */}
      <section className="relative h-[38vh] md:h-[44vh] overflow-hidden rounded-b-2xl">
        <div
          className="absolute inset-0 bg-center bg-cover md:bg-fixed"
          style={{ backgroundImage: `url(${menuHero})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
          
          <h1 className="font-playfair text-3xl md:text-5xl tracking-wide">Dine With Us</h1>
          <p className="mt-3 text-white/85 max-w-2xl text-center">
            Fresh local ingredients, oceanfront charm, and plates made with love. Book a table and taste the coast.
          </p>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: menu */}
          <div className="lg:col-span-2">
            <Title
              title="Menu"
              subTitle="Explore coastal favorites and international delights—crafted fresh, served with beachside warmth."
            />

            {/* Category chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-sm border transition-all ${
                    active === c
                      ? "bg-black text-white border-black"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Menu grid (same modern card UI, no price) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
              {menu.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.08)] group"
                >
                  <div className="relative h-44 md:h-52 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-white/85 backdrop-blur px-2 py-0.5 rounded text-xs">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                    {item.description && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right: reservation card (unchanged) */}
          <ReserveCard />
        </div>
      </section>
    </main>
  );
}

/* ---------- Reservation Card (unchanged) ---------- */
function ReserveCard() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    notes: "",
  });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const sendWhatsApp = (e) => {
    e.preventDefault();

    if (!form.date || !form.time || !form.guests) {
      alert("Please fill Date, Time and Guests.");
      return;
    }

    const dt = new Date(`${form.date}T${form.time}`);
    if (isNaN(dt.getTime())) {
      alert("Please enter a valid date/time.");
      return;
    }
    if (dt.getTime() < Date.now() - 60 * 1000) {
      alert("Reservation time must be in the future.");
      return;
    }

    const PHONE = OWNER_PHONE.replace(/\D/g, "");
    const msg = `
*Table Reservation Request*
Name: ${form.name || "-"}
Phone: ${form.phone || "-"}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}
Notes: ${form.notes || "-"}
`.trim();

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <aside className="sticky top-24">
      <div className="bg-white rounded-2xl shadow-[0_0_24px_rgba(0,0,0,0.10)] p-6">
        <h3 className="font-playfair text-2xl">Reserve a Table</h3>
        <p className="text-gray-600 text-sm mt-1">
          We’ll confirm via WhatsApp. Walk-ins welcome subject to availability.
        </p>

        <form className="mt-5 space-y-4" onSubmit={sendWhatsApp}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Name" name="name" value={form.name} onChange={onChange} />
            <Input label="Phone" name="phone" value={form.phone} onChange={onChange} placeholder="+94…" />
            <Input type="date" label="Date" name="date" value={form.date} onChange={onChange} required />
            <Input type="time" label="Time" name="time" value={form.time} onChange={onChange} required />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-700">Guests</label>
              <input
                type="number"
                min={1}
                max={12}
                name="guests"
                value={form.guests}
                onChange={onChange}
                className="w-full mt-1 rounded border border-gray-300 px-3 py-2 outline-none"
                required
              />
            </div>
            <div />
          </div>

          <div>
            <label className="text-sm text-gray-700">Notes (optional)</label>
            <textarea
              name="notes"
              rows={3}
              value={form.notes}
              onChange={onChange}
              className="w-full mt-1 rounded border border-gray-300 px-3 py-2 outline-none resize-y"
              placeholder="Birthday, high chair, allergy, etc."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md active:scale-[0.99] transition"
          >
            Check Availability on WhatsApp
          </button>
        </form>
      </div>

      <div className="mt-4 bg-white rounded-2xl p-4 shadow-[0_0_18px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-3">
          <img src={assets.badgeIcon} className="h-5" alt="" />
          <p className="text-sm text-gray-700">No prepayment required</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <img src={assets.locationIcon} className="h-5" alt="" />
          <p className="text-sm text-gray-700">Beachfront, Wewala • Hikkaduwa</p>
        </div>
      </div>
    </aside>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm text-gray-700">{label}</label>
      <input
        {...props}
        className="w-full mt-1 rounded border border-gray-300 px-3 py-2 outline-none"
      />
    </div>
  );
}
