import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import {
  Layout,
  ArticleHeading,
  DefinitionList,
  Container,
  Seo,
} from "@/components";
import { PageProps } from "@/definitions";

import "./BlogPost.styles.css";

const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container>
        <article
          className="article"
          itemScope
          itemType="http://schema.org/Article"
        >
          <section
            itemProp="articleBody"
            className="prose prose-xl mt-8 mx-auto"
          >
            <ArticleHeading itemProp="headline" text={post.frontmatter.title} />
            <DefinitionList
              inline
              term="Published on"
              definition={post.frontmatter.date}
            />
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
        {(previous || next) && (
          <section className="pageNav prose prose-xl">
            <div className="pageNav__title">Further readings</div>
            <nav className="pageNav__nav">
              {previous && (
                <div className="pageNav__item">
                  <Link
                    to={`/news${previous.fields.slug}`}
                    rel="prev"
                    className="pageLink"
                  >
                    <h4 className="pageLink__text">
                      {previous.frontmatter.title}
                    </h4>
                  </Link>
                  <p>{previous.frontmatter.description}</p>
                </div>
              )}
              {next && (
                <div className="pageNav__item">
                  <Link
                    to={`/news${next.fields.slug}`}
                    rel="next"
                    className="pageLink"
                  >
                    <h4 className="pageLink__text">{next.frontmatter.title}</h4>
                  </Link>
                  <p>{next.frontmatter.description}</p>
                </div>
              )}
            </nav>
          </section>
        )}
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
    }
  }
`;
