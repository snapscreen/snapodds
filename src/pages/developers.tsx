import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
  Hero,
  Seo,
  Button,
} from "@/components";

const ressources = [
  {
    framework: "iOS",
    type: "mobile",
    description: "Integrate SnapOdds with your native iOS app for Apple iPhone or iPad.",
    link:
      "https://docs.snapodds.com/docs/documentation/ios-sdk-documentation",
  },
  {
    framework: "Android",
    type: "mobile",
    description:
      "Integrate SnapOdds with your native Android app.",
    link:
      "https://docs.snapodds.com/docs/documentation/android-sdk-documentation",
  },
  {
    framework: "Javascript",
    type: "frontend",
    description:
      "Integrate SnapOdds with any website.",
    link:
      "https://docs.snapodds.com/docs/documentation/js-sdk-documentation",
  },
];

const Products: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Developers ressources" />
      <Hero
        title="Developers"
        lead="We prepared developer how-to articles and a documentation."
      >
        <div className="mt-8 flex flex-col justify-center items-center sm:flex-row">
          <Button as="externalLink" href="http://github.com/snapodds" styleType="ghost">
            Github page
          </Button>
          <Button as="externalLink" href="https://docs.snapodds.com/docs/" styleType="primary" className="mt-4 sm:mt-0 sm:ml-8">
            Read documentation
          </Button>
        </div>
      </Hero>
      <Container>
        <h2 className="text-4xl text-center my-8">Framework SDKs</h2>
        <div className="grid grid-cols-1 gap-4 mb-4 mx-auto sm:mb-8 sm:gap-8 lg:grid-cols-3">
          {ressources.map((ressource, key) => (
            <div key={key} className="flex flex-col justify-between prose relative bg-skin-base-flash p-8 shadow-sm transition-all focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-light">
              <div>
                <h2 className="text-3xl mt-2">
                  <span>{ressource.framework}</span>
                  <span className="text-sm font-normal tracking-normal ml-3">{ressource.type}</span>
                </h2>
                <p className="lead mt-4">
                  {ressource.description}
                </p>
              </div>
              <div className="flex justify-between mt-6 space-x-8">
                {ressource.framework === "iOS" &&
                  <StaticImage
                    src="../images/ios-plain.svg"
                    alt="iOS logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={40}
                  />
                }
                {ressource.framework === "Android" &&
                  <StaticImage
                    src="../images/android-plain.svg"
                    alt="iOS logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={40}
                  />
                }
                {ressource.framework === "Javascript" &&
                  <StaticImage
                    src="../images/javascript-plain.svg"
                    alt="iOS logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={40}
                  />
                }
                <Button as="externalLink" styleType="ghost" href={ressource.link}>
                  Get started
                </Button>
              </div>
            </div>
          ))}
        </div>
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
