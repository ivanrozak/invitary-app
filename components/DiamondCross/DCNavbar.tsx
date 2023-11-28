import { arimo } from "@/app/fonts";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const DCNavbar = () => {
  const menus = ["ABOUT", "VENUE", "LODGING", "STORIES", "SHOP", "CONTACT"];
  const half = Math.ceil(menus.length / 2);
  const leftMenu = menus.slice(0, half);
  console;
  const rightMenu = menus.slice(half, menus.length);
  return (
    <nav className="pt-16 mb-8">
      <div className="mx-auto max-w-screen-lg h-[55px] flex items-center justify-evenly text-xs">
        <div className={cn(arimo.className + " flex gap-4")}>
          {leftMenu.map((m) => (
            <div key={m}>{m}</div>
          ))}
        </div>
        <div>
          <Image
            src="https://uploads-ssl.webflow.com/5f8848c8ce7ec916d993507c/5f8848c8ce7ec954fa93510d_logotype.png"
            width={270}
            height={42}
            alt="main logo"
          />
        </div>
        <div className={cn(arimo.className + " flex gap-4")}>
          {rightMenu.map((m) => (
            <div key={m}>{m}</div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DCNavbar;
