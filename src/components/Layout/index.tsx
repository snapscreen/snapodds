import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Location } from "history";
import { Header, Footer } from "@/components";
// import { Banner } from "@/components";

interface LayoutProps {
  location: Location;
  title: string;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  let AOS;
    useEffect(() => {
      /**
       * Server-side rendering does not provide the 'document' object
       * therefore this import is required either in useEffect or componentDidMount as they
       * are exclusively executed on a client
       */
      const AOS = require("aos");
      AOS.init({
        once: true,
        duration: 300,
        easing: "ease-out-cubic",
      });
    }, []);

    useEffect(() => {
      if (AOS) {
        AOS.refresh();
      }
    });
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};
