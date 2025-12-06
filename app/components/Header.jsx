"use client";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/usetheme";
import { useContentStore } from "../store/useContentStore";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const headerData = useContentStore((s) => s.header);

  return (
    <>
      <header className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide">
            {headerData.logoText}
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

            {headerData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-gray-300 transition text-white"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>

            <a
              href="#contact"
              className="ml-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              {headerData.contactButton}
            </a>

          </nav>

          <button
            className="md:hidden flex flex-col justify-center gap-[6px]"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-[3px] w-7 bg-white transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-7 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-7 bg-white transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="px-6 py-5 border-b border-gray-700 flex justify-between items-center">
          <span className="text-lg font-semibold">Menu</span>
          <button className="text-white text-xl" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>


        <nav className="flex flex-col gap-6 px-6 mt-6 text-lg">

          {headerData.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:opacity-70 transition"
            >
              {link.label}
            </a>
          ))}


          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 flex items-center gap-2 transition"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
            Toggle Theme
          </button>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-white text-black rounded-full text-center hover:bg-gray-200 transition"
          >
            {headerData.contactButton}
          </a>
        </nav>
      </div>
    </>
  );
}
