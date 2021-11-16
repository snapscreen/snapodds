import * as React from "react";
import { graphql } from "gatsby";

import { Layout, Hero, Seo, Button } from "@/components";
import { PageProps } from "@/definitions";

const NotFoundPage: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Hero
        title="We are sorry."
        lead="The content you are looking for could not be found."
      >
        <Button as="link" styleType="primary" to="/">
          Meet SnapOdds
        </Button>
      </Hero>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
