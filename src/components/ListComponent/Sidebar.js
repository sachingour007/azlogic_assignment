import React, { useState, useMemo } from "react";
import "./sidebar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
const Sidebar = () => {
  const [transmission, setTransmission] = useState();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyApWXbxXd3OmTa2EeVqwLfV8ylGD_XrUg0",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <div className="root px-2 py-4">
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
        <div style={{ background: "#e5e5e5" }}>
          <h6>Total Duration</h6>
          <h3>0d 2h 0m</h3>
        </div>
      </div>
      <div>
        <h6>Station</h6>
        <h5>Gandhi Bag. Metro Station</h5>
        <p>Gandhi Bag. Metro Station Bengalore</p>
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
      <div>
        <h4>Tranmission type</h4>
        <div className="flex">
          <div>Geared</div>
          <div>Gearless</div>
        </div>
      </div>
      <div>
        Engine Capacity(CC)
        <div>
          <select name="" id="">
            <option value="">100</option>
          </select>
          and above
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Search By Brands</label>
        <div className="flex flex-col">
          <div>
            <input type="checkbox" /> Yamaha
          </div>
          <div>
            <input type="checkbox" /> Honda{" "}
          </div>
          <div>
            <input type="checkbox" /> Hero
          </div>
        </div>
      </div>
      <div>
        <p>* Minimum booking should be for 24 hours</p>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Sidebar;
