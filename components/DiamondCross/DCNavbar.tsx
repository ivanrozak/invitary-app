import React from "react";

const DCNavbar = () => {
  const menus = ["ABOUT", "VENUE", "LODGING", "STORIES", "SHOP", "CONTACT"];
  const half = Math.ceil(menus.length / 2);
  const leftMenu = menus.slice(0, half);
  console;
  const rightMenu = menus.slice(half, menus.length);
  return (
    <nav className="mx-auto max-w-screen-lg h-[55px] mt-16 mb-8 flex items-center justify-center bg-blue-100">
      <div>
        {JSON.stringify(leftMenu)} {JSON.stringify(rightMenu)}
      </div>
    </nav>
  );
};

export default DCNavbar;
