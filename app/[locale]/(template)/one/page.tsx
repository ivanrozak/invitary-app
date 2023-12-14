"use client";
import React, { useEffect, useState } from "react";
import { motion, scroll } from "framer-motion";
import useIsMount from "@/hooks/useIsMount";

const PageOne = () => {
  return (
    <div className="fullscreen p-8 flex justify-center items-center">
      <div className="overflow-hidden">
        <motion.div
          className="text-3xl font-bold"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          exit={{}}
          transition={{ type: "spring", duration: 0.5 }}
        >
          Hello World!
        </motion.div>
      </div>
    </div>
  );
};

const PageTwo = () => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const page2 = document.getElementById("page2") as HTMLElement;
    scroll(
      (progress) => {
        console.log("progress: ", progress, page2);
        setPosition(progress);
      },
      { source: page2, axis: "y" }
    );
  }, []);
  return (
    <div id="page2" className="h-[200svh] p-8 flex items-center justify-center">
      <div>Page 2 {position}</div>
    </div>
  );
};

const TemplateOne = () => {
  return (
    <div>
      <PageOne />
      <PageTwo />
      <PageOne />
    </div>
  );
};

export default TemplateOne;
