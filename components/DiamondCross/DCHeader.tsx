"use client";
import React from "react";
import { motion } from "framer-motion";
import { schnyder } from "@/app/fonts";
import { cn } from "@nextui-org/react";
import Image from "next/image";

const DCHeader = () => {
  return (
    <div className="text-center">
      <h1 className={cn(schnyder.className + " text-[51px] mb-8")}>
        EXPERIENCE THE TIMELESS <br /> ROMANCE OF THE WEST
      </h1>
      <p className="mb-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
        soluta.
      </p>
      <div className="max-w-[972px] mx-auto relative aspect-video">
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
