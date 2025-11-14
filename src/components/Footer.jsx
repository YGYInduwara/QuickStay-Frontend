import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-[#F6F9FC] text-gray-500/80 pt-10 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-8">

        {/* Brand Section */}
        <div className="max-w-80">
          <img
            src={assets.logo}
            alt="Why Not logo"
            className="mb-4 h-8 md:h-9 invert opacity-80"
          />
          <p className="text-sm leading-relaxed">
            <b>Why Not</b> stay on the sand? We are your complete beachfront escape in Wewala, Sri Lanka.
            Enjoy amazing food, ice-cold drinks, comfortable rooms, and thrilling sea adventures—all in one spot.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href='https://www.instagram.com/_whynothiikka_?igsh=MXR1czJpZHo1Y2MwNQ=='><img src={assets.instagramIcon} alt="instagram" className="w-6 cursor-pointer hover:opacity-70" /></a>
            <a href="https://www.facebook.com/share/16TmEQLEpN/?mibextid=wwXIfr"><img src={assets.facebookIcon} alt="facebook" className="w-6 cursor-pointer hover:opacity-70" /></a>
            <a href="#"><img src={assets.twitterIcon} alt="twitter" className="w-6 cursor-pointer hover:opacity-70" /></a>
            <a href="#"><img src={assets.linkendinIcon} alt="linkedin" className="w-6 cursor-pointer hover:opacity-70" /></a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <p className="font-playfair text-lg text-gray-800">CONTACT US</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>📍 101A Galle Road, Narigama, Hikkaduwa, Sri Lanka</li>
            <li>📞 +94 77 733 6173</li>
            <li>✉️ info@whynothikka.com</li>
            <li>🌐 www.whynothikka.com</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <p className="font-playfair text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Policy</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-80">
          <p className="font-playfair text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for travel inspiration and exclusive offers.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="email"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none text-sm"
              placeholder="Your email"
            />
            <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r hover:bg-gray-800 transition">
              <img src={assets.arrowIcon} alt="arrow-icon" className="w-3.5 invert" />
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-10" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-xs md:text-sm">
        <p>© {new Date().getFullYear()} Why Not Hikka. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
