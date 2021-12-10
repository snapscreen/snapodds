import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Button, Seo } from "@/components";

const Contact: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const email = data.site.siteMetadata.email;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Get in touch" />
      <Hero
        title="Your bright future starts with a simple conversation!"
        lead="Whether you are curious how SnapOdds works with you, or you’d like to know your growth content potential, we’d love to chat with you."
      >
        <Button
          as="externalLink"
          styleType="primary"
          href="https://meetings.hubspot.com/willo1/talk-to-snapodds"
        >
          Book a meeting
        </Button>
      </Hero>
      <Container>
        <div className="text-center">
          <p className="lead mx-auto mb-4">Or write us an email to:</p>
          <Button
            as="externalLink"
            styleType="ghost"
            href={"mailto:" + { email }}
          >
            {email}
          </Button>
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
