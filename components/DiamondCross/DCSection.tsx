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
import { cn } from "@nextui-org/react";

const DCSection = ({ reverse = false }) => {
  const ref = useRef(null);
  const [y, setY] = useState<any>(1.3);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setY(latest * 0.3 + 1);
  });
  return (
    <AnimatePresence>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          className={cn("flex flex-col items-center justify-center", {
            "order-2": reverse,
          })}
        >
          <p>Title</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </motion.div>
        <motion.div
          className={cn(
            "relative w-full overflow-hidden h-[60svh] md:h-[100svh]",
            {
              "order-1": reverse,
            }
          )}
        >
          <Image
            src="/animated-slider/1.png"
            fill
            className="object-cover object-bottom"
            style={{ scale: y }}
            alt="default-alt"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DCSection;
