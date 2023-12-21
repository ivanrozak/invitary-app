"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const StaggeredTextAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // variants: fade-down & up, word pull up, scroll based velocity, separate away
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      exit={isInView ? "hidden" : "show"}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="text-white">view: {JSON.stringify(isInView)}</div>
      {children}
    </motion.div>
  );
};

export default StaggeredTextAnimation;
