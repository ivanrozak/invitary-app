import { cn } from "@nextui-org/react";
import React from "react";

type ContainerType = "fullscreen" | "default";

const Container = ({
  type = "fullscreen",
  centered = false,
  children,
  screen = "lg",
}: {
  type?: ContainerType;
  centered?: boolean;
  children: React.ReactNode;
  screen?: string;
}) => {
  return (
    <div
      className={cn("w-full px-6", {
        "h-[100svh]": type === "fullscreen",
        "flex justify-center items-center": centered,
        "max-w-screen-lg mx-auto": screen === "lg",
      })}
    >
      {children}
    </div>
  );
};

export default Container;
