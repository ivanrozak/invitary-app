import { Image } from "@nextui-org/image";
import React from "react";

const FirstPage = () => {
  return (
    <div className="overflow-hidden relative w-full h-screen">
      <div className="AppBg bg-blue-50">
        <div>
          <img
            src="https://steiner0720.github.io/steina/public/static/assets/homeBg/bg.png"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://steiner0720.github.io/steina/public/static/assets/homeBg/treeA.png"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://steiner0720.github.io/steina/public/static/assets/homeBg/treeB.png"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://steiner0720.github.io/steina/public/static/assets/homeBg/treeC.png"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://steiner0720.github.io/steina/public/static/assets/homeBg/treeD.png"
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div className="z-1">
          <img
            src="https://steiner0720.github.io/steina/public/static/assets/homeBg/treeMain.png"
            className="img1"
            alt=""
          />
        </div>
        <div className="z-1">
          <img
            src="https://steiner0720.github.io/steina/public/static/assets/homeBg/static.png"
            className="img1 bouncing2"
            alt=""
          />
        </div>
        <div className="z-1">
          <img
            src="https://steiner0720.github.io/steina/public/static/assets/homeBg/gress.png"
            className="img1 bouncing"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
