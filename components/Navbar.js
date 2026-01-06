"use client";

import { useState } from "react";
import Image from "next/image";
import GooeyNav from "./GooeyNav";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Works", href: "#works", id: "works" },
    { label: "Clients", href: "#clients", id: "clients" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Smooth scroll
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false); // close mobile menu on click
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-[100]"
      style={{
        backdropFilter: "blur(10px)",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Image
            src="/logob.png"
            alt="Company Logo"
            width={90}
            height={50}
            priority
            className="w-[70px] md:w-[90px] h-auto"
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:block">
          <GooeyNav
            items={navItems.map((item) => ({
              label: item.label,
              href: item.href,
              onClick: () => handleNavClick(item.id),
            }))}
          />
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black bg-opacity-90 w-full text-center py-6 space-y-4 animate-slide-down">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-white text-lg hover:text-cyan-400 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
