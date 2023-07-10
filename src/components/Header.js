import React from "react";
import Navbar from "./Navbar";
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';

const Header = () => {
  return (
    <div className="w-[80%] mx-auto flex justify-between items-center gap-2 py-4">
      <div className="flex items-center justify-center gap-5">
        <h2 className=" fontForlogo text-red-600 text-3xl">rentelo</h2>
        <TwoWheelerOutlinedIcon fontSize="large" style={{fill : "#4A4A4A"}}/>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
