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
          allContentfulProduct {
            edges {
              node {
                id
                title
                slug
                customers
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
            {data.allContentfulProduct.edges.map(({ node }: { node: INode }) => {
              return (
                <li key={node.id} className="group flex">
                  <ProductCard
                    customers={node.customers}
                    title={node.title}
                    shortText={node.shortText.childMdx.body}
                    benefits={node.benefits.childMdx.body}
                    slug={node.slug}
                  >
                    {node.slug === "operators" && (
                      <>
                        <Button
                          as="button"
                          styleType="primary"
                          onClick={() => modalRefDemoSDK.current.openModal()}
                          className="my-auto sm:ml-8"
                        >
                          Get a demo
                        </Button>
                        <Modal ref={modalRefDemoSDK} title="Book a Snap Demo">
                          <HsFormDemoSDK />
                        </Modal>
                      </>
                    )}
                    {node.slug === "sports-media" && (
                      <>
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
