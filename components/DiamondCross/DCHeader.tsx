"use client";
import React from "react";
import { schnyder } from "@/app/fonts";
import { cn } from "@nextui-org/react";
import Image from "next/image";

const DCHeader = () => {
  return (
    <div className="text-center">
      <div className="mt-[65px] mb-12">
        <h1
          className={cn(
            schnyder.className +
              " md:text-[4vw] leading-none mb-8 tracking-wider"
          )}
        >
          EXPERIENCE THE TIMELESS <br /> ROMANCE OF THE WEST
        </h1>
        <p className="uppercase">Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div className="max-w-screen-lg mx-auto relative aspect-video">
        <Image
          src="https://uploads-ssl.webflow.com/5f8848c8ce7ec916d993507c/5f8848c8ce7ec958e3935110_DiamondCross_Wedding_JacksonHole.jpg"
          fill
          className="object-cover object-center"
          alt="alt"
        />
      </div>
    </div>
  );
};

export default DCHeader;
