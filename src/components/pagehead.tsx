"use client";

import { motion } from "motion/react";

export default function PageHead() {
  return ( 
  <div className="pt-32 px-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto ">
          <motion.img
            src="/sqstripe.svg"
            alt="sqstripe"
            className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] lg:h-[25px] lg:w-[25px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0, 1,] }}
            transition={{
              duration: 0.4,
              times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
            }}
          />
          <motion.p 
            className="text-[15px] sm:text-[20px] lg:text-[25px] font-helvetica-lt-pro font-bold text-violet-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0, 1,] }}
            transition={{
              duration: 0.4,
              times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
            }}
            >
              Release
            </motion.p>
          <motion.img
            src="/sqstripe.svg"
            alt="sqstripe"
            className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] lg:h-[25px] lg:w-[25px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0, 1,] }}
            transition={{
              duration: 0.4,
              times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <motion.h1 
            className="text-[30px] sm:text-[50px] lg:text-[66px] font-noto-sans-jp font-bold text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            リリースしたアルバム
          </motion.h1>
        </div>
      </div>
    );
}