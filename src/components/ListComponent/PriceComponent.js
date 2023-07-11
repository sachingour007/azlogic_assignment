import React from "react";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const PriceComponent = () => {
  return (
    <div className="flex items-end w-[80%] justify-end mx-auto relative top-16 gap-11">
      <h2 className="text-[#767676] font-medium">
        Bike Rental in <b>Bangalore</b>
      </h2>
      <div className="flex items-center justify-center gap-3 text-[#363636]">
        <ToggleOffOutlinedIcon style={{ color: "gray" }} />
        <h2>
          Prices exclude fuel cost{" "}
          <span>
            <InfoOutlinedIcon style={{ color: "#4CC19C", fontSize: "large" }} />
          </span>
        </h2>
      </div>
      <h3 className="text-[#767676] text-sm font-medium tracking-wider">
        Sort by:
      </h3>
      <div className="flex items-center justify-center">
        <h3 className="text-[#292929] font-medium">Popularity</h3>
        <KeyboardArrowDownOutlinedIcon style={{ color: "#4CC19C" }} />
      </div>
    </div>
  );
};

export default PriceComponent;
