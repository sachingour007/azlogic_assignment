import React from "react";
import Sidebar from "./Sidebar";

const List = () => {
  return (
    <div className="w-[80%] flex border-black border mx-auto gap-">
      <div className="w-[30%] border-red-500 border mr-4">
        <Sidebar />
      </div>
      <div className="">flex 2</div>
    </div>
  );
};

export default List;
