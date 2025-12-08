"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/usetheme";
import { useContentStore } from "../store/useContentStore";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const headerData = useContentStore((s) => s.header);

  return (
    <>
      <header
        className="
          w-full fixed top-0 left-0 z-50 shadow-md
          bg-black text-white
          dark:bg-white dark:text-black
          transition-colors duration-300
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="
              text-2xl font-bold tracking-wide no-underline
              text-white dark:text-black
            "
          >
            {headerData.logoText}
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => window.location.assign("/#about")}
              className="text-white dark:text-black hover:opacity-70 transition"
            >
              {headerData.about}
            </button>

            <button
              onClick={() => window.location.assign("/#skills")}
              className="text-white dark:text-black hover:opacity-70 transition"
            >
              {headerData.skills}
            </button>

            <Link
              href="/projects"
              className="text-white dark:text-black hover:opacity-70 transition"
            >
              {headerData.projects}
            </Link>

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="
                p-2 rounded-full transition
                bg-white text-black
                dark:bg-black dark:text-white
              "
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>

            <Link
              href="/contact"
              className="
                ml-2 px-4 py-2 rounded-full transition
                bg-white text-black hover:bg-gray-200
                dark:bg-black dark:text-white dark:hover:bg-gray-800
              "
            >
              {headerData.contactButton}
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col justify-center gap-[6px]"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-[3px] w-7 bg-current transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-7 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[3px] w-7 bg-current transition ${
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

      <aside
        className={`
          fixed top-0 right-0 h-full w-64 z-50 shadow-xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}

          bg-black text-white
          dark:bg-white dark:text-black
        `}
      >
        <div className="px-6 py-5 border-b border-gray-700 dark:border-gray-300 flex justify-between items-center">
          <span className="text-lg font-semibold">Menu</span>
          <button className="text-xl" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 mt-6 text-lg">
          <button
            onClick={() => {
              window.location.assign("/#about");
              setOpen(false);
            }}
            className="block text-left w-full text-white dark:text-black hover:opacity-70 transition"
          >
            {headerData.about}
          </button>

          <button
            onClick={() => {
              window.location.assign("/#skills");
              setOpen(false);
            }}
            className="block text-left w-full text-white dark:text-black hover:opacity-70 transition"
          >
            {headerData.skills}
          </button>

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="block text-left w-full text-white dark:text-black hover:opacity-70 transition"
          >
            {headerData.projects}
          </Link>

          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setOpen(false);
            }}
            className="block text-left w-full px-4 py-2 rounded-full flex items-center gap-2
               bg-white text-black dark:bg-black dark:text-white transition"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />} Toggle Theme
          </button>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-left w-full text-white dark:text-black hover:opacity-70 transition"
          >
            {headerData.contactButton}
          </Link>
        </nav>
      </aside>
    </>
  );
}
