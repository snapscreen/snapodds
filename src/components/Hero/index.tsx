import React from "react";
import { Container, CalloutHeading } from "@/components";

import "./Hero.styles.css";

type HeroProps = {
  children?: React.ReactNode;
  className?: string;
  title: string;
  lead?: string;
  img?: string;
};

export const Hero: React.FC<HeroProps> = ({ title, lead, img, children }) => {
  return (
    <div className="">
      {!img ? null : (
        <div className="heroBackground bg-indigo-700">
          <img src={img} alt="" />
        </div>
      )}
      <div className="hero prose prose-xl lg:prose-2xl">
        <Container>
          <section>
            <CalloutHeading itemProp="headline" text={title} />
            <p className="lead sm:text-center mx-auto mt-16">{lead}</p>
          </section>
          {!children ? null : (
            <section className="py-16 sm:text-center mx-auto">{children}</section>
          )}
        </Container>
      </div>
    </div>
  );
};
