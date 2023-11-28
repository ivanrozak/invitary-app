import dynamic from "next/dynamic";
import React from "react";
import WelcomeScreen from "./WelcomeScreen";
const Intro = dynamic(() => import("./Intro"), {
  loading: () => <WelcomeScreen />,
});

const Portfolio = () => {
  return (
    <div>
      <Intro />
    </div>
  );
};

export default Portfolio;
