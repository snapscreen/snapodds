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
  SupportedBy,
  DefinitionList,
  LogoCloud,
} from "@/components";

const Home: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  let sportsBar = "sportsbar.jpg";

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Converting Viewers into Bettors with a Snap!" />
      <Hero
        title="Converting Viewers into Bettors with a Snap!"
        img={sportsBar}
      >
        <div className="w-full sm:pr-96 lg:pr-96">
          <p className="lead">
            SnapOdds technology helps sports media and sportsbook operators to see more viewers quickly
            converting into bettors in live games. Bettors get an upgraded betting experience and it
            boosts the ROI in the sports betting lifecycle.
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
          <div className="mt-8 text-left gap-4 grid grid-cols-2 lg:grid-cols-3 max-w-lg">
            <DefinitionList term="Response time" definition="100ms" />
            <DefinitionList term="Accuracy" definition="100%" />
            <DefinitionList term="Sports leagues" definition="All major" />
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
      {/*
      <div className="p-4 lg:p-12 flex flex-col justify-center text-center">
        <h2 className="text-3xl semibold">Meet SnapOdds at the SBC Summit North America</h2>
        <p className="mb-8">
        <Button
          as="link"
          to="https://meetings.hubspot.com/willo1/tradeshow-meeting"
          styleType="primary"
          className="my-auto"
        >
          Book a meeting
        </Button>
        </p>
        <StaticImage
          src="../images/SBC-Summit-NA.png"
          alt="SBC Teaser"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
      */}
      <LogoCloud />
      <Container>
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
