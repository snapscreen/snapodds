import React, { useRef } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  Layout,
  Container,
  CalloutHeading,
  Seo,
  Modal,
  LogoCloud,
  HsFormDemoSDK,
  Button,
} from "@/components";
import { PageProps } from "@/definitions";

import "./ProductPage.styles.css";

import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Bold = ({ children }: { children: React.ReactNode }) => <strong>{children}</strong>;
const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-0">{children}</p>
);

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Text>{children}</Text>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target;
      const img = getImage(gatsbyImageData);

      return (
        <div className="my-1 max-w-screen-md">
          {img && <GatsbyImage image={img as IGatsbyImageData} alt={description} />}
        </div>
      );
    },
  },
};

const ProductPageTemplate: React.FC<PageProps> = ({ data, location }) => {
  const product = data.contentfulProduct;

  const modalRefDemo = useRef() as React.MutableRefObject<any>;

  return (
    <Layout
      location={location}
      title={product.title}
    >
      <Seo title={product.title} />
      <Container>
        <article className="mx-4 prose prose-xl max-w-full space-y-8 mb-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-16">
            <div className="lg:col-span-5">
              <p>SnapOdds <strong>{product.customers}</strong></p>
              <CalloutHeading itemProp="headline" text={product.title} />
              <div className="my-8 lead">
                <p>{product.shortText.shortText}</p>
                {product.factsheet.file.url &&
                  <Button
                    as="externalLink"
                    styleType="normal"
                    href={`${product.factsheet.file.url}`}
                  >
                    Download 1-Pager PDF
                  </Button>
                }
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-7 lg:mt-16">
              <GatsbyImage
                image={getImage(product.heroImage)}
                alt=""
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
          </div>
          <div className="mt-8">
            {renderRichText(product.longText, options)}
          </div>
          <div className="border-t flex flex-col sm:flex-row justify-center pt-12 space-y-4 sm:space-y-0 sm:space-x-8">
            <Button as="link" styleType="ghost" to="/contact">
              Contact Sales
            </Button>
            <Button
              as="button"
              styleType="primary"
              onClick={() => modalRefDemo.current.openModal()}
              className="my-auto sm:ml-8"
            >
              Get a demo
            </Button>
          </div>
          <Modal ref={modalRefDemo} title="Book a Demo">
            <HsFormDemoSDK />
          </Modal>
        </article>
      </Container>
      {product.slug === "social" && (
        <div className="prose prose-xl max-w-full p-16 bg-base-flash">
          <Container>
            <h2 className="text-center mt-0">Embed SnapOdds Social into your Channels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-40 mx-4">
              <div className="text-center">
                <p className="lead font-bold">Facebook</p>
                <iframe
                  src="https://player.vimeo.com/video/792320851?h=3661ff155c&title=0&byline=0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="mx-auto w-2/3 md:w-full h-auto aspect-phone shadow-xl"
                />
              </div>
              <div className="text-center">
                <p className="lead font-bold">Twitter</p>
                <iframe
                  src="https://player.vimeo.com/video/742320714?h=143a0a013d&title=0&byline=0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="mx-auto w-2/3 md:w-full h-auto aspect-phone shadow-xl"
                />
              </div>
              <div className="text-center">
                <p className="lead font-bold">Instagram</p>
                <iframe
                  src="https://player.vimeo.com/video/792274683?h=62dcdbf66d&title=0&byline=0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="mx-auto w-2/3 md:w-full h-auto aspect-phone shadow-xl"
                />
              </div>
            </div>
          </Container>
        </div>
      )}
      <LogoCloud />
    </Layout>
  );
};

export default ProductPageTemplate;

export const pageQuery = graphql`
  query ProductBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      slug
      customers
      title
      shortText {
        shortText
      }
      longText {
        raw
      }
      factsheet {
        file {
          url
        }
      }
      heroImage {
        title
        description
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
