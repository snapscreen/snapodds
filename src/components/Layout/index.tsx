import React, { ReactNode } from "react";
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

AOS.init({
  once: true,
  duration: 300,
  easing: "ease-out-cubic",
});

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};
