import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2 text-xl text-black font-helvetica-lt-pro font-bold pl-60">
        <Image src="/sclogo.svg" alt="SoundCreate logo" width={39} height={32} />
        SoundCreate
      </Link>
      <nav className="flex gap-12 text-black font-helvetica-lt-pro font-bold pr-60">
        <Link href="/about">About</Link>
        <Link href="/member">Member</Link>
        <Link href="/release">Release</Link>
      </nav>
    </header>
  );
}
