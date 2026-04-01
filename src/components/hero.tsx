"use client";

import { motion } from "motion/react";
import Mask from "./mask";

export default function Hero() {
  return (
    <section className="w-full h-auto overflow-hidden">
      <div className="max-w-440 ml-auto px-4 -mr-20">
        <div className="flex flex-row items-stretch">
          <div className="flex flex-col justify-between">
            <motion.img
              src="/downarrow.svg"
              alt="down arrow"
              className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] lg:h-[25px] lg:w-[25px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1] }}
              transition={{
                duration: 0.6,
                times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 1],
              }}
            />
            <div>
              <motion.p
                className="text-[12px] sm:text-[16px] lg:text-[25px] text-violet-600 font-bold font-helvetica-lt-pro"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1] }}
                transition={{
                  duration: 0.6,
                  times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 1],
                }}
              >
                We are
              </motion.p>
              <motion.h1
                className="text-[31px] sm:text-[41px] lg:text-[66px] text-black font-bold font-helvetica-lt-pro"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "easeOut",
                }}
              >
                SoundCreate
              </motion.h1>
            </div>
            <motion.img
              src="/stripes.svg"
              alt="stripes"
              className="h-[15px] w-[39px] sm:h-[20px] sm:w-[52px] lg:h-[25px] lg:w-[65px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1] }}
              transition={{
                duration: 0.6,
                times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 1],
              }}
            />
          </div>
          <Mask />
        </div>
      </div>
    </section>
  );
}
