import * as React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  ArticleHeading,
  ArticleCard,
  DefinitionList,
  Container,
  Seo,
} from "@/components";
import { PageProps, INode } from "@/definitions";

import "./BlogPost.styles.css";

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }: { children: INode }) => <strong>{children}</strong>
const Text = ({ children }: { children: INode }) => <p className="mt-0">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target
      return (
        <div className="my-1 max-w-screen-md">
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
          />
        </div>
      )
   },
  },
}

const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const post = data.contentfulPressArticle;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        description={post.shortText}
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
            <ArticleHeading itemProp="headline" text={post.title} />
            <DefinitionList
              inline
              term="Published on"
              definition={post.publishDate}
            />
            <div className="mt-8">
              {renderRichText(post.longText, options)}
            </div>
          </section>
        </article>
        {(previous || next) && (
          <section className="pageNav prose prose-xl">
            <div className="pageNav__title">Further readings</div>
            <nav className="pageNav__nav">
              {previous && (
                <ArticleCard
                  title={previous.title}
                  description={previous.shortText.childMdx.body}
                  link={`${previous.slug}`}
                />
              )}
              {next && (
                <ArticleCard
                  title={next.title}
                  description={next.shortText.childMdx.body}
                  link={`${next.slug}`}
                />
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
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPressArticle(slug: { eq: $slug }) {
      slug
      title
      publishDate(formatString: "MMM Do, YYYY")
      longText {
        raw
      }
    }
    previous: contentfulPressArticle(slug: { eq: $previousPostSlug }) {
      slug
      title
      shortText {
        childMdx {
          body
        }
      }
    }
    next: contentfulPressArticle(slug: { eq: $nextPostSlug }) {
      slug
      title
      shortText {
        childMdx {
          body
        }
      }
    }
  }
`;
