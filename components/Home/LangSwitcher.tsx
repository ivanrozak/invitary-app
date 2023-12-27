import { Switch } from "@nextui-org/react";
import React from "react";

const LangSwitcher = () => {
  return (
    <div className="flex items-center font-semibold text-sm">
      <div className="mr-2">IDN</div>
      <Switch
        defaultSelected
        size="sm"
        classNames={{
          wrapper: "group-data-[selected=true]:bg-landingPrimary",
        }}
      />
      <div>ENG</div>
    </div>
  );
};

export default LangSwitcher;
