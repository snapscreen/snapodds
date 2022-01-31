import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Container, Hero, Faq, Seo } from "@/components";

export const faqs = [
  {
    author: "willo",
    category: "Company",
    question: "What was the idea/genesis behind the product?",
    answer:
      "“I watched a Super Bowl game years ago, an Ad was shown with the Shazam logo and I thought there must be a more convenient and robust way to connect TV and mobile. At the time I was founding CTO of ID verification market leader Jumio.com and naturally thought of using the camera to bridge TV and mobile.”",
  },
  {
    author: "matthias",
    category: "Product",
    question:
      "SnapOdds signed Station Casinos as first client, does it make a difference that it is a retail operator?",
    answer:
      "The best part of SnapOdds is it works for any type of business within the sports betting and sports media industry. With retail operators, it generates excitement and increased betting in the sportsbook and casino. With online operators, it’s proven to increase the number of live bets placed. With sports media, it increases the number of sign ups and bets placed through the site which helps tremendously with increasing their affiliate revenue. Plus, it’s a value add for their readers as SnapOdds technology help provide them with a tool to get the best live odds.",
  },
  {
    author: "markus",
    category: "Market",
    question:
      "What is our view of the current online sports betting boom in the US?",
    answer:
      "The sports betting boom is the tip of the iceberg. The monetization of sports media and enthusiasm and team support will shift more and more to in-play, mobile micro moments where Snapscreen’s product line is ideally situated.",
  },
  {
    author: "willo",
    category: "Business",
    question: "What’s our outlook and projects for 2022?",
    answer:
      "The feedback at SBC North America 2021 was unbelievably positive. We never had negative feedback in the past – however this year indicates that Snapscreen’s on briding TV and mobile is getting fully accepted by both the sports betting and the media players",
  },
];

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
        <dl className="prose prose-lg max-w-full mx-auto mb-8 divide-y divide-skin-base-muted">
          {faqs.map((faq) => (
            <Faq
              key={faq.question}
              author={faq.author}
              category={faq.category}
              q={faq.question}
              a={faq.answer}
            />
          ))}
        </dl>
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
        email
      }
    }
  }
`;
