import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { INode, EmptyProps } from "@/definitions";
import { ArticleCard } from "@/components";

export const NewsLinkList: React.FC<EmptyProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPressCoverage(
        filter: {category: {in: ["SnapOdds", "Corporate"]}}
        sort: {publishDate: DESC}
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
  `)

  return (
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
                  shortText=""
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
  );
};
