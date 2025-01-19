import type { NextPage } from "next";
import Image from "next/image";
import Header from "./header";

export type Component1Type = {
  className?: string;
};

const Component1: NextPage<Component1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] h-[900px] bg-black max-w-full overflow-hidden leading-[normal] tracking-[normal] text-center text-[62px] text-white font-inter ${className}`}
    >
      <div className="absolute top-[223px] left-[1145px] shadow-[12px_32px_80px_-20px_rgba(0,_0,_0,_0.12)] rounded-13xl bg-white w-[132px] h-[132px]" />
      <div className="absolute top-[535px] left-[1013px] shadow-[12px_32px_80px_-20px_rgba(0,_0,_0,_0.12)] rounded-[40px] bg-lightskyblue w-[264px] h-[264px]" />
      <h1 className="m-0 absolute top-[240px] left-[405px] text-inherit tracking-[-0.04em] leading-[80px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] font-[inherit] mq450:text-[37px] mq450:leading-[48px] mq750:text-[50px] mq750:leading-[64px]">
        <p className="m-0">
          <i className="font-light font-inter">Leverage</i>
          <span className="font-semibold"> your network</span>
        </p>
        <p className="m-0 font-semibold"> from 0 to 1.</p>
      </h1>
      <button className="cursor-pointer [border:none] py-4 pl-10 pr-[39px] bg-lightskyblue absolute top-[507px] left-[calc(50%_-_112px)] rounded-2xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-steelblue">
        <div className="relative text-xl tracking-[-0.03em] leading-[24px] font-semibold font-inter text-black text-left">
          See for yourself
        </div>
      </button>
      <div className="absolute top-[431px] left-[493px] text-xl tracking-[-0.02em] leading-[24px] font-medium text-gainsboro inline-block w-[455px] h-12 mq450:text-base mq450:leading-[19px]">
        Explore data-driven networking, track relationships, all in one place.
      </div>
      <Header property1="Dark" propety2="Long" />
      <div className="absolute top-[111px] left-[80px] w-[372px] h-[712px]">
        <div className="absolute top-[247px] left-[0px] shadow-[12px_32px_80px_-20px_rgba(0,_0,_0,_0.12)] rounded-13xl bg-lightskyblue w-[164px] h-[164px]" />
        <div className="absolute top-[0px] left-[116px] shadow-[12px_32px_80px_-20px_rgba(0,_0,_0,_0.12)] rounded-3xl bg-white w-24 h-24" />
        <div className="absolute top-[516px] left-[176px] shadow-[12px_32px_80px_-20px_rgba(0,_0,_0,_0.12)] rounded-13xl bg-white w-[196px] h-[196px]" />
        <Image
          className="absolute top-[84px] left-[60px] w-[104px] h-[205px] z-[1]"
          loading="lazy"
          width={104}
          height={205}
          alt=""
          src="/vector-1.svg"
        />
        <Image
          className="absolute top-[376.5px] left-[73.5px] w-[120.5px] h-[197.5px] z-[1]"
          loading="lazy"
          width={121}
          height={198}
          alt=""
          src="/vector-2.svg"
        />
      </div>
    </div>
  );
};

export default Component1;
