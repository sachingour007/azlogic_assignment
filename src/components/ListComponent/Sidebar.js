import React, { useState, useMemo } from "react";
import "./sidebar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Sidebar = () => {
  const [transmission, setTransmission] = useState(true);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyApWXbxXd3OmTa2EeVqwLfV8ylGD_XrUg0",
  });

  const ButtonOneHandler = () => {
    setTransmission(true);
  };
  const ButtonTwoHandler = () => {
    setTransmission(false);
  };
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="root px-2 py-4 bg-white">
      <div
        className="flex flex-wrap"
        style={{ borderBottom: "1px solid #e0dbdb", paddingBottom: "6px" }}
      >
        <div className="tag">25 june to 26 june</div>
        <div className="tag">Hyderabad</div>
      </div>
      <div className="meta-box">
        <div className="meta-box-item">
          <div className="icon mr-2.5">
            <CalendarMonthIcon sx={{ fontSize: 14 }} />
          </div>
          <h4 style={{ fontWeight: 600 }}>Pickup</h4>{" "}
          <span style={{ color: "#dc262a", marginLeft: "6px" }}>
            25 june 2022 11:30AM
          </span>
        </div>
        <div className="meta-box-item">
          <div className="icon mr-2.5">
            <CalendarMonthIcon sx={{ fontSize: 14 }} />
          </div>
          <h4 style={{ fontWeight: 600 }}>Drop</h4>{" "}
          <span style={{ color: "#dc262a", marginLeft: "6px" }}>
            26 june 2022 11:30AM
          </span>
        </div>
        <div className="meta-box-item">
          <div className="icon mr-2.5">
            <LocationOnIcon sx={{ fontSize: 14 }} />
          </div>
          <h4 style={{ fontWeight: 600 }}>Location</h4>{" "}
          <span style={{ color: "#dc262a", marginLeft: "6px" }}>Hyderabad</span>
        </div>
        <div
          className="flex flex-col justify-center items-center mt-5 py-3"
          style={{ background: "#e5e5e5" }}
        >
          <h6 className="text-[#737373] text-xs ">Total Duration</h6>
          <h3 className="text-xs font-semibold text-[#4e4c4c] tracking-widest">
            0d 2h 0m
          </h3>
        </div>
      </div>
      <div className=" ">
        <div className="inline-block mb-3">
          <h6 className="text-xs text-[#b5b4b4] font-semibold">Station</h6>
          <div className="borderClass"></div>
        </div>

        <h5 className="text-sm text-[#4e4c4c] font-medium">
          Gandhi Bag. Metro Station
        </h5>
        <p className="text-xs py-1 mb-1 font-medium text-[#b5b4b4]">
          Gandhi Bag, Metro Station Bengalore
        </p>

        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            {" "}
            <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
          </GoogleMap>
        )}
      </div>
      <div className="borderBottom"></div>

      <div className="">
        <h4 className="text-sm text-[#3c3c3c] font-semibold tracking-wider">
          Tranmission type
        </h4>
        <div className="flex items-center justify-around w-[65%] rounded-lg border-gray-500 border my-4">
          <div
            onClick={ButtonOneHandler}
            className={
              transmission
                ? "bg-gray-500 py-3 px-2 mx-[2px] rounded-lg cursor-pointer text-white font-medium "
                : "text-[#3c3c3c] pl-2 cursor-pointer text-sm font-medium"
            }
          >
            Geared
          </div>
          <div className="border-l-2 border mx-[5px] h-8"></div>
          <div
            onClick={ButtonTwoHandler}
            className={
              transmission
                ? "text-[#3c3c3c] pr-2 text-sm font-medium cursor-pointer"
                : "bg-gray-500 py-3 px-1 mx-[2px] rounded-lg text-white font-medium cursor-pointer "
            }
          >
            Gearless
          </div>
        </div>
      </div>

      <div className="borderBottom"></div>

      <div className="flex flex-col gap-3 mt-6">
        <h2 className="text-sm text-[#3c3c3c] font-semibold tracking-wider ">
          Search By Brands
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex gap-3 text-sm text-[#3c3c3c] font-medium">
            <input className="border-black -border" type="checkbox" name="" />{" "}
            Yamaha
          </div>
          <div className="flex gap-3 text-sm text-[#3c3c3c] font-medium">
            <input className="border-black -border" type="checkbox" name="" />{" "}
            Honda
          </div>
          <div className="flex gap-3 text-sm text-[#3c3c3c] font-medium">
            <input className="border-black -border" type="checkbox" name="" />{" "}
            Hero
          </div>
        </div>
      </div>

      <div className="borderBottom"></div>

      <div className="mt-7">
        <p className="text-[11px] px-1 text-[#727070] font-medium">
          * Minimum booking should be for 24 hours
        </p>

        <button className="w-full border text-center my-5 py-2 text-white bg-gradient-to-b from-[rgb(222,38,48)] to-[rgb(244,12,89)] rounded-lg">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
