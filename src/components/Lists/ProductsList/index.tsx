import React, { useRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  ProductCard,
  Modal,
  Button,
  HsFormDemoSDK,
  HsFormDemoBanner,
} from "@/components";
import { INode, EmptyProps } from "@/definitions";

export const ProductsList: React.FC<EmptyProps> = () => {
  const modalRefDemoSDK = useRef();
  const modalRefDemoBanner = useRef();
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            filter: { frontmatter: { type: { eq: "product" } } }
            sort: { order: ASC, fields: frontmatter___order }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  name
                  title
                }
                body
              }
            }
          }
        }
      `}
      render={(data) => (
        <section>
          <div className="prose prose-lg mx-auto mb-8 sm:p-4">
            <h2 className="text-center mx-auto">Our products</h2>
          </div>
          <ol className="grid grid-cols-1 gap-4 mb-4 mx-auto sm:mb-8 sm:gap-8 sm:grid-cols-2">
            {data.allMdx.edges.map(({ node }: { node: INode }) => {
              return (
                <li key={node.id} className="group flex">
                  <ProductCard
                    name={node.frontmatter.name}
                    title={node.frontmatter.title}
                    description={node.frontmatter.description}
                    body={node.body}
                    slug={node.fields.slug}
                  >
                    {node.frontmatter.name === "Snap" && (
                      <>
                        <Button
                          as="button"
                          styleType="primary"
                          onClick={() => modalRefDemoSDK.current.openModal()}
                          className="ml-8 my-auto"
                        >
                          Get a demo
                        </Button>
                        <Modal ref={modalRefDemoSDK} title="Book a Snap Demo">
                          <HsFormDemoSDK />
                        </Modal>
                      </>
                    )}
                    {node.frontmatter.name === "SnapOdds" && (
                      <>
                        <Button
                          as="button"
                          styleType="primary"
                          onClick={() => {
                            return modalRefDemoBanner.current.openModal();
                          }}
                          className="ml-8 my-auto"
                        >
                          Get a demo
                        </Button>
                        <Modal
                          ref={modalRefDemoBanner}
                          title="Book a SnapOdds Demo"
                        >
                          <HsFormDemoBanner />
                        </Modal>
                      </>
                    )}
                  </ProductCard>
                </li>
              );
            })}
          </ol>
        </section>
      )}
    />
  );
};
