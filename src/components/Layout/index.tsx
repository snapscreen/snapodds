import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Location } from "history";
import { IntercomProvider } from "react-use-intercom";
import { Header, Footer } from "@/components";

interface LayoutProps {
  location: Location;
  title: string;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const INTERCOM_APP_ID = "kk4zxl1p";
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <IntercomProvider appId={INTERCOM_APP_ID}>
      <Header />
      <main>{children}</main>
      <Footer />
    </IntercomProvider>
  );
};
