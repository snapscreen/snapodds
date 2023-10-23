import React from "react";
import { EmptyProps } from "@/definitions";
import { Container } from "@/components";

import "./LogoCloud.styles.css";

export const LogoCloud: React.FC<EmptyProps> = () => {
  return (
    <div className="bg-base-flash">
      <Container>
        <div className="py-12 text-center">
          <h2 className="mx-auto text-xl font-bold mt-6 mb-12">
            Our B2B products are for sportsbooks, affiliates and sports media.
          </h2>
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:mb-8 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="../clients/betika.webp" alt="Betika" width="158" height="48" />
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert" src="../clients/lottomatica.svg" alt="Lottomatica" width="158" height="48" />
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="../clients/Fox_Sports.svg" alt="Fox Sports" width="158" height="48" />
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert" src="../clients/maxxwin.svg" alt="Maxxwin" width="158" height="48" />
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="../clients/Netball_Australia.svg" alt="Netball Australia" width="158" height="48" />
            <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="../clients/StationsCasino.png" alt="Stations Casino" width="158" height="48" />
          </div>
        </div>
      </Container>
    </div>
  );
};
