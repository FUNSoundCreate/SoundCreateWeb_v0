import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-6 text-black font-helvetica-lt-pro">
        <h1 className="text-4xl font-light">404 Not Found</h1>
        <Image
          src="/distortedface.png"
          alt=""
          width={200}
          height={200}
          priority
          style={{ height: "auto" }}
          className="my-2"
        />
        <Link
          className="text-violet-600 hover:underline text-center"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
