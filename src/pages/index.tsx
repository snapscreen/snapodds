import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo } from "@/components";

const Home: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  let sportsBar = "/sportsbar.jpg";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="We’ve cracked converting viewers into bettors!" />
      <Hero
        title="We’ve cracked converting viewers into bettors!"
        img={sportsBar}
      >
        <div className="relative w-full flex flex-col h-full sm:pr-80 lg:pr-96">
          <p className="lead">
            Just snap the TV or streaming and we find all odds for the game. We
            enable your players a greater sports betting experience. SnapOdds is
            the “Shazam” for sports betting.
          </p>
          <img
            src="/iPhone.png"
            alt="iPhone"
            className="w-full sm:w-1/2 md:w-1/3 relative sm:absolute sm:transform sm:translate-y-1/2 right-0 bottom-0"
          />
        </div>
      </Hero>
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
