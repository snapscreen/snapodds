import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { INode, EmptyProps } from "@/definitions";
import { ArticleCard } from "@/components";

export const NewsLinkList: React.FC<EmptyProps> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            filter: { frontmatter: { type: { eq: "link" } } }
            sort: { order: DESC, fields: frontmatter___date }
          ) {
            edges {
              node {
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  link
                  type
                  image {
                    childImageSharp {
                      gatsbyImageData(
                        width: 160
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
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
            <h2>Coverage and mentions</h2>
          </div>
          <ol className="-mx-4 sm:mx-0 lg:mx-1 space-y-4">
            {data.allMdx.edges.map(({ node }: { node: INode }) => {
              const title = node.frontmatter.title;
              const image = getImage(node.frontmatter.image);
              return (
                <li key={node.frontmatter.link} className="group">
                  <ArticleCard
                    title={title}
                    image={image}
                    link={node.frontmatter.link}
                    date={node.frontmatter.date}
                    type={node.frontmatter.type}
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
