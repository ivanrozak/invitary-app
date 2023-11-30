"use client";
import React from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import Image from "next/image";
import Container from "../Container";

const Intro = () => {
  return (
    <Container>
      <AnimatePresence>
        <m.div
          className="w-64 h-64 overflow-hidden relative"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ ease: "easeIn", duration: 2 }}
        >
          <Image
            src="/animated-slider/1.png"
            className="w-fit h-full object-cover object-center"
            fill
            alt="asd"
          />
        </m.div>
      </AnimatePresence>
    </Container>
  );
};

export default Intro;
