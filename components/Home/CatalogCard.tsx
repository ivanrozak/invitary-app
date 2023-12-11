import React from "react";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { default as NextImage } from "next/image";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const CatalogCard = ({
  name,
  imgSrc,
  link,
}: {
  name: string;
  imgSrc: string;
  link: string;
}) => {
  return (
    <Card isFooterBlurred className="w-full h-[400px]" radius="lg">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="font-medium text-2xl text-white/80">{name}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={imgSrc}
        as={NextImage}
        fill
      />
      <CardFooter className="absolute bg-white/30 bottom-0 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button
          className="text-tiny"
          color="primary"
          radius="full"
          size="sm"
          as={Link}
          href={link}
        >
          Detail
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatalogCard;
