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
import { arimo, schnyder } from "@/app/fonts";

const DCSection = ({
  reverse = false,
  imgUrl,
  variant,
}: {
  reverse?: boolean;
  imgUrl?: string;
  variant?: string;
}) => {
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
          className={cn(
            "flex flex-col justify-center text-left px-12 md:px-24",
            {
              "order-2": reverse,
              "text-white bg-[#c9bdab]": variant === "secondary",
            }
          )}
        >
          <p
            className={cn(
              arimo.className + " uppercase font-medium text-xs mb-6"
            )}
          >
            love as big as the mountain
          </p>
          <h2 className="text-5xl mb-8">
            Unrivaled Views. Unforgetable Experience.
          </h2>
          <p className="text-sm">
            Unobstructed Grand Teton views. Utmost privacy. A Western setting
            unlike any other. At the Diamond Cross Ranch, you can dream as big
            as the mountains.
          </p>
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
            src={imgUrl || "/animated-slider/1.jpg"}
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
