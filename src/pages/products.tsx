import React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
  Hero,
  FaqList,
  LogoCloud,
  ProductsList,
  Seo,
} from "@/components";

const Products: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Our Products" />
      <Hero
        title="Get started with SnapOdds"
        lead="Our intelligent technology recognizes live games on TV or streaming using the camera on mobile devices and instantly displays live odds that link directly to the betting page."
      ></Hero>
      <Container>
        <ProductsList />
        {/*
        <div className="pt-8 mt-16 border-t border-skin-base-muted">
          <h2 className="text-center text-3xl">Product related FAQs</h2>
          <FaqList data={data} />
        </div>
        */}
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
    allContentfulFaq(
      filter: { metadata: { tags: { elemMatch: { name: { eq: "product" } } } } }
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
