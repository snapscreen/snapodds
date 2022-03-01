import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { INode, EmptyProps } from "@/definitions";
import { ArticleCard } from "@/components";

export const NewsReleaseList: React.FC<EmptyProps> = () => {
  return (
    <StaticQuery
      query={graphql`
        query NewsReleaseListQuery {
          allContentfulPressArticle(
            sort: { order: DESC, fields: publishDate }
          ) {
            edges {
              node {
                id
                publishDate(formatString: "MMM Do, YYYY")
                title
                slug
                shortText {
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
          <div className="prose prose-lg sm:p-4 mb-8 md:mb-0">
            <h2>Press releases</h2>
          </div>
          <ol className="-mx-4 sm:mx-0 space-y-4">
            {data.allContentfulPressArticle.edges.map(
              ({ node }: { node: INode }) => {
                return (
                  <li key={node.id} className="group">
                    <ArticleCard
                      title={node.title}
                      shortText={node.shortText.childMdx.body}
                      date={node.publishDate}
                      type="article"
                      link={node.slug}
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
