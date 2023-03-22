import React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
  Hero,
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
