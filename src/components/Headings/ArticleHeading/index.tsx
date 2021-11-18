import React from "react";
import { HeadingsProps } from "@/definitions";

export const ArticleHeading: React.FC<HeadingsProps> = ({ text }) => {
  return (
    <h1
      className="h1 py-8 mx-auto break-words"
      data-aos="zoom-out"
      data-aos-delay="50"
      data-aos-duration="300"
      data-aos-easing="ease-in-cubic"
    >
      {text}
    </h1>
  );
};
