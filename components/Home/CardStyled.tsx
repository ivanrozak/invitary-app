import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

const CardStyled = () => {
  return (
    <Card>
      <div className="relative">
        <Image
          removeWrapper
          className="z-0 w-full h-full object-cover"
          src="/landing/sample2.jpg"
          alt="Card example background"
          radius="none"
        />
        <div className="absolute bottom-0 w-full p-4 flex justify-between">
          <div className="flex">
            <div className="h-6 w-6 bg-[#1A3B20]" />
            <div className="h-6 w-6 bg-[#65836A]" />
            <div className="h-6 w-6 bg-[#A9A9A9]" />
            <div className="h-6 w-6 bg-[#E7E7E7]" />
          </div>
          <div className="bg-[#FFC961] text-[#595959] font-semibold text-xs px-2 py-1 rounded-md">
            Recommended
          </div>
        </div>
      </div>

      <CardFooter className="flex-col items-start">
        <div className="font-semibold text-landingPrimary">
          Emerald Elegance
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="text-xl font-bold">IDR 150.000,-</div>
          <Button
            variant="bordered"
            className="text-landingPrimary border-landingPrimary"
          >
            See Detail
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardStyled;
