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
          <ol className="grid grid-cols-1 gap-4 mb-4 mx-auto sm:mb-8 sm:gap-8 sm:grid-cols-2">
            {data.allContentfulProduct.edges.map(
              ({ node }: { node: INode }) => {
                return (
                  <li key={node.id} className="group flex">
                    <ProductCard
                      customers={node.customers}
                      title={node.title}
                      shortText={node.shortText.childMdx.body}
                      benefits={node.benefits.childMdx.body}
                      slug={node.slug}
                    >
                    </ProductCard>
                  </li>
                );
              }
            )}
          </ol>
        </section>
      )}
    />
  );
};
