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
  HsFormDemoSDK,
  HsFormDemoBanner,
  Button,
} from "@/components";
import { PageProps } from "@/definitions";

import "./ProductPage.styles.css";

const ProductPageTemplate: React.FC<PageProps> = ({ data, location }) => {
  const product = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const image = getImage(product.frontmatter.image);

  const modalRefDemoSDK = useRef() as React.MutableRefObject<any>;
  const modalRefDemoBanner = useRef() as React.MutableRefObject<any>;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={product.frontmatter.title}
        description={product.frontmatter.description || product.excerpt}
      />
      <Hero
        title={product.frontmatter.claim}
        lead={product.frontmatter.description}
      ></Hero>
      <Container>
        <article className="mx-auto prose prose-xl max-w-full space-y-8 divide-y divide-skin-base-muted mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:mr-16">
              <GatsbyImage
                image={image}
                alt={product.frontmatter.name}
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="uppercase text-lg font-bold text-semibold mt-4 lg:mt-16">
                {product.frontmatter.name}
              </div>
              <MDXRenderer>{product.body}</MDXRenderer>
              <div className="flex flex-col sm:flex-row justify-start mt-12 space-y-4 sm:space-y-0 sm:space-x-8">
                <Button as="link" styleType="ghost" to="/contact">
                  Contact Sales
                </Button>
                {product.frontmatter.name === "Snap" && (
                  <Button
                    as="button"
                    styleType="primary"
                    onClick={() => modalRefDemoSDK.current.openModal()}
                    className="my-auto sm:ml-8"
                  >
                    Get a demo
                  </Button>
                )}
                {product.frontmatter.name === "SnapOdds" && (
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
              {product.frontmatter.name === "Snap" && (
                <Modal ref={modalRefDemoSDK} title="Book a Snap Demo">
                  <HsFormDemoSDK />
                </Modal>
              )}
              {product.frontmatter.name === "SnapOdds" && (
                <Modal ref={modalRefDemoBanner} title="Book a SnapOdds Demo">
                  <HsFormDemoBanner />
                </Modal>
              )}
            </div>
          </div>
        </article>
      </Container>
    </Layout>
  );
};

export default ProductPageTemplate;

export const pageQuery = graphql`
  query ProductBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        claim
        name
        description
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
