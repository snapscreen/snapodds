import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { EmptyProps } from "@/definitions";
import { Button } from "@/components";

declare const window: any;

export const ThemeSwitch: React.FC<EmptyProps> = () => {
  let websiteTheme: string | undefined = undefined;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  useEffect(() => {
    setTheme(window.__theme);
  }, []);


  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
    setTheme(websiteTheme === "dark" ? "light" : "dark");
  };

  const [theme, setTheme] = useState(websiteTheme);

  return (
    <Button
      as="button"
      styleType="icon"
      onClick={ThemeToggle}
      className="--icon"
    >
      {theme === "dark" ? (
        <>
          <SunIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <MoonIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </Button>
  );
};
