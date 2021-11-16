import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Button, Seo } from "@/components";

const HowItWorks: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="How SnapOdds works." />
      <Hero
        title="Get odds with just a snap of the live TV screen."
        lead="SnapOdds is a service from Snapscreen that helps you to aquire betting players instantly. SnapOdds is easily integrated into your app as SDK or Webbanner into your website."
      >
        <div className="text-center">
          <Button
            as="link"
            styleType="primary"
            to="/try-now"
          >
            Try now
          </Button>
        </div>
      </Hero>
      <Container>
        <article className="mx-auto prose prose-xl max-w-full space-y-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <StaticImage
                src="../images/solution-sdk.png"
                alt="SnapOdds SDK"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2>SDK integration</h2>
              <p className="lead">
                We have a SDK production ready for iPhone iOS and Anroid.
                The integration is done easily and is well documented.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
              <h2>Webbanner trigger</h2>
              <p className="lead">
                Our snap interface works also in webbrowsers.
                A standard webbanner works perfectly as trigger for action.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <StaticImage
                src="../images/solution-banner.png"
                alt="SnapOdds SDK"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
          </div>
        </article>
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
