"use client";

import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onThemeChange = (val: boolean) => {
    if (val) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <Switch
        value={theme}
        isSelected={theme === "light"}
        size="lg"
        color="primary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onValueChange={(val) => onThemeChange(val)}
      ></Switch>
    </div>
  );
}
