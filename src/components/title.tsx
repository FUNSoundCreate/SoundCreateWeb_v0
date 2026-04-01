type TitleProps = {
  subtitle: string;
  title: string;
};

export default function Title({ subtitle, title }: TitleProps) {
  return (
    <div className="flex flex-col items-center pt-64">
      <p className="text-[25px] text-center font-bold font-helvetica-lt-pro text-violet-600">
        {subtitle}
      </p>
      <h1 className="text-[41px] text-center font-bold font-noto-sans-jp text-black">
        {title}
      </h1>
    </div>
  );  
}