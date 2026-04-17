import Image from "next/image";
import Link from "next/link";
import { SiSoundcloud } from "react-icons/si";

type MemberProps = {
  imageSrc: string;
  name: string;
  role: string;
  comment: string;
  FavGenre: string;
  xUrl?: string;
  soundcloudUrl?: string;
};

export default function Member({
  imageSrc,
  name,
  role,
  comment,
  FavGenre,
  xUrl,
  soundcloudUrl,
}: MemberProps) {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-12 lg:gap-24 max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center gap-2 shrink-0 pt-1">
        <div className="relative w-[200px] h-[200px]">
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        </div>
        <div className="flex gap-4 md:self-start pt-2 items-center">
          {xUrl && (
            <Link href={xUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/x-logo.svg"
                alt="X"
                width={30}
                height={30}
                className="hover:opacity-60"
              />
            </Link>
          )}
          {soundcloudUrl && (
            <Link
              href={soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiSoundcloud className="w-11 h-11 text-gray-800 hover:text-gray-600" />
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 px-8 md:px-0">
        <div>
          <p className="text-md md:text-lg text-gray-500 font-noto-sans-jp">
            {role}
          </p>
          <h2 className="text-2xl md:text-3xl text-black font-bold font-helvetica-lt-pro">
            {name}
          </h2>
        </div>

        <div>
          <p className="text-md md:text-lg text-violet-600 font-bold font-helvetica-lt-pro">
            Comment
          </p>
          <p className="text-md md:text-lg text-black font-noto-sans-jp whitespace-pre-line">
            {comment}
          </p>
        </div>

        <div>
          <p className="text-md md:text-lg text-violet-600 font-bold font-helvetica-lt-pro">
            Favorite Genre
          </p>
          <p className="text-md md:text-lg text-black font-noto-sans-jp">
            {FavGenre}
          </p>
        </div>
      </div>
    </div>
  );
}
