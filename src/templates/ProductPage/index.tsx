import React, { useRef } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Layout,
  Container,
  Hero,
  Seo,
  Modal,
  LogoCloud,
  HsFormDemoSDK,
  HsFormDemoBanner,
  Button,
} from "@/components";
import { PageProps } from "@/definitions";

import "./ProductPage.styles.css";

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }: { children: INode }) => <strong>{children}</strong>
const Text = ({ children }: { children: INode }) => <p className="mt-0">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target
      return (
        <div className="my-1 max-w-screen-md">
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
          />
        </div>
      )
   },
  },
}

const ProductPageTemplate: React.FC<PageProps> = ({ data, location }) => {
  const product = data.contentfulProduct;
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const modalRefDemoSDK = useRef() as React.MutableRefObject<any>;
  const modalRefDemoBanner = useRef() as React.MutableRefObject<any>;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={product.title}
      />
      <Hero
        title={product.title}
        preTitle={product.customers}
      ></Hero>
      <Container>
        <article className="mx-auto prose prose-xl max-w-full space-y-8 divide-y divide-skin-base-muted mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:mr-16">
              <GatsbyImage
                image={getImage(product.heroImage)}
                alt=""
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="w-full md:w-1/2">
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
            </div>
          </div>
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
