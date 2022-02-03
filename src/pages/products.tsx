import React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import {
  Layout,
  Container,
  Hero,
  Faq,
  LogoCloud,
  ProductsList,
  Seo,
} from "@/components";

import { faqs } from "./faq";

const Products: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Our Products" />
      <Hero
        title="Get started with SnapOdds"
        lead="SnapOdds technology instantly increases the number of sports bets taken on any platform or medium that it's added to. The best part, it can be easily added to any app, website or blog in two impactful ways."
      ></Hero>
      <Container>
        <ProductsList />
        <div className="pt-8 mt-16 border-t border-skin-base-muted">
          <h2 className="text-center text-3xl">Product related FAQs</h2>
          <dl className="prose prose-lg max-w-full mx-auto mb-8 divide-y divide-skin-base-muted">
            {faqs
              .filter((faq) => faq.category === "Product")
              .map((filteredFaq) => (
                <Faq
                  key={filteredFaq.question}
                  author={filteredFaq.author}
                  category={filteredFaq.category}
                  q={filteredFaq.question}
                  a={filteredFaq.answer}
                />
              ))}
          </dl>
        </div>
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
