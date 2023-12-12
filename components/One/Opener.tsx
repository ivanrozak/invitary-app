"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

const Opener = () => {
  return (
    <div className="w-full h-[100svh] relative overflow-hidden">
      <Image
        src="https://groovepublic.com/wp-content/uploads/2023/10/karenita-sandmix-catalog2.jpg"
        fill
        className="object-cover object-center"
        alt="image"
        unoptimized
      />
      <div className="absolute w-full h-full bg-black/40 flex flex-col justify-between py-36 items-center text-white text-center">
        <div>
          <p>Wedding Invitation</p>
          <p>Danny & Karenita</p>
          <p>Saturday, 31 December 2023</p>
        </div>
        <div>
          <p>Dear,</p>
          <p>Asep Hermawan</p>
          <p>We apologize if there is any misspelling of name or title</p>
          <Button>OPEN INVITATION</Button>
        </div>
      </div>
    </div>
  );
};

export default Opener;
