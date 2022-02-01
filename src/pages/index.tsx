import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
  Hero,
  Button,
  Seo,
  HsFormSubscribe,
  SupportedBy,
  LogoCloud,
} from "@/components";

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
        <div className="w-full sm:pr-96 lg:pr-96">
          <p className="lead">
            SnapOdds technology helps sportsbooks and sports media instantly
            increase the number of bets users take while watching games. Upgrade
            the betting experience for your users with frictionless bet
            discovery
          </p>
          <div className="flex mt-8">
            <Button
              as="link"
              to="/how-it-works"
              styleType="primary"
              className="my-auto"
            >
              How it works
            </Button>
          </div>
        </div>
        <div className="hidden mx-auto sm:block sm:w-1/2 lg:w-1/3 sm:absolute right-0 -bottom-8">
          <StaticImage
            src="../images/iphone.png"
            alt="Snap TV"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
      </Hero>
      <LogoCloud />
      <Container>
        <HsFormSubscribe />
        <SupportedBy />
      </Container>
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
