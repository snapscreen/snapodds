import React from "react";
import { HeadingsProps } from "@/definitions";

export const CalloutHeading: React.FC<HeadingsProps> = ({ text }) => {
  return (
    <h1
      className="h1 sm:text-center py-8 max-w-4xl mx-auto"
      data-aos="zoom-out"
      data-aos-delay="50"
      data-aos-duration="300"
      data-aos-easing="ease-in-cubic"
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-skin-primary to-blue-400">{text}</span>
    </h1>
  );
};
