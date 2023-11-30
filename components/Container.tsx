import React from "react";
import { cn } from "@nextui-org/react";

const Container = ({
  children,
  centered = false,
  noPadding = false,
  fullWidth = false,
  fullHeight = false,
  className,
}: {
  children?: React.ReactNode;
  centered?: boolean;
  noPadding?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn("w-full " + className, {
        "p-6": !noPadding,
        "h-[100svh]": fullHeight,
        "flex justify-center items-center": centered,
        "max-w-screen-xl mx-auto": !fullWidth,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
