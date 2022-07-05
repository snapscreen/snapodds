import React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo, FaqList, Button } from "@/components";

const HowItWorks: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="How SnapOdds works" />
      <Hero
        title="Display odds with just a snap of the live TV screen."
        lead="Snapodds is an intelligent sports bet discovery tool that you can integrated into your web and mobile apps. Betters can find live games in real time which boosts revenue streams and ROI for sports media and for sports operators."
      >
        {/*
        <Button as="link" to="/try-now" styleType="primary">
          Try now
        </Button>
        */}
      </Hero>
      <Container>
        <div
          className="w-full relative aspect-video mb-8"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            src="https://player.vimeo.com/video/682945888?h=348e48fdad&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479autoplay=1&loop=1&autopause=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="SnapOdds-demo-game.mp4"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="pt-8 mt-16 border-t border-skin-base-muted">
          <h2 className="text-center text-4xl">Getting started is so easy</h2>
          <p className="text-center text-lg">Snap a game. See odds. Bet and enjoy.</p>
        </div>
        <div className="pt-8 mt-16 border-t border-skin-base-muted">
          <h2 className="text-center text-3xl">Usage related FAQs</h2>
          <FaqList data={data} />
        </div>
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
    allContentfulFaq(
      filter: { metadata: { tags: { elemMatch: { name: { eq: "help" } } } } }
    ) {
      edges {
        node {
          id
          question
          author
          answer {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 1000)
                __typename
              }
            }
          }
          createdAt
          metadata {
            tags {
              name
            }
          }
        }
      }
    }
  }
`;
