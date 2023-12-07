"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { canela } from "@/app/fonts";

const MMReactScroll = () => {
  const variants = {
    blurred: { filter: "blur(4px)" },
    notBlurred: { filter: "blur(0px)" },
  };
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  const page2Ref = useRef(null);
  const isInView = useInView(page2Ref, { once: false });
  return (
    <ParallaxProvider>
      <div className="h-[100vh] relative">
        <div className="w-full h-full relative">
          <motion.div
            initial="blurred"
            animate="notBlurred"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="w-[85vw] h-auto aspect-[500/213] absolute bottom-[20svh] right-0"
          >
            <Image
              src="/marry-monday/0.png"
              className="w-full"
              width={946}
              height={403}
              alt="alt"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          className="absolute top-0 w-full h-full flex flex-col items-center justify-center"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
              },
            },
          }}
        >
          <Parallax translateY={[70, -20]}>
            <motion.h1
              className={canela.className + " text-8xl"}
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Marry
            </motion.h1>
            <motion.h1
              className={canela.className + " text-8xl"}
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Monday
            </motion.h1>
          </Parallax>
        </motion.div>
      </div>
      <div className="h-[100svh] relative">
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="absolute top-0 w-full h-full flex flex-col items-center justify-center"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
              },
            },
          }}
        >
          <Parallax translateY={[70, -20]}>
            <motion.h1
              ref={page2Ref}
              className={canela.className + " text-8xl"}
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Marry
            </motion.h1>
            <motion.h1
              className={canela.className + " text-8xl"}
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Monday
            </motion.h1>
          </Parallax>
        </motion.div>
      </div>
    </ParallaxProvider>
  );
};

export default MMReactScroll;
