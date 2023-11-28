import React from "react";
import DCHeader from "./DCHeader";
import DCNavbar from "./DCNavbar";
import DCSection from "./DCSection";
import DCImage from "./DCImage";

const DiamondCross = () => {
  return (
    <div>
      <DCNavbar />
      <DCHeader />
      <DCSection />
      <DCImage />
      <DCImage />
      <DCSection />
      <div className="h-screen">footer</div>
    </div>
  );
};

export default DiamondCross;
