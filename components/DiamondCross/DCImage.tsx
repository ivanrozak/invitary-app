"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

const DCImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  return (
    <div ref={ref} className="h-[60svh] w-full overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        style={{ scaleX: scrollYProgress }}
      >
        <Image
          src="/animated-slider/2.jpg"
          fill
          className="object-cover object-center"
          alt="alt"
        />
      </motion.div>
    </div>
  );
};

export default DCImage;
