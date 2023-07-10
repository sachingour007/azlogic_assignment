import React, { useState } from "react";
import FeatureCards from "./FeatureCards";
import Carousel from "react-material-ui-carousel";
import { featureCard } from "../constant/featureCard.js";

const FeaturedOffer = () => {
  const [featureCardData, setFeatureCardData] = useState(featureCard);
  return (
    <div className="  relative  h-[400px] bg-[#F9F9F9] mt-10">
      <h2 className="text-center text-[#262626] text-4xl m-3 p-4 font-semibold font-sans">
        Featured Offer
      </h2>
      <Carousel>
        <div className="featureMainDiv flex items-center justify-center">
          {featureCardData.map((card) => {
            return <FeatureCards key={card.id} {...card} />;
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedOffer;
