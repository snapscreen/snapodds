import React from "react";
import { graphql } from "gatsby";
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
      </Hero>
      <Container>
        <div className="w-full relative aspect-video mb-8" style={{paddingBottom: "56.25%"}}>
          <iframe
            src="https://player.vimeo.com/video/682945888?h=348e48fdad&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479autoplay=1&loop=1&autopause=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="SnapOdds-demo-game.mp4"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </Container>
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
