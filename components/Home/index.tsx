import React from "react";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Container from "../Container";

const Home = () => {
  return (
    <Container>
      <h3 className="text-2xl mb-6">Catalogue</h3>
      <div className="grid grid-cols-4">
        <Card isFooterBlurred className="w-full h-[400px]" radius="lg">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="font-medium text-2xl">Theme One</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="/animated-slider/4.png"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Detail
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
