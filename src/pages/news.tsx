import * as React from "react";
import { graphql } from "gatsby";
import { INode, PageProps } from "@/definitions";
import { Layout, ArticleCard, Container, Hero, Seo } from "@/components";

const News: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="News and press" />
        <Hero title="Sorry." lead="There is a problem loading our articles." />
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="News and press" />
      <Hero title="Follow Our Journey." />
      <Container>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8 -mx-4 sm:mx-0 lg:mx-1">
          {posts.map(({ node }: { node: INode }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <li key={node.fields.slug} className="group">
                <ArticleCard
                  link={node.fields.slug}
                  title={title}
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

export default News;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
