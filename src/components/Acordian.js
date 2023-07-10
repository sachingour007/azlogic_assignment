import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Acordian = ({ question, description }) => {
  const [show, setShow] = useState(false);

  return (
    <article>
      <header className="featurefont text-xl flex justify-between items-center my-10 px-5 h-20 rounded-lg font-semibold bg-white shadow-lg">
        <h2>{question}</h2>
        <button onClick={() => setShow(!show)}>
          {show ? (
            <ExpandLessIcon style={{ fontSize: "40px" }} />
          ) : (
            <KeyboardArrowDownIcon style={{ fontSize: "40px" }} />
          )}
        </button>
      </header>
      {show ? (
        <p className="bg-white shadow-lg py-5 px-5 rounded-lg -mt-11 text-[#6C6C6C]">
          {description}
        </p>
      ) : null}
    </article>
  );
};

export default Acordian;
