"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black w-full h-auto mt-48">
      <div className="flex flex-col sm:flex-row items-start max-w-6xl mx-auto py-16 px-4">
        <Link
          href="/"
          onClick={handleScrollToTop}
          className="flex items-center gap-2 text-xl text-white font-helvetica-lt-pro font-bold pb-4"
        >
          <Image
            src="/sclogo-white.svg"
            alt="SoundCreate logo"
            width={39}
            height={32}
          />
          SoundCreate
        </Link>
        <nav className="flex flex-col text-white font-helvetica-lt-pro font-bold gap-4 sm:ml-auto sm:pr-8 lg:pr-16 py-4 sm:py-0">
          <Link href="/members">Member</Link>
          <Link href="/releases">Release</Link>
        </nav>
        <div className="flex flex-col text-white font-helvetica-lt-pro font-bold gap-4 sm:pl-8 lg:pl-16 py-4 sm:py-0">
          <Link href="https://x.com/SoundCreateFUN/">X(Twitter)</Link>
          <Link href="https://www.youtube.com/@soundcreatefun/">Youtube</Link>
          <Link href="https://funsoundcreate.bandcamp.com/">bandcamp</Link>
          <Link href="https://soundcloud.com/soundcreate-fun/">SoundCloud</Link>
        </div>
      </div>
      <div className="flex items-center max-w-6xl mx-auto pt-16 pb-8 px-4 flex-col">
        <div className="bg-white w-full h-px"></div>
        <div className="flex flex-row justify-between items-center w-full mt-8">
          <p className="text-white text-[16px] font-bold font-helvetica-lt-pro">
            ©2026 SoundCreate
          </p>
          <Image
            src="/footershape.svg"
            alt="footer shape"
            width={26}
            height={16}
          />
        </div>
      </div>
    </footer>
  );
}
