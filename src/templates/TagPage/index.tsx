import React from "react";
import { graphql } from "gatsby";
import { INode, PageProps } from "@/definitions";
import {
  Layout,
  CalloutHeading,
  ArticleCard,
  Container,
  Seo,
} from "@/components";

const TagPageTemplate: React.FC<PageProps> = ({
  data,
  location,
  pageContext: { tag },
}) => {
  const posts = data.allMdx.edges;
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={` Articles taged with #${tag}`} />
      <Container>
        <span className="capitalize">
          <CalloutHeading itemProp="headline" text={tag} />
        </span>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 -mx-4">
          {posts.map(({ node }: { node: INode }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <li key={node.fields.slug}>
                <ArticleCard
                  link={node.fields.slug}
                  title={title}
                  order={node.frontmatter.order}
                  description={node.frontmatter.description}
                  tags={node.frontmatter.tags}
                  date={node.frontmatter.date}
                />
              </li>
            );
          })}
        </ol>
      </Container>
    </Layout>
  );
};

export default TagPageTemplate;

export const pageQuery = graphql`
  query ($slugs: [String]) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: { slug: { in: $slugs } }
    ) {
      edges {
        node {
          frontmatter {
            order
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
