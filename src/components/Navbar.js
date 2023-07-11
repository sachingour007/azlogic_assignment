import React from "react";
import { NavLink } from "react-router-dom";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-11 ">
        <NavLink to={"/"}>
          <li className="fontForLi text-sm text-[#4A4A4A] font-sans hover:text-[rgb(222,38,48)]">
            Home
          </li>
        </NavLink>
        <li className="fontForLi text-sm text-[#4A4A4A] font-sans hover:text-[rgb(222,38,48)]">
          FAQ
        </li>
        <li className="fontForLi text-sm text-[#4A4A4A] font-sans hover:text-[rgb(222,38,48)]">
          Support
        </li>
        <li className="fontForLi text-sm text-[#4A4A4A] font-sans px-2 py-2 rounded-lg hover:text-white  hover:bg-gradient-to-r from-[rgb(222,38,48)] to-[rgb(244,12,89)]">
          <button>
            {" "}
            {/* <span>
              <ExitToAppIcon
                style={{ color: "#4A4A4A", fontSize: "medium" }}
                sx={{
                  ":hover": {
                    color: "white",
                  },
                }}
              />
            </span> */}
            Login Or Signup
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
