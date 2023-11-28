"use client";
import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import Image from "next/image";

const DCSection = () => {
  const ref = useRef(null);
  const [y, setY] = useState<any>(1.3);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setY(latest * 0.3 + 1);
  });
  return (
    <AnimatePresence>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 h-[60svh]">
        <motion.div className="flex flex-col items-center justify-center">
          <p>Title</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </motion.div>
        <motion.div className="relative w-full h-full overflow-hidden">
          <Image
            src="/animated-slider/1.png"
            fill
            className="object-cover object-center"
            style={{ scale: y }}
            alt="default-alt"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DCSection;
