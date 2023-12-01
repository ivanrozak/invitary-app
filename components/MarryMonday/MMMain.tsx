"use client";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React, { useRef } from "react";

const MMMain = () => {
  const parallax = useRef<IParallax>(null!);
  return (
    <Parallax ref={parallax} pages={6} className="bg-[inherit]">
      <ParallaxLayer offset={0} factor={1}>
        <div className="w-full h-full relative">
          <Image
            src="/marry-monday/0.png"
            className="w-[83vw] h-auto aspect-[500/213] absolute bottom-[23svh] right-0"
            width={946}
            height={403}
            alt="alt"
          />
          <div className="absolute w-full h-full flex items-center justify-center">
            <h1 className="text-7xl font-semibold">
              Marry
              <br />
              Monday.
            </h1>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.5} speed={0.3}>
        <div className="w-16 h-16 bg-primary">Pop</div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.5} speed={0}>
        <div className="w-16 h-16 ml-32 bg-primary-200">Pop</div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default MMMain;
