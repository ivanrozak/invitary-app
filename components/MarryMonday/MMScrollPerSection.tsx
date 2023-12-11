"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const MMScrollPerSection = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY || window.pageYOffset;

      // Determine the current section based on the scroll position
      const newSection = Math.floor(scrollY / window.innerHeight);

      // Update the current section state
      setCurrentSection(newSection);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update animation controls based on the current section
  useEffect(() => {
    controls.start({ y: -currentSection * 100 + "vh" });
    console.log("ini jalan ya", currentSection, controls);
  }, [currentSection, controls]);

  return (
    <div style={{ height: "300vh", position: "relative" }}>
      <motion.div
        animate={controls}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "lightblue",
          position: "absolute",
        }}
      >
        <h1>Section 1</h1>
      </motion.div>

      <motion.div
        animate={controls}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "lightcoral",
          position: "absolute",
        }}
      >
        <h1>Section 2</h1>
      </motion.div>

      <motion.div
        animate={controls}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "lightgreen",
          position: "absolute",
        }}
      >
        <h1>Section 3</h1>
      </motion.div>
    </div>
  );
};

export default MMScrollPerSection;
