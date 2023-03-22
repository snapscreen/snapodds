import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { INode, EmptyProps } from "@/definitions";
import { ArticleCard } from "@/components";

export const NewsReleaseList: React.FC<EmptyProps> = () => {
  const data = useStaticQuery(graphql`
    query NewsReleaseListQuery {
      allContentfulPressArticle(sort: {publishDate: DESC}) {
        edges {
          node {
            id
            publishDate(formatString: "MMM Do, YYYY")
            title
            slug
          }
        }
      }
    }
  `)
  return (
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
                  shortText=""
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
  );
};
