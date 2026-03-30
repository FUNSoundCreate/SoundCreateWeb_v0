import Image from "next/image";
import Link from "next/link";

type LinkProps = {
  href : string
  imgsrc : string
  alt : string
}

export default function LinkIcon({href, imgsrc, alt} : LinkProps) {
  return (
    <div>
      <Link  
        href={href}
        className=""
        >
        <Image src={imgsrc} alt={alt} width={128} height={128} />
      </Link>
    </div> 
  );
}
