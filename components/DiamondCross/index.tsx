import React from "react";
import DCHeader from "./DCHeader";
import DCNavbar from "./DCNavbar";
import DCSection from "./DCSection";
import DCSponsors from "./DCSponsors";

const DiamondCross = () => {
  return (
    <div className="bg-[#f8f7f4] text-[#877964]">
      <DCNavbar />
      <DCHeader />
      <DCSponsors />
      <DCSection imgUrl="https://uploads-ssl.webflow.com/5f8848c8ce7ec916d993507c/5f993b2f985cbd4c5f030abb_photo%201%20right%20%5Bupdated%5D.jpg" />
      <DCSection
        imgUrl="https://uploads-ssl.webflow.com/5f8848c8ce7ec916d993507c/5f993b2f985cbd4c5f030abb_photo%201%20right%20%5Bupdated%5D.jpg"
        reverse
        variant="secondary"
      />
      <div className="h-screen">footer</div>
    </div>
  );
};

export default DiamondCross;
