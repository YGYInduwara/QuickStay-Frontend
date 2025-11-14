import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const BookIcon = () => (
  <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/#" },
    { name: "Stay With Us", path: "/rooms" },
    { name: "Dine With Us", path: "/dine-with-us" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const user = null; // No Clerk anymore

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      const handleScroll = () => setIsScrolled(window.scrollY > 10);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  const isActive = (path) =>
    location.pathname === path
      ? "text-black"
      : isScrolled
      ? "text-gray-700"
      : "text-white";

  const openWhatsApp = () => {
    const ownerPhone = "+94777336173"; // Owner's WhatsApp number
    const url = `https://wa.me/${ownerPhone.replace(/\D/g, "")}?text=${encodeURIComponent(
      "Hello! I'd like to know more about the availability facilities in Why Not Restaurant."
    )}`;
    window.open(url, "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/" onClick={() => setIsMenuOpen(false)}>
        <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${isActive(link.path)}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
            <div
              className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
      </div>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-4">
        <img src={assets.searchIcon} alt="search" className={`${isScrolled && "invert"} h-7 transition-all duration-500`} />

        <button
          onClick={openWhatsApp}
          className="bg-black text-white px-8 py-2.5 rounded-full ml-2 transition-all duration-500"
        >
          Chat
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt="menu"
          className={`${isScrolled && "invert"} h-4`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
          <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
        </button>

        {navLinks.map((link) => (
          <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}

        {/* Chat Button */}
        <button
          onClick={() => {
            setIsMenuOpen(false);
            openWhatsApp();
          }}
          className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500"
        >
          Chat
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
