import * as React from "react";
import { Link, graphql } from "gatsby";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
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
              term="Published on"
              definition={post.frontmatter.date}
            />
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
        {(previous || next) && (
          <section className="pageNav">
            <div className="pageNav__title">Continue reading</div>
            <nav className="pageNav__nav">
              <ul>
                <li>
                  {previous && (
                    <Link
                      to={previous.fields.slug}
                      rel="prev"
                      className="pageLink"
                    >
                      <ArrowLeftIcon />
                      <span className="pageLink__text">
                        {previous.frontmatter.title}
                      </span>
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next" className="pageLink">
                      <span className="pageLink__text">
                        {next.frontmatter.title}
                      </span>
                      <ArrowRightIcon />
                    </Link>
                  )}
                </li>
              </ul>
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
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
