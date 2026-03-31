"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Support() {
  const [copied, setCopied] = useState(false);
  const email = "funsoundcreate@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-col">
      <div className="flex items-center justify-between gap-10 lg:gap-40 max-w-6xl mx-auto flex-col lg:flex-row py-16">
        <div className="bg-violet-600 w-[80%] lg:w-1/2 h-auto gap-8">
          <div className="flex items-start px-12 py-8 gap-0.5 flex-col">
            <p className="text-[16px] text-white font-bold font-helvetica-lt-pro">
              Join Us
            </p>
            <p className="text-[25px] text-white font-bold font-noto-sans-jp">
              サークルに参加
            </p>
            <p className="text-[16px] text-white font-normal font-noto-sans-jp pb-6">
              SoundCreateへの加入申請はこちら
            </p>
            <Link
              href="https://forms.gle/MTh8fbC2QEDycEbs6"
              className="inline-flex items-center self-start px-4 py-2 bg-white text-[16px] font-helvetica-lt-pro text-violet-600 font-bold"
            >
              Apply
              <Image
                src="/uparrow-violet600.svg"
                alt=""
                width={14}
                height={14}
                className="ml-2"
              />
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 w-[80%] lg:w-1/2 h-auto gap-8">
          <div className="flex items-start px-12 py-8 gap-0.5 flex-col">
            <p className="text-[16px] text-black font-bold font-helvetica-lt-pro">
              Contact Us
            </p>
            <p className="text-[25px] text-black font-bold font-noto-sans-jp">
              サークルへのお問い合せ
            </p>
            <p className="text-[16px] text-black font-normal font-noto-sans-jp pb-6">
              ご質問、ご相談各種お問い合わせはこちらから
            </p>
            <button
              onClick={handleCopy}
              className="inline-flex items-center self-start px-4 py-2 bg-white text-[16px] font-helvetica-lt-pro text-black font-bold cursor-pointer"
            >
              {copied ? "Copied!" : email}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
