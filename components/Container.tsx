import { cn } from "@nextui-org/react";
import React from "react";

type ContainerType = "fullscreen" | "default";

const Container = ({
  type = "fullscreen",
  centered = false,
  children,
}: {
  type?: ContainerType;
  centered?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("w-full", {
        "h-[100svh]": type === "fullscreen",
        "flex justify-center items-center": centered,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
