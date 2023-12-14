"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import useIsMount from "@/hooks/useIsMount";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import StaggeredTextAnimation from "@/components/StaggeredTextAnimation";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/animateVariants";

const Opener = ({ setShown }: { setShown: (args: boolean) => void }) => {
  return (
    <motion.div
      key="opener"
      exit={{ y: "-100%", transition: { duration: 0.5 } }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="h-screen w-full fixed text-white z-10"
    >
      <div className="w-full h-full relative bg-black">
        <Image
          src="https://groovepublic.com/wp-content/uploads/2023/10/karenita-sandmix-catalog2.jpg"
          alt="image"
          fill
          className="object-cover object-center"
        />
        <div className="absolute z-10 w-full h-full bg-black/40 px-8 pt-[15vh] pb-[20vh] text-center flex flex-col justify-between">
          <div>
            <p>Wedding Invitation</p>
            <p>Danny & Karen</p>
            <p>SATURDAY, 30 DECEMBER 2023</p>
          </div>
          <div>
            <p>Dear,</p>
            <p>Nama Tamu</p>
            <p className="text-[10px] font-light">
              We apologize if there is any misspelling of name or title
            </p>
            <Button onClick={() => setShown(false)}>OPEN INVITATION</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FirstPage = () => {
  const imageList = ["/karenita/1.jpg", "/karenita/2.jpg", "/karenita/3.jpg"];
  return (
    <div className="snap-child relative">
      <Fade duration={4000} arrows={false}>
        {imageList.map((source, i) => (
          <div key={i} className="w-full h-screen">
            <Image
              src={source}
              fill
              className="object-cover object-center"
              alt="oke"
              unoptimized
            />
          </div>
        ))}
      </Fade>
      <div className="absolute w-full h-screen top-0 z-[2] bg-black/40 text-white p-8 text-center">
        <p>The Wedding of</p>
        <p>Danny & Karen</p>
        <p>30 December 2023</p>
      </div>
    </div>
  );
};

const Groom = () => {
  return (
    <div className="snap-child relative">
      <Image
        src="https://groovepublic.com/wp-content/uploads/2023/10/karenita-sandmix-catalog14.jpg"
        fill
        className="object-cover object-center"
        unoptimized
        alt="image"
      />
      <div className="absolute bottom-0 text-white w-full p-8">
        <StaggeredTextAnimation>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>The Groom</motion.p>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>Liong Danny</motion.p>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>Agus W</motion.p>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>THE SON OF</motion.p>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, eos.
          </motion.p>
        </StaggeredTextAnimation>
      </div>
    </div>
  );
};

const TemplateTwo = () => {
  const [isShown, setShown] = useState(true);
  const isMount = useIsMount();
  return (
    <>
      {isMount ? (
        <>
          <AnimatePresence>
            {isShown && <Opener setShown={setShown} />}
          </AnimatePresence>
          <AnimatePresence>
            {!isShown && (
              <div
                className={cn("snap-parent", {
                  "overflow-y-hidden h-screen": isShown,
                })}
              >
                <FirstPage />
                <Groom />
                <Groom />
              </div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="h-screen w-full bg-black flex justify-center items-center text-white">
          INVITARY
        </div>
      )}
    </>
  );
};

export default TemplateTwo;
