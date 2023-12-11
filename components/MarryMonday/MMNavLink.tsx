import React from "react";

const MMNavLink = () => {
  return (
    <div className="fixed w-full h-[100svh] p-8 z-10 pointer-events-none">
      <div className="relative h-full">
        <div className="text-xs flex flex-col absolute left-0 top-0 items-center">
          <span>A</span>
          <span>/</span>
          <span>G</span>
        </div>
        <div className="text-xs flex flex-col absolute right-0 top-0 items-center">
          <span>10</span>
          <span>/</span>
          <span>14</span>
        </div>
        <div className="absolute left-0 bottom-0 flex gap-6 -rotate-90 origin-[0_0]">
          <div className="text-xs">HOMEWOOD, CA</div>
          <div className="text-xs">HOMEWOOD, CA</div>
          <div className="text-xs">HOMEWOOD, CA</div>
        </div>
      </div>
    </div>
  );
};

export default MMNavLink;
