import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo, Button } from "@/components";

const HowItWorks: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="How SnapOdds works." />
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
      <Container>
        <article className="mx-auto prose prose-xl max-w-full space-y-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8">
              <StaticImage
                src="../images/solution-sdk.png"
                alt="SnapOdds SDK"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2>SnapOdds SDK</h2>
              <ul className="lead">
                <li>
                  Embed SnapOdds (unbranded) into iOS, Android and mobile web
                  apps
                </li>
                <li>Faster bet discovery</li>
                <li>Drive engagement with live games</li>
                <li>More “intuitive” experience vs. text search/paging</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 md:order-2">
              <StaticImage
                src="../images/solution-banner.png"
                alt="SnapOdds SDK"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2>SnapOdds Banner</h2>
              <ul className="lead">
                <li>
                  Embed branded snapping into 3rd party iOS, Android and mobile
                  web apps
                </li>
                <li>Open new opportunities for consumer acquisition</li>
                <li>The smartest ad banner in history</li>
              </ul>
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
