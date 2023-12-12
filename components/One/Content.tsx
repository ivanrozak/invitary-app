"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import StaggeredTextAnimation from "../StaggeredTextAnimation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/animateVariants";
import { Input } from "@nextui-org/input";

const Content = () => {
  const imageList = ["/karenita/1.jpg", "/karenita/2.jpg", "/karenita/3.jpg"];
  return (
    <div className="">
      <div className="fixed fullscreen max-w-[calc(100vw-504px)] pointer-events-none">
        {/* <Image
          src="/karenita/0.jpg "
          fill
          className="object-cover object-center"
          alt="image"
          unoptimized
        /> */}
        <div className="absolute w-full bottom-0 p-12 bg-black/40 text-white">
          <div>The Wedding of</div>
          <div>Danny & Kareina</div>
          <div>Saturday, 30 December 2023</div>
        </div>
      </div>
      <div className="ml-auto w-[500px] h-[100svh] snap-parent text-white">
        <div className="snap-child relative">
          {/* <Fade duration={2000} arrows={false}>
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
          </Fade> */}
          <div className="absolute w-full h-full p-12 text-center">
            <StaggeredTextAnimation>
              <motion.div
                className="text-xl"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                The Wedding of
              </motion.div>
              <motion.div
                className="text-2xl"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                Danny & Kareina
              </motion.div>
              <motion.div
                className="text-xl"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                Saturday, 30 December 2023
              </motion.div>
            </StaggeredTextAnimation>
          </div>
        </div>
        <div className="snap-child relative">
          <div className="absolute w-full bottom-0 p-12">
            <StaggeredTextAnimation>
              <motion.div
                className="text-xl"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                The Groom
              </motion.div>
              <motion.div
                className="text-2xl"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                Liong Danny W
              </motion.div>
              <motion.div
                className="text-xl"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                THE SON OF
              </motion.div>
            </StaggeredTextAnimation>
          </div>
        </div>
        <div className="snap-child relative">
          <div className="bg-black/40 fullscreen p-12">
            <div>Comment</div>
            <Input
              label="Name"
              color="warning"
              variant="underlined"
              classNames={{
                label: "!text-white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
