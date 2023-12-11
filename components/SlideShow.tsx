"use client";
import useIsMount from "@/hooks/useIsMount";
import { Button } from "@nextui-org/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShow = () => {
  const imageList = [
    "/animated-slider/1.png",
    "/animated-slider/2.png",
    "/animated-slider/3.png",
    "/animated-slider/4.png",
    "/animated-slider/5.png",
    "/animated-slider/6.png",
  ];

  const isMounted = useIsMount();

  const handleFullscreenToggle = () => {
    const elem = document.documentElement; // Fullscreen the entire document

    if (document.fullscreenElement) {
      // If already in fullscreen, exit fullscreen
      document.exitFullscreen();
    } else {
      // If not in fullscreen, request fullscreen
      elem.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    }
  };

  return (
    // <AnimatePresence mode="wait">
    //   <motion.div
    //     key={currIndex}
    //     className="w-screen h-[100svh] relative"
    //     initial={{ opacity: 0.5 }}
    //     transition={{ duration: 0.5 }}
    //     animate={{ opacity: 1, transition: { duration: 0.5 } }}
    //     exit={{ opacity: 0.5 }}
    //   >
    //     <Image src={imageList[currIndex]} fill alt="image alt" />
    //   </motion.div>

    //   <div>Im okay im fine gwenchana</div>
    // </AnimatePresence>
    <>
      <Fade duration={2000} arrows={false}>
        {imageList.map((source, i) => (
          <div key={i} className="relative w-full h-[100svh]">
            <Image
              src={source}
              fill
              className="object-cover object-center"
              alt="oke"
              unoptimized
            />
          </div>
        ))}
      </Fade>
      <Button onClick={handleFullscreenToggle}>
        {isMounted && document.fullscreenElement
          ? "Exit Fullscreen"
          : "Enter Fullscreen"}
      </Button>
    </>
  );
};

export default SlideShow;
