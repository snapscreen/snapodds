import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import { Layout, Container, LogoCloud, Seo, Button } from "@/components";

const Products: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Our Products" />
      <LogoCloud />
      <Container>
        <article className="mx-auto prose prose-xl max-w-full space-y-8 divide-y divide-skin-base-muted">
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
              <Button
                as="link"
                styleType="primary"
                href="/contact"
                className="mt-8"
              >
                Contact Sales
              </Button>
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
              <Button
                as="link"
                styleType="primary"
                href="/contact"
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
