import React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Seo, FaqList } from "@/components";

const HowItWorks: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="How SnapOdds works" />
      <Hero
        title="Display odds with just a snap of the live TV screen."
        lead="SnapOdds comes as a widget to be embedded into native apps or mobile websites. Additionally, we offer branded turn-key, white-label solutions for social media or a standalone app if no embedded widgets are desired."
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
