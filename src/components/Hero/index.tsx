import React from "react";
import { Container, CalloutHeading } from "@/components";

import "./Hero.styles.css";

type HeroProps = {
  children?: React.ReactNode;
  className?: string;
  title: string;
  preTitle?: string;
  lead?: string;
  img?: string;
  video?: string;
};

export const Hero: React.FC<HeroProps> = ({
  title,
  preTitle,
  lead,
  img,
  video,
  children,
}) => {
  return (
    <div className="relative overflow-hidden">
      {!img ? null : (
        <div
          className="heroBackground absolute inset-0 overflow-hidden bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        />
      )}
      {!video ? null : (
        <div className="heroBackground absolute inset-0 overflow-hidden bg-cover">
          <video
            width="640"
            height="360"
            controls
            autoPlay
            loop
            preload="auto"
            className="w-full mx-auto"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="hero prose prose-lg lg:prose-xl">
        <Container>
          <section>
            <div className="preTitle">{preTitle}</div>
            <CalloutHeading itemProp="headline" text={title} />
            <p className="lead mt-4">{lead}</p>
            {!children ? null : children}
          </section>
        </Container>
      </div>
    </div>
  );
};
