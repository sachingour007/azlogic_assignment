import React, {useState} from "react";
import Sidebar from "./Sidebar";
import {listCardData} from '../../constant/listCardData';
import CardComponent from "./CardComponent";
import PriceComponent from "./PriceComponent";

const List = () => {
  
  const [cardData, setCardData] = useState(listCardData);

  return (
    <div className="flex flex-col ">
      <PriceComponent/>
    <div className="w-[80%] flex mt-20 mx-auto">
      <div className="w-[25%] border mr-4">
        <Sidebar />
      </div>
      <div className="w-[75%]">
        <div className="flex flex-wrap items-center">
        {
            cardData.map((card) => {
              return (
                <CardComponent key={card.id} {...card}/>
              )
            })
          }

        </div>
          
      </div>
    </div>
    </div>
  );
};

export default List;
