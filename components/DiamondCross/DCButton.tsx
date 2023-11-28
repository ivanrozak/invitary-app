"use client";
import { cormorant } from "@/app/fonts";
import { Button, ButtonProps } from "@nextui-org/button";
import { cn } from "@nextui-org/react";
import React, { forwardRef } from "react";

const DCButton: React.ForwardRefExoticComponent<ButtonProps> = forwardRef(
  ({ ...props }, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cn(cormorant.className, props.className)}
      />
    );
  }
);

DCButton.displayName = "DCButton";

export default DCButton;
