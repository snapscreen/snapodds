import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  ProductCard,
} from "@/components";
import { INode, EmptyProps } from "@/definitions";

export const ProductsList: React.FC<EmptyProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        edges {
          node {
            id
            title
            benefits {
              benefits
            }
            shortText {
              shortText
            }
            slug
            customers
          }
        }
      }
    }
  `)
  return (
    <section>
      <ol className="grid grid-cols-1 gap-4 mb-4 mx-auto sm:mb-8 sm:gap-8 sm:grid-cols-2">
        {data.allContentfulProduct.edges.map(
          ({ node }: { node: INode }) => {
            return (
              <li key={node.id} className="group flex">
                <ProductCard
                  customers={node.customers}
                  title={node.title}
                  shortText={node.shortText.shortText}
                  benefits={node.benefits.benefits}
                  slug={node.slug}
                >
                </ProductCard>
              </li>
            );
          }
        )}
      </ol>
    </section>
  );
};
