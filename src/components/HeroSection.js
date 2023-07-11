import React, { useState } from "react";
import SelectDecorators from "./HeroSelectState";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FeaturedOffer from "./FeaturedOffer";
import FAQAcordian from "./FAQAcordian";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const hoverHandler = () => {
    setIsHover(true);
  };

  const hoverLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <div className="flex justify-between ml-auto items-center w-[90%]">
        <div className="flex flex-col w-[32%] min-h-[400px]">
          <div className="leftsideDiv">
            <h3 className="text-4xl leading-[50px] text-[#414141] font-[300] ">
              Own the <b>exprience,</b>
            </h3>
            <h3 className="text-4xl leading-[50px] text-[#414141] font-light ">
              not the ride
            </h3>
            <p className="leading-[50px] tracking-wide text-[#787777]">
              Rent vehicles from people around you
            </p>
          </div>
          <div className="flex flex-col shadow-lg border-[#e2e2e2] border p-2 bg-white rounded-lg mt-8">
            <div>
              <SelectDecorators />
            </div>
            <div className="border-[#e2e2e2] border my-2"></div>
            <div className="mt-3 p-2 flex justify-start gap-14 items-center text-sm text-[#979696]">
              <div className="flex items-center">
                <CalendarMonthOutlinedIcon style={{ fontSize: "large" }} />
                <span className="ml-2">Start Time</span>
              </div>
              <div className="flex items-center">
                <CalendarMonthOutlinedIcon style={{ fontSize: "large" }} />
                <span className="ml-2">End Time</span>
              </div>
            </div>
          </div>
          {isHover ? (
            <button
              className="border-red-500 border mt-6 py-2 rounded-3xl text-white font-bold font-sans bg-gradient-to-r from-[rgb(222,38,48)] to-[rgb(244,12,89)] "
              onClick={() => navigate("/heroSection/list")}
              onMouseEnter={hoverHandler}
              onMouseLeave={hoverLeave}
            >
              <SearchIcon style={{fontSize: "large"}}/>
            </button>
          ) : (
            <button
              className="border-red-500 border mt-6 py-2 rounded-3xl text-white font-bold font-sans bg-gradient-to-r from-[rgb(222,38,48)] to-[rgb(244,12,89)]"
              onClick={() => navigate("/heroSection/list")}
              onMouseEnter={hoverHandler}
              onMouseLeave={hoverLeave}
            >
              Search
            </button>
          )}
        </div>
        <div className="relative w-[65%] h-[600px] overflow-hidden">
          <div className=" HeroImg relative w-full h-[450px] left-14 top-7 overflow-hidden">
            <img
              className=""
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=700&h=-1&s=1"
              alt=""
            />
          </div>
        </div>
      </div>
      <FeaturedOffer />
      <FAQAcordian />
    </>
  );
};

export default HeroSection;
