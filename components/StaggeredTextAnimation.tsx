"use client";
import React from "react";
import { motion } from "framer-motion";

const StaggeredTextAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // variants: fade-down & up, word pull up, scroll based velocity, separate away
  return (
    <motion.div
      initial="hidden"
      animate="show"
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
      {children}
    </motion.div>
  );
};

export default StaggeredTextAnimation;
