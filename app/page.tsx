import WellcomeScreen from "@/components/DiamondCross/DCWellcomeScreen";
import dynamic from "next/dynamic";
import React from "react";
const DiamondCross = dynamic(() => import("@/components/DiamondCross"), {
  loading: () => <WellcomeScreen />,
});

const Home = () => {
  return (
    <>
      <DiamondCross />
    </>
  );
};

export default Home;
