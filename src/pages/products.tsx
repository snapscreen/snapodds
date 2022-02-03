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
        {/*
        <div className="grid grid-cols-1 gap-4 mb-4 mx-auto sm:mb-8 sm:gap-8 sm:grid-cols-2">
          <div className="flex flex-col justify-between prose relative bg-skin-base-flash p-8 shadow-sm transition-all focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-light">
            <div>
              <h2 className="text-3xl mt-2">Snap SDK</h2>
              <p className="lead mt-4">
                Enhance your betting app or mobile web page with a "Snapping"
                function
              </p>
              <ul>
                <li>
                  Embed SnapOdds (unbranded) into iOS, Android and mobile web
                  apps
                </li>
                <li>Faster bet discovery</li>
                <li>Drive engagement with live games</li>
                <li>More “intuitive” experience vs. text search/paging</li>
              </ul>
            </div>
            <div className="flex justify-end mt-6 space-x-8">
              <Button as="link" styleType="ghost" to="/products/snap">
                Learn more
              </Button>
              <Button
                as="button"
                styleType="primary"
                onClick={() => modalRefDemoSDK.current.openModal()}
              >
                Get a demo
              </Button>
              <Modal ref={modalRefDemoSDK} title="Book a SDK Demo">
                <HsFormDemoSDK />
              </Modal>
            </div>
          </div>
          <div className="flex flex-col justify-between prose relative bg-skin-base-flash p-8 shadow-sm transition-all focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-light">
            <div>
              <h2 className="text-3xl mt-2">SnapOdds</h2>
              <p className="lead mt-4">
                Offer website visitors a simple, unobtrusive and better way to
                access betting odds.
              </p>
              <ul>
                <li>
                  Embed branded snapping into 3rd party iOS, Android and mobile
                  web apps
                </li>
                <li>Open new opportunities for consumer acquisition</li>
                <li>The smartest ad banner in history</li>
              </ul>
            </div>
            <div className="flex justify-end mt-6 space-x-8">
              <Button as="link" styleType="ghost" to="/products/snapodds">
                Learn more
              </Button>
              <Button
                as="button"
                styleType="primary"
                onClick={() => modalRefDemoBanner.current.openModal()}
              >
                Get a demo
              </Button>
              <Modal ref={modalRefDemoBanner} title="Book a Banner Demo">
                <HsFormDemoBanner />
              </Modal>
            </div>
          </div>
        </div>
        */}
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
