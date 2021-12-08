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
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
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
