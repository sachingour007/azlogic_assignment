import React, { useState } from "react";

const Sidebar = () => {
  const [transmission, setTransmission] = useState();
  return (
    <div className="px-2 py-4">
      <div className="flex flex-wrap gap-2">
        <div className="border-black border px-2 rounded-md">
          25 june to 26 june
        </div>
        <div className="border-black border px-2 rounded-md">Hyderabad</div>
      </div>
      <div>
        <div>
          pickup <span>25 june 2022 11:30Am</span>
        </div>
        <div>
          Drop <span>26 june 2022 11:30 Am</span>
        </div>
        <div>
          Location <span>Hyderabad</span>
        </div>
        <div>
          <h6>Total Duration</h6>
          <h3>0d 2h 0m</h3>
        </div>
      </div>
      <div>
        <h6>Station</h6>
        <h5>Gandhi Bag. Metro Station</h5>
        <p>Gandhi Bag. Metro Station Bengalore</p>
        <div>Map</div>
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
