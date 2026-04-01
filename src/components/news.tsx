import Image from "next/image";

export default function News() {
  return (
    <div className="flex items-center gap-8 max-w-6xl mx-auto py-16 px-4 flex-col sm:flex-row sm:gap-20">
      <div className="w-full sm:flex-1 flex flex-col gap-2 px-4 sm:px-0">
        <p className="text-[16px] font-bold font-helvetica-lt-pro text-violet-600">Next Event</p>
        <p className="text-[25px] text-black font-bold font-helvetica-lt-pro">M3春2026</p>
        <p className="text-[16px] font-noto-sans-jp text-black leading-relaxed">半年に一度の一大イベント！弊サークルより新譜二種をリリース予定です。乞うご期待！</p>
      </div>
      <div className="relative w-full sm:flex-1 px-4 sm:px-0">
        <div className="relative aspect-16/5 overflow-hidden">
          <Image
            src="/m3sp26.png"
            alt="news image"
            fill
            sizes="(min-width: 600px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
