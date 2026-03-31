import Mask from "./mask";

export default function Hero() {
  return (
    <section className="w-full h-auto overflow-hidden">
      <div className="max-w-440 ml-auto px-4 -mr-20">
        <div className="flex flex-row items-stretch">
          <div className="flex flex-col justify-between">
            <img
              src="/downarrow.svg"
              alt="down arrow"
              className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] lg:h-[25px] lg:w-[25px]"
            />
            <div>
              <p className="text-[12px] sm:text-[16px] lg:text-[25px] text-violet-600 font-bold font-helvetica-lt-pro">
                We are
              </p>
              <h1 className="text-[31px] sm:text-[41px] lg:text-[66px] text-black font-bold font-helvetica-lt-pro">
                SoundCreate
              </h1>
            </div>
            <img
              src="/stripes.svg"
              alt="stripes"
              className="h-[15px] w-[39px] sm:h-[20px] sm:w-[52px] lg:h-[25px] lg:w-[65px]"
            />
          </div>
          <Mask />
        </div>
      </div>
    </section>
  );
}
