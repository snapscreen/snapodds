import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { INode, PageProps } from "@/definitions";
import {
  Layout,
  ArticleCard,
  Container,
  Hero,
  Button,
  Seo,
} from "@/components";
import { DownloadIcon } from "@heroicons/react/outline";

const News: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Newsroom and Press" />
        <Hero title="Sorry." lead="There is a problem loading our articles." />
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Newsroom and Press" />
      <Hero
        title="Newsroom and Press"
        lead="Below you will find our press releases and brand assets."
      >
        <div className="flex justify-center sm:hidden">
          <Button as="link" to="/news#articles">
            Jump to press releases
          </Button>
        </div>
      </Hero>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <div className="prose prose-lg sm:p-4">
              <h2>SnapOdds Brand Assets</h2>
              <div className="py-2">
                <Button
                  as="externalLink"
                  styleType="primary"
                  href="https://github.com/snapscreen/snapodds/raw/main/static/SnapOdds-Logo-Kit.zip"
                >
                  <span>Get Logo Kit</span>
                  <DownloadIcon className="w-6 h-6" />
                </Button>
                <p>
                  SnapOdds logo is composed of a clean, modern logotype and
                  viewfinder borders that represents our technology. The
                  standard color is SnapOdds is teal (#2dd4bf) with white or
                  black being acceptable on dark or light backgrounds. Please
                  don’t alter the logo in any way.
                </p>
              </div>
              <h2>About Snapscreen, Inc.</h2>
              <p className="py-2">
                Based in New York with offices in Austria and Australia,
                Snapscreen is a technology company focused on the use of mobile
                devices and image recognition for broadcast TV and streaming in
                the world of sports and entertainment.
              </p>
              <h2>Images for Press</h2>
              <div className="py-2">
                <div className="flex flex-col items-start sm:flex-row items-center">
                  <StaticImage
                    src="../images/Thomas-Willomitzer-Portrait-SnapOdds.jpg"
                    alt="Portrait of Thomas Willomitzer, CEO Snapscreen Inc."
                    placeholder="blurred"
                    layout="fixed"
                    height={320}
                    className="w-full mr-auto"
                  />
                  <figcaption className="w-full flex-1 sm:ml-8">
                    <p>
                      Thomas Willomitzer
                      <br />
                      Founder & CEO – Snapscreen, Inc.
                    </p>
                    <Button
                      as="externalLink"
                      href="https://raw.githubusercontent.com/snapscreen/snapodds/main/src/images/Thomas-Willomitzer-Portrait-SnapOdds.jpg"
                      styleType="normal"
                    >
                      <span>Download JPG</span>
                      <DownloadIcon className="w-6 h-6" />
                    </Button>
                  </figcaption>
                </div>
              </div>
            </div>
            <hr className="mt-4 border-skin-base-muted" />
          </section>
          <section id="articles">
            <div className="prose prose-lg sm:p-4 mb-8 md:mb-0">
              <h2>Press releases</h2>
            </div>
            <ol className="-mx-4 sm:mx-0 lg:mx-1">
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
          </section>
        </div>
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
