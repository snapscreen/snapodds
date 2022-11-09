import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { INode, EmptyProps } from "@/definitions";
import { ArticleCard } from "@/components";

export const NewsLinkList: React.FC<EmptyProps> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulPressCoverage(
            filter: { category: { eq: "SnapOdds" } }
            sort: { order: DESC, fields: publishDate }
          ) {
            edges {
              node {
                id
                publishDate(formatString: "MMM Do, YYYY")
                title
                link
                image {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <section>
          <div className="prose prose-lg sm:p-4 mb-8 md:mb-0">
            <h2>Coverage and mentions</h2>
          </div>
          <ol className="-mx-4 sm:mx-0 space-y-4">
            {data.allContentfulPressCoverage.edges.map(
              ({ node }: { node: INode }) => {
                return (
                  <li key={node.id} className="group">
                    <ArticleCard
                      title={node.title}
                      date={node.publishDate}
                      link={node.link}
                      type="link"
                      image={node.image}
                    />
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
