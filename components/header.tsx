import type { NextPage } from "next";

export type HeaderType = {
  className?: string;

  /** Variant props */
  property1?: string;
  propety2?: string;
};

const Header: NextPage<HeaderType> = ({
  className = "",
  property1 = "Dark",
  propety2 = "Long",
}) => {
  return (
    <header
      className={`absolute top-[15px] left-[0px] w-[1440px] h-[168px] flex flex-row items-start justify-end py-14 px-20 box-border gap-[168px] text-left text-base text-whitesmoke font-inter ${className}`}
      data-property1={property1}
      data-propety2={propety2}
    >
      <div className="hidden flex-row items-center justify-center gap-10">
        <div className="h-5 w-[26px] relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
          link
        </div>
        <div className="h-5 w-[26px] relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
          link
        </div>
        <div className="h-5 w-[26px] relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
          link
        </div>
        <div className="h-5 w-[26px] relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
          link
        </div>
        <div className="h-5 w-[26px] relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
          link
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-4 px-10 bg-white h-14 w-[154px] rounded-2xl flex flex-row items-start justify-start box-border">
        <a className="[text-decoration:none] h-6 w-[75px] relative text-xl tracking-[-0.03em] leading-[24px] font-semibold font-inter text-black text-left inline-block shrink-0">
          Sign-up
        </a>
      </button>
      <div className="hidden flex-row items-center justify-start gap-3">
        <div className="w-14 relative shadow-[24px_-20px_56px_rgba(0,_0,_0,_0.05)] rounded-2xl bg-whitesmoke h-14" />
        <div className="w-[186px] relative shadow-[24px_-20px_56px_rgba(0,_0,_0,_0.05)] rounded-2xl bg-gray h-14" />
      </div>
    </header>
  );
};

export default Header;
