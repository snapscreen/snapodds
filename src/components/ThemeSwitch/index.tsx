import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { EmptyProps } from "@/definitions";
import { Button } from "@/components";
import { getTheme, setDarkMode, setLightMode } from "@/utils/fns";

export const ThemeSwitch: React.FC<EmptyProps> = () => {
  const [isDark, toggleDark] = useState(getTheme() === "dark");
  const changeTheme = () => {
    toggleDark(!isDark);
    if (isDark) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };
  return (
    <Button as="button" styleType="icon" onClick={changeTheme}>
      {isDark ? (
        <>
          <SunIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <MoonIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </Button>
  );
};
