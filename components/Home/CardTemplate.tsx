import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import { ArrowLink, Stars } from "../icons";

const CardTemplate = () => {
  return (
    <Card
      isFooterBlurred
      className="w-[384px] flex-shrink-0"
      classNames={{ footer: "block overflow-visible p-4" }}
      shadow="none"
    >
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/landing/sample1.png"
      />
      <CardFooter className="bg-white">
        <div className="flex justify-between items-center pt-2">
          <div className="text-sm font-semibold text-landingPrimary">
            Emerald Elegance
          </div>
          <div className="flex gap-1">
            <Stars />
            <Stars />
            <Stars />
            <Stars />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="w-12 h-12 bg-[#E7E7E7] rounded-lg border border-[#D0D5DD] cursor-pointer"></div>
          <div className="w-12 h-12 bg-[#A9A9A9] rounded-lg border border-[#D0D5DD] cursor-pointer"></div>
          <div className="w-12 h-12 bg-[#65836A] rounded-lg border border-[#D0D5DD] cursor-pointer"></div>
          <div className="w-12 h-12 bg-[#1A3B20] rounded-lg border border-[#D0D5DD] cursor-pointer"></div>
        </div>
        <p className="text-2xl font-semibold mt-1">IDR 150.000,-</p>
        <p className="text-[#475467] uppercase">Fanesha & Kevin</p>
        <Button
          className="bg-landingPrimary text-white mt-6"
          radius="sm"
          endContent={<ArrowLink />}
        >
          See Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardTemplate;
