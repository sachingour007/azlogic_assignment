import React, { useState } from "react";
import { data } from "../constant/acordianData";
import Acordian from "./Acordian";

const FAQAcordian = () => {
  const [acordianData, setAcordianData] = useState(data);

  return (
    <main className="bg-[#F9F9F9] mb-10">
      <div className="w-[80%] mx-auto pt-10 pb-10">
        <h2 className="text-3xl featurefont font-semibold ">FAQs</h2>
        <section>
          {acordianData.map((data) => {
            return <Acordian key={data.id} {...data} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default FAQAcordian;
