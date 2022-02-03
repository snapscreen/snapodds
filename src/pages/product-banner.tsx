import React, { useRef } from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
  Hero,
  LogoCloud,
  Modal,
  HsFormDemoBanner,
  Seo,
  Button,
} from "@/components";

const Products: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const modalRefDemoBanner = useRef();

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="SnapOdds All-in-one" />
      <Hero
        title="Yes, it’s possible to snap with your website."
        lead="SnapOdds All-in-one for sportsbooks and sports media apps."
      ></Hero>
      <Container>
        <article className="mx-auto prose prose-xl max-w-full space-y-8 divide-y divide-skin-base-muted mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:mr-16">
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
              <div className="flex mt-8">
                <Button as="link" styleType="ghost" to="/contact">
                  Contact Sales
                </Button>
                <Button
                  as="button"
                  styleType="primary"
                  onClick={() => modalRefDemoBanner.current.openModal()}
                  className="ml-8 my-auto"
                >
                  Get a demo
                </Button>
              </div>
              <Modal ref={modalRefDemoBanner} title="Book a Banner Demo">
                <HsFormDemoBanner />
              </Modal>
            </div>
          </div>
        </article>
      </Container>
      <LogoCloud />
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
