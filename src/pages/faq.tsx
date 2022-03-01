import * as React from "react";
import { graphql } from "gatsby";

import { PageProps } from "@/definitions";
import { Layout, Container, Hero, FaqList, Seo } from "@/components";

const Faqs: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Frequently asked questions" />
      <Hero
        title="FAQs"
        lead="Find here answers that will help you better understand our vision, business and products."
      ></Hero>
      <Container>
        <FaqList data={data} />
      </Container>
    </Layout>
  );
};

export default Faqs;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulFaq {
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
        }
      }
    }
  }
`;
