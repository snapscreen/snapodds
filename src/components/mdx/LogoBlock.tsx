import React from "react";
import { Logo } from "@/components";
import { MdxProps } from "@/definitions";

export const LogoBlock: React.FC<MdxProps> = () => (
  <>
    <div className="mx-auto p-8 md:p-16 lg:p-32 max-w-screen-sm">
      <Logo />
    </div>
  </>
);

export const LogoOnBgBlock: React.FC<MdxProps> = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="p-8 md:p-16 max-w-screen-sm bg-skin-primary">
      <Logo onBackground />
    </div>
    <div className="p-8 md:p-16 max-w-screen-sm bg-skin-accent-copper">
      <Logo onBackground />
    </div>
    <div className="p-8 md:p-16 max-w-screen-sm bg-skin-accent-peach">
      <Logo onBackground />
    </div>
    <div className="p-8 md:p-16 max-w-screen-sm bg-skin-accent-coral">
      <Logo onBackground />
    </div>
    <div className="p-8 md:p-16 max-w-screen-sm bg-skin-accent-blue">
      <Logo onBackground />
    </div>
  </div>
);
