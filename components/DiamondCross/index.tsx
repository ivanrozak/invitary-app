import React from "react";
import DCHeader from "./DCHeader";
import DCNavbar from "./DCNavbar";
import DCSection from "./DCSection";
import DCImage from "./DCImage";
import DCSponsors from "./DCSponsors";

const DiamondCross = () => {
  return (
    <div className="bg-[#f8f7f4] text-[#877964]">
      <DCNavbar />
      <DCHeader />
      <DCSponsors />
      <DCSection reverse />
      <DCImage />
      <DCImage />
      <DCSection />
      <div className="h-screen">footer</div>
    </div>
  );
};

export default DiamondCross;
