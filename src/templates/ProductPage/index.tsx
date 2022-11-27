import React, { useRef } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Layout,
  Container,
  CalloutHeading,
  Seo,
  Modal,
  LogoCloud,
  HsFormDemoSDK,
  HsFormDemoBanner,
  Button,
} from "@/components";
import { PageProps } from "@/definitions";

import "./ProductPage.styles.css";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Bold = ({ children }: { children: INode }) => <strong>{children}</strong>;
const Text = ({ children }: { children: INode }) => (
  <p className="mt-0 mb-0">{children}</p>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target;
      return (
        <div className="my-1 max-w-screen-md">
          <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
        </div>
      );
    },
  },
};

const ProductPageTemplate: React.FC<PageProps> = ({ data, location }) => {
  const product = data.contentfulProduct;
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const modalRefDemoSDK = useRef() as React.MutableRefObject<any>;
  const modalRefDemoBanner = useRef() as React.MutableRefObject<any>;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={product.title} />
      <Container>
        <article className="mx-auto prose prose-xl max-w-full space-y-8 mb-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-16">
            <div className="lg:col-span-5">
              <p>SnapOdds <strong>{product.customers}</strong></p>
              <CalloutHeading itemProp="headline" text={product.title} />
              <div className="my-8 lead">
                <MDXRenderer>{product.shortText.childMdx.body}</MDXRenderer>
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
          <div className="flex flex-col sm:flex-row justify-start mt-12 space-y-4 sm:space-y-0 sm:space-x-8">
            <Button as="link" styleType="ghost" to="/contact">
              Contact Sales
            </Button>
            {product.slug === "operators" && (
              <Button
                as="button"
                styleType="primary"
                onClick={() => modalRefDemoSDK.current.openModal()}
                className="my-auto sm:ml-8"
              >
                Get a demo
              </Button>
            )}
            {product.slug === "sports-media" && (
              <Button
                as="button"
                styleType="primary"
                onClick={() => {
                  return modalRefDemoBanner.current.openModal();
                }}
                className="my-auto sm:ml-8"
              >
                Get a demo
              </Button>
            )}
          </div>
          {product.slug === "operators" && (
            <Modal ref={modalRefDemoSDK} title="Book a Demo">
              <HsFormDemoSDK />
            </Modal>
          )}
          {product.slug === "sports-media" && (
            <Modal ref={modalRefDemoBanner} title="Book a Demo">
              <HsFormDemoBanner />
            </Modal>
          )}
        </article>
      </Container>
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
        childMdx {
          body
        }
      }
      benefits {
        childMdx {
          body
        }
      }
      longText {
        raw
      }
      heroImage {
        title
        description
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
