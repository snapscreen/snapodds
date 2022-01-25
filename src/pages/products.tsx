import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, LogoCloud, Seo, Button } from "@/components";

const Products: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Our Products" />
      <Hero
        title="Our Products"
        lead="SnapOdds technology instantly increases the number of sports bets taken on any platform or medium that it's added to. The best part, it can be easily added to any app, website or blog in two impactful ways."
      ></Hero>
      <LogoCloud />
      <Container>
        <article className="mx-auto prose prose-xl max-w-full space-y-8 divide-y divide-skin-base-muted">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:mr-16">
              <StaticImage
                src="../images/solution-sdk.png"
                alt="SnapOdds SDK"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="uppercase text-lg font-bold text-semibold mt-4 lg:mt-16">
                SnapOdds SDK
              </div>
              <h2 className="mt-4">
                Enhance your betting app or mobile web page with a "Snapping"
                function
              </h2>
              <p>
                Sports betting and sports media apps that integrate the white
                labeled SnapOdds SDK (Software Development Kit) enable users to
                point their smartphone at any live sporting event, on TV or
                streaming, and instantly be served all of the betting odds
                relevant to that game. The SnapOdds SDK can be seamlessly
                integrated into native iOS and Android apps as well as web apps.
              </p>
              <ul>
                <li>
                  Embed SnapOdds (unbranded) into iOS, Android and mobile web
                  apps
                </li>
                <li>Faster bet discovery</li>
                <li>Drive engagement with live games</li>
                <li>More “intuitive” experience vs. text search/paging</li>
              </ul>
              <Button
                as="link"
                styleType="primary"
                to="/contact"
                className="mt-8"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:ml-16 md:order-2">
              <StaticImage
                src="../images/solution-banner.png"
                alt="SnapOdds Web-Banner"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="uppercase text-lg font-bold text-semibold mt-4 lg:mt-16">
                SnapOdds Banner
              </div>
              <h2 className="mt-4">
                Offer website visitors a simple, unobtrusive and better way to
                access betting odds.
              </h2>
              <p>
                When a website visitor clicks the banner, the smartphone camera
                opens and activates the Snapping function. Any live sporting
                event, on TV or streaming, can be snapped and all of the betting
                odds relevant to that game instantly show up on the display.
              </p>
              <ul>
                <li>
                  Embed branded snapping into 3rd party iOS, Android and mobile
                  web apps
                </li>
                <li>Open new opportunities for consumer acquisition</li>
                <li>The smartest ad banner in history</li>
              </ul>
              <Button
                as="link"
                styleType="primary"
                to="/contact"
                className="mt-8"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </Layout>
  );
};

export default Products;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
