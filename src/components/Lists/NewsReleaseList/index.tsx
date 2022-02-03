import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { INode, EmptyProps } from "@/definitions";
import { ArticleCard } from "@/components";

export const NewsReleaseList: React.FC<EmptyProps> = () => {
  return (
    <StaticQuery
      query={graphql`
        query NewsReleaseListQuery {
          allMdx(
            filter: { frontmatter: { type: { eq: "article" } } }
            sort: { order: DESC, fields: frontmatter___date }
          ) {
            totalCount
            edges {
              node {
                id
                fields {
                  slug
                }
                excerpt
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  description
                  tags
                  type
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
            {data.allMdx.edges.map(({ node }: { node: INode }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <li key={node.id} className="group">
                  <ArticleCard
                    title={title}
                    description={node.frontmatter.description}
                    date={node.frontmatter.date}
                    type={node.frontmatter.type}
                    link={node.fields.slug}
                  />
                </li>
              );
            })}
          </ol>
        </section>
      )}
    />
  );
};
