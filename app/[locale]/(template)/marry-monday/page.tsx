import MMMain from "@/components/MarryMonday/MMMain";
import MMNavLink from "@/components/MarryMonday/MMNavLink";
import React from "react";

const MarryMonday = () => {
  return (
    <div className="bg-[#f3f2f1] text-[#284135] w-full h-full">
      <MMNavLink />
      <MMMain />
    </div>
  );
};

export default MarryMonday;
