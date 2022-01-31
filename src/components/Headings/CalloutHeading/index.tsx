import React from "react";
import { HeadingsProps } from "@/definitions";

export const CalloutHeading: React.FC<HeadingsProps> = ({ text }) => {
  return (
    <h1
      className="h1 py-8"
      data-aos="zoom-out"
      data-aos-delay="50"
      data-aos-duration="300"
      data-aos-easing="ease-in-cubic"
    >
      {text}
    </h1>
  );
};
