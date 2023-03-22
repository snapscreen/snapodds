import * as React from "react";
import { graphql } from "gatsby";
import get from 'lodash/get';
import {
  Layout,
  ArticleHeading,
  ArticleCard,
  DefinitionList,
  Container,
  Seo,
} from "@/components";
import { PageProps } from "@/definitions";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import "./BlogPost.styles.css";

const Bold = ({ children }: { children: React.ReactNode }) => <strong>{children}</strong>;
const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-0">{children}</p>
);

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Text>{children}</Text>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target;
      const img = getImage(gatsbyImageData);

      return (
        <div className="my-1 max-w-screen-md">
          {img && <GatsbyImage image={img as IGatsbyImageData} alt={description} />}
        </div>
      );
    },
  },
};

class BlogPostTemplate extends React.Component<PageProps> {
  render() {
    const post = get(this.props, 'data.contentfulPressArticle');
    if (!post) {
      return <div>Loading...</div>;
    }
    const previous = get(this.props, 'data.previous');
    const next = get(this.props, 'data.next');
    return (
      <Layout location={this.props.location} title={this.props.data.site.siteMetadata.title}>
        <Seo title={post.title} />
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
              <div className="mt-8">{renderRichText(post.longText, options)}</div>
            </section>
          </article>
          {(previous || next) && (
            <section className="pageNav">
              <div className="pageNav__title">Further readings</div>
              <nav className="pageNav__nav">
                {previous && (
                  <ArticleCard
                    title={previous.title}
                    link={`${previous.slug}`}
                  />
                )}
                {next && (
                  <ArticleCard
                    title={next.title}
                    link={`${next.slug}`}
                  />
                )}
              </nav>
            </section>
          )}
        </Container>
      </Layout>
    )
  }
}

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
        shortText
      }
    }
    next: contentfulPressArticle(slug: { eq: $nextPostSlug }) {
      slug
      title
      shortText {
        shortText
      }
    }
  }
`;
