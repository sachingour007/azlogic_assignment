import React from "react";

const FeatureCards = ({
  btn,
  heading,
  parcentIcon,
  flatHeading,
  para,
  carIcon,
  carDescription,
  wirteArrwoIcon,
}) => {
  console.log(btn);
  return (
    <div className="border flex flex-col flex-wrap bg-white rounded-lg shadow-lg w-full m-3 py-4 px-2">
      <div className="flex items-center gap-3 px-2">
        <button className="featurefont font-semibold bg-gradient-to-r from-[rgb(222,38,48)] to-[rgb(244,12,89)] text-white p-2 rounded-lg">
          {btn}
        </button>
        <p className="text-[#262626] featurefont font-semibold tracking-wider text-base">{heading}</p>
      </div>
      <div className="flex items-center gap-2 px-2 mt-4">
        <img className="w-12" src={parcentIcon} alt="icon" />
        <div>
          <h3 className="text-[#DC262A] featurefont font-semibold ">{flatHeading}</h3>
          <p className="featurefont font-semibold text-xs tracking-wider leading-5 text-[#4A4A4A]">{para}</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-2 mt-5">
        <div className="flex items-center gap-2">
          {carIcon}
          <p className="featurefont text-[#B0B2B5] text-xs font-semibold tracking-wider">{carDescription}</p>
        </div>
        {wirteArrwoIcon}
      </div>
    </div>
  );
};

export default FeatureCards;
