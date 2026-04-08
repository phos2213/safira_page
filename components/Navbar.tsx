"use client";

import { useEffect, useState } from "react";

const ONFLY_URL = process.env.NEXT_PUBLIC_ONFLY_URL ?? "#";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-sm border-b border-gray-100" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-blue-700 font-semibold text-xl tracking-tight">
          Safira
        </span>
        <a
          href={ONFLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
        >
          Acessar o Onfly
        </a>
      </div>
    </header>
  );
}
