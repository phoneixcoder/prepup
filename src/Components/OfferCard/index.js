import React from "react";

const OfferCard = (props) => {
  return (
    <>
      <div className="mt-[80px]">
        <div className="flex flex-col items-center border border-[#FFFFFF] w-[190px] h-[240px] rounded-[10px] py-[25px]">
            <img src="/" alt="logo" />
            <div className="flex h-[1px] mt-[16px] w-[70%] bg-[#FFFFFF]"></div>
            <p className="text-[12px] font-normal text-center text-[#FFFFFF] ">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
