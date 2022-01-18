import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo, Button } from "@/components";

const HowItWorks: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="How SnapOdds works" />
      <Hero
        title="Display odds with just a snap of the live TV screen."
        lead="SnapOdds is a revolutionary bet discovery and engagement tool from Snapscreen. Integrate into your web and mobile experiences and acquisition path to create a dynamic, frictionless path to wagering."
      >
        <Button as="link" to="/try-now" styleType="primary">
          Try now
        </Button>
        <div className="aspect-w-16 aspect-h-9">
          <video width="640" height="360" controls loop autoPlay>
            <source src="SnapOdds-video.mp4" type="video/mp4" />
          </video>
        </div>
      </Hero>
    </Layout>
  );
};

export default HowItWorks;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
