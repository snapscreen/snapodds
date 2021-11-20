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
    <div className="relative overflow-hidden">
      {!img ? null : (
        <div
          className="heroBackground absolute inset-0 overflow-hidden bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        />
      )}
      <div className="hero prose prose-xl lg:prose-2xl">
        <Container>
          <section>
            <CalloutHeading itemProp="headline" text={title} />
            <p className="lead mt-16">{lead}</p>
            {!children ? null : children}
          </section>
        </Container>
      </div>
    </div>
  );
};
