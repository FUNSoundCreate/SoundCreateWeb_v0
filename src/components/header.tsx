"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative px-4 sm:px-0">
      <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl text-black font-helvetica-lt-pro font-bold"
        >
          <Image
            src="/sclogo.svg"
            alt="SoundCreate logo"
            width={39}
            height={32}
          />
          SoundCreate
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-12 text-black font-helvetica-lt-pro font-bold">
          <Link href="/member">Member</Link>
          <Link href="/release">Release</Link>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 px-4"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 origin-center ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 origin-center ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 px-10 sm:px-40 py-6 flex flex-col gap-6 text-black font-helvetica-lt-pro font-bold z-50 shadow-md">
          <Link href="/member" onClick={() => setIsOpen(false)}>
            Member
          </Link>
          <Link href="/release" onClick={() => setIsOpen(false)}>
            Release
          </Link>
        </nav>
      )}
    </header>
  );
}
