import CardStyled from "@/components/Home/CardStyled";
import { BrandLogo } from "@/components/icons";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="-mt-[4rem] w-full bg-[url('/static/bg_pattern.svg')] bg-cover bg-center-top bg-no-repeat pt-32 pb-16 text-landingPrimary px-4 sm:px-0">
        <div className="bg-[#FFF3C1] rounded-full w-16 h-16 flex items-center justify-center mx-auto">
          <BrandLogo />
        </div>
        <div className="text-center flex flex-col justify-center items-center mt-8 relative">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 font-bold relative">
            Sparkling Smiles, Spreading
            <div className="absolute left-[-205px] top-5">
              <Image
                src="/static/figure1.png"
                width={350}
                height={334}
                className="hidden md:block md:scale-85 lg:scale-100"
                alt="figure1"
              />
            </div>
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 font-bold z-10 relative">
            Love. Invitary, Your Digital
            <div className="absolute right-[-140px] top-2">
              <Image
                src="/static/figure2.png"
                width={243}
                height={243}
                className="hidden md:block md:scale-85 lg:scale-100"
                alt="figure1"
              />
            </div>
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 font-bold z-20">
            Invitation Wonderland
          </h1>
          <p className="mt-6 text-base sm:text-lg font-light">
            “A dream you dream alone is only a dream. A dream{" "}
            <br className="hidden sm:block" /> you dream together is reality.” -{" "}
            <b className="font-semibold">John Lennon</b>
          </p>

          <Button className="bg-landingPrimary text-white mt-16" radius="sm">
            Start Crafting With Us!
          </Button>
        </div>
      </div>
      <div className="max-w-7xl mx-4 sm:mx-auto bg-[#FFFAE8] p-4 sm:p-12 rounded-2xl">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs sm:text-base font-semibold text-landingPrimary">
              Our Templates
            </p>
            <h2 className="font-semibold text-lg sm:text-4xl mt-2 sm:mt-3">
              Latest Templates
            </h2>
            <p className="text-sm sm:text-xl text-[#475467] mt-1 sm:mt-2">
              Discover Timeless Elegance: Explore Our Newest Wedding Invitation
              Templates!
            </p>
          </div>
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            className="text-landingPrimary border-landingPrimary hidden sm:block"
          >
            View all templates
          </Button>
        </div>
      </div>
      <div className="max-w-7xl mx-4 sm:mx-auto mt-6 grid grid-cols-1 sm:grid-cols-4 gap-6">
        <CardStyled />
        <CardStyled />
        <CardStyled />
        <CardStyled />
      </div>
    </>
  );
};

export default HomePage;
