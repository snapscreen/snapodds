import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo } from "@/components";

const Home: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="We’ve cracked in-play sports betting aquisition!" />
      <Hero
        title="We’ve cracked in-play sports betting aquisition!"
        lead="Just snap the TV or streaming and we find all odds for the game.
      We enable your players a greater sports betting experience.
      SnapOdds is the “Shazam” for sports betting."
      />
      <Container></Container>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
