import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo, Button } from "@/components";

const ressources = [
  {
    framework: "iOS",
    type: "mobile",
    description:
      "Integrate SnapOdds with your native iOS app for Apple iPhone or iPad.",
    link: "https://docs.snapodds.com/docs/mobile-sdk/ios",
    gitLink: "https://github.com/snapodds/sdk-ios",
  },
  {
    framework: "Android",
    type: "mobile",
    description: "Integrate SnapOdds with your native Android app.",
    link: "https://docs.snapodds.com/docs/mobile-sdk/android",
    gitLink: "https://github.com/snapodds/sdk-android",
  },
  {
    framework: "Javascript",
    type: "frontend",
    description: "Integrate SnapOdds with any website.",
    link: "https://docs.snapodds.com/docs/documentation/js-sdk-documentation",
    gitLink: "https://github.com/snapodds/sdk-js",
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
          <Button
            as="externalLink"
            href="http://github.com/snapodds"
            styleType="ghost"
          >
            Github page
          </Button>
          <Button
            as="externalLink"
            href="https://docs.snapodds.com/docs/"
            styleType="primary"
            className="mt-4 sm:mt-0 sm:ml-8"
          >
            Read documentation
          </Button>
        </div>
      </Hero>
      <Container>
        <h2 className="text-4xl text-center my-8">Framework SDKs</h2>
        <div className="grid grid-cols-1 gap-4 mb-4 mx-auto sm:mb-8 sm:gap-8 lg:grid-cols-3">
          {ressources.map((ressource, key) => (
            <div
              key={key}
              className="flex flex-col justify-between prose relative bg-skin-base-flash p-8 shadow-sm transition-all focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-light"
            >
              <div className="flex justify-between space-x-4">
                <h2 className="text-3xl mt-2">
                  <span>{ressource.framework}</span>
                  <span className="text-sm font-normal tracking-normal ml-3">
                    {ressource.type}
                  </span>
                </h2>
                {ressource.framework === "iOS" && (
                  <StaticImage
                    src="../images/ios-plain.svg"
                    alt="iOS logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={40}
                  />
                )}
                {ressource.framework === "Android" && (
                  <StaticImage
                    src="../images/android-plain.svg"
                    alt="iOS logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={40}
                  />
                )}
                {ressource.framework === "Javascript" && (
                  <StaticImage
                    src="../images/javascript-plain.svg"
                    alt="iOS logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={40}
                  />
                )}
              </div>
              <p className="lead mt-4">{ressource.description}</p>
              <div className="flex justify-end mt-6 space-x-8">
                <Button
                  as="externalLink"
                  styleType="ghost"
                  href={ressource.link}
                >
                  Learn more
                </Button>
                <Button
                  as="externalLink"
                  styleType="icon"
                  href={ressource.gitLink}
                >
                  <svg className="h-8 w-8" viewBox="0 0 1024 1024" aria-hidden="true">
                    <title>Visit Github Repo</title>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                      transform="scale(64)"
                      fill="var(--color-text)"
                    />
                  </svg>
                  <span className="sr-only">Get started</span>
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
