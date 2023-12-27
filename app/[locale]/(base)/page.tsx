import CardTemplate from "@/components/Home/CardTemplate";
import { BrandLogo } from "@/components/icons";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="-mt-[4rem] w-full bg-[url('/static/bg_pattern.svg')] bg-cover bg-center-top bg-no-repeat pt-32 pb-16 text-landingPrimary">
        <div className="bg-[#FFF3C1] rounded-full w-16 h-16 flex items-center justify-center mx-auto">
          <BrandLogo />
        </div>
        <div className="text-center flex flex-col justify-center items-center mt-8 relative">
          <h1 className="text-7xl mb-4 font-bold relative">
            Sparkling Smiles, Spreading
            <div className="absolute left-[-205px] top-5">
              <Image
                src="/static/figure1.png"
                width={350}
                height={334}
                alt="figure1"
              />
            </div>
          </h1>
          <h1 className="text-7xl mb-4 font-bold z-10 relative">
            Love. Invitary, Your Digital
            <div className="absolute right-[-140px] top-2">
              <Image
                src="/static/figure2.png"
                width={243}
                height={243}
                alt="figure1"
              />
            </div>
          </h1>
          <h1 className="text-7xl mb-4 font-bold z-20">
            Invitation Wonderland
          </h1>
          <p className="mt-6 text-lg font-light">
            “A dream you dream alone is only a dream. A dream <br /> you dream
            together is reality.” - <b className="font-semibold">John Lennon</b>
          </p>
          <div className="bg-[#FFF3C1] p-2 rounded-xl flex items-center mt-16">
            <p className="pl-4 pr-8 font-medium">
              Spread stunning news to your loved ones with Invitary.
            </p>
            <Button className="bg-landingPrimary text-white" radius="sm">
              Start Crafting Your Invitations Now!
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto bg-[#FFFAE8] p-12 rounded-2xl">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-landingPrimary">Our Templates</p>
            <h2 className="font-semibold text-4xl mt-3">Latest Templates</h2>
            <p className="text-xl text-[#475467] mt-2">
              Discover Timeless Elegance: Explore Our Newest Wedding Invitation
              Templates!
            </p>
          </div>
          <Button className="bg-landingPrimary text-white" radius="sm">
            View all templates
          </Button>
        </div>
        <div className="-mr-12 mt-12">
          <div className="flex space-x-4 overflow-x-auto">
            <CardTemplate />
            <CardTemplate />
            <CardTemplate />
            <CardTemplate />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
