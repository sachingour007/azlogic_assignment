import React from "react";

const CardComponent = ({
  image,
  heading,
  price,
  descripition,
  pick,
  isAvailable,
  bookButton,
  tag,
}) => {
  return (
    <div className="border-gray-200 rounded-lg border w-[32%] bg-white mr-2 pt-3 mb-5">
      <div className="relative">
        <img className="h-[200px] p-5" src={image} alt="bike" />
        <span className="absolute top-0 right-0 bg-[#202020] text-[#d4d4d4] text-xs py-1 px-2 rounded-l-md">{tag}</span>
      </div>
      <div className="flex flex-col items-center gap-2 mb-3">
        <h2 className="text-[#272727] text-sm font-medium tracking-wider">
          {heading}
        </h2>
        <h5 className="text-red-500 text-xs font-medium">{price}</h5>
        <p className="text-[10px] text-[#b3b3b3]">{descripition}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[10px] font-medium">{pick}</p>
        <h4 className="text-[11px] text-[#57C5A3] font-medium">
          {isAvailable}
        </h4>
      </div>
      <button className="text-center border w-full py-2 mt-3 bg-gradient-to-b from-[rgb(222,38,48)] to-[rgb(244,12,89)] rounded-b-lg text-white text-sm font-medium tracking-wider">
        {bookButton}
      </button>
    </div>
  );
};

export default CardComponent;
