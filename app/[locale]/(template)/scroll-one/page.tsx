"use client";
import Image from "next/image";
import React from "react";

const ScrollOne = () => {
  const imageList = [
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/7-yglleF64s.jpg",
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/12-vK_p2G7zf.jpg",
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/5-_MdxQNLha.jpg",
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/2-pA1V86N_W.jpg",
    "https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/10-kcJWT8qiY.jpg",
    "https://alexandra.bridestory.com/images/dpr_1.0,f_auto,fl_progressive,q_80,c_fill,g_faces,w_1200/blogs/11--0lgyiGwt/pemotretan-pre-wedding-berlatar-alam-bali-yang-menenangkan-1.jpg",
  ];
  return (
    <>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <div className="bg-purple-200 snap-center snap-always h-screen relative">
          <Image
            src={imageList[4]}
            fill
            alt="image"
            className="object-cover object-center"
            unoptimized
          />
        </div>
        <div className="bg-green-100 snap-center snap-always h-screen bg-center bg-cover bg-[url('https://london.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,w_1200,c_fill,g_faces/v1/blogs/7-yglleF64s.jpg')]">
          Section
        </div>
        <div className="bg-blue-300 snap-center snap-always h-screen">
          Section
        </div>
      </div>
    </>
  );
};

export default ScrollOne;
