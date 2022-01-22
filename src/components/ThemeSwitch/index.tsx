import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { EmptyProps } from "@/definitions";
import { Button } from "@/components";

export const ThemeSwitch: React.FC<EmptyProps> = () => {
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  useEffect(() => {
    setTheme(window.__theme);
  }, []);

  const [theme, setTheme] = useState(websiteTheme);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      as="button"
      styleType="icon"
      onClick={ThemeToggle}
      className="--icon"
    >
      {theme === 'dark' ? (
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
