import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Button, Seo } from "@/components";

const Home: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  let sportsBar = "sportsbar.jpg";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="It’s a Snap converting viewers into bettors!" />
      <Hero
        title="It’s a Snap converting viewers into bettors!"
        img={sportsBar}
      >
        <div className="relative w-full flex flex-col h-full sm:pr-80 lg:pr-96">
          <p className="lead">
            Just snap the game on live TV and we find the odds in a flash. We
            enable your players a greater sports betting experience. Upgrade
            your Sportsbook experience or player acquisition with frictionless
            bet discovery!
          </p>
          <img
            src="iPhone.png"
            alt="iPhone"
            className="w-full sm:w-1/2 md:w-1/3 relative sm:absolute right-0 bottom-0 sm:translate-y-[50%]"
          />
        </div>
        <div className="flex justify-center md:justify-start">
          <Button as="link" to="/how-it-works" styleType="primary">
            How it works
          </Button>
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
