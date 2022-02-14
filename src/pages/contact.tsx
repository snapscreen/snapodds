import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
  Hero,
  Button,
  Seo,
  HsFormContact,
} from "@/components";

import { useIntercom } from 'react-use-intercom';


const Contact: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const email = data.site.siteMetadata.email;
  const { show } = useIntercom();

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Get in touch" />
      <Hero
        title="Your bright future starts with a simple conversation!"
        lead="Whether you are curious how SnapOdds works with you, or you’d like to know your growth content potential, we’d love to chat with you."
      >
        <Button as="button" onClick={show} styleType="primary">
          Chat with SnapOdds
        </Button>
      {/*
      <button onClick={boot}>Boot intercom</button>
      <button onClick={shutdown}>shutdown</button>
      */}
      </Hero>
      <Container>
        <div className="mx-auto mb-16">
          <HsFormContact />
          <div className="prose prose-lg mx-auto text-center pt-8">
            <h2 className="text-center">Or, send us an Email to:</h2>
            <Button
              as="externalLink"
              styleType="ghost"
              href={"mailto:" + { email }}
            >
              {email}
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        email
      }
    }
  }
`;
